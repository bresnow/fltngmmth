import {Base64} from "js-base64";
import Docker from "dockerode";
import { v4 as uuid } from "uuid";
let log = console.log.bind(console);

function safeParseChunk(chunk) {
  chunk = `${chunk}`.trim();
  try {
    const chunks = chunk.split("\n");
    const returnVal = [];
    chunks.forEach((chk) => {
      returnVal.push(JSON.parse(chk));
    });
    return returnVal;
  } catch (ignore) {
    return [
      {
        stream: `Cannot parse ${chunk}`
      }
    ];
  }
}
class IDockerUpdateOrders {
}
IDockerUpdateOrders.AUTO = "auto";
IDockerUpdateOrders.STOP_FIRST = "stopFirst";
IDockerUpdateOrders.START_FIRST = "startFirst";
class DockerApi {
  constructor(connectionParams) {
    this.dockerode = new Docker(connectionParams);
  }
  initSwarm(ip, portNumber) {
    const self = this;
    portNumber = portNumber || 2377;
    const port = `${portNumber}`;
    const advertiseAddr = `${ip}:${port}`;
    const swarmOptions = {
      ListenAddr: `0.0.0.0:${port}`,
      AdvertiseAddr: advertiseAddr,
      ForceNewCluster: false
    };
    log(`Starting swarm at ${advertiseAddr}`);
    return self.dockerode.swarmInit(swarmOptions);
  }
  swarmLeave(forced) {
    const self = this;
    return self.dockerode.swarmLeave({
      force: !!forced
    });
  }
  async getNodeIdByServiceName(serviceName, retryCount) {
    const self = this;
    retryCount = retryCount || 0;
    const data = await self.dockerode.listTasks({
      filters: {
        service: [serviceName],
        "desired-state": ["running"]
      }
    });
    if (data.length > 0) {
      return Promise.resolve(data[0].NodeID);
    } else {
      if (retryCount < 10) {
        return new Promise(function(resolve) {
          setTimeout(function() {
            resolve();
          }, 3e3);
        }).then(function() {
          log(
            `Retrying to get NodeID for ${serviceName} retry count:${retryCount}`
          );
          return self.getNodeIdByServiceName(serviceName, retryCount + 1);
        });
      }
      throw new Error(
        `There must be only one instance (not ${data.length}) of the service running to find node id. ${serviceName}`
      );
    }
  }
  async getLeaderNodeId() {
    const self = this;
    await Promise.resolve();
    const nodes = await self.dockerode.listNodes();
    for (let idx = 0; idx < nodes.length; idx++) {
      const node = nodes[idx];
      if (node.ManagerStatus && node.ManagerStatus.Leader) {
        return node.ID;
      }
    }
  }
  async getAllServices() {
    const self = this;
    await Promise.resolve();
    const services = await self.dockerode.listServices();
    return services || [];
  }
  createJoinCommand(managerIp, token, workerIp) {
    return `docker swarm join --token ${token} ${managerIp}:2377 --advertise-addr ${workerIp}:2377`;
  }
  async getNodesInfo() {
    const self = this;
    await Promise.resolve();
    const nodes = await self.dockerode.listNodes();
    const ret = [];
    if (!nodes || !nodes.length) {
      return ret;
    }
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      ret.push({
        nodeId: n.ID,
        type: n.Spec.Role,
        isLeader: n.Spec.Role === "manager" && n.ManagerStatus && n.ManagerStatus.Leader === true,
        hostname: n.Description.Hostname,
        architecture: n.Description.Platform.Architecture,
        operatingSystem: n.Description.Platform.OS,
        nanoCpu: n.Description.Resources.NanoCPUs,
        memoryBytes: n.Description.Resources.MemoryBytes,
        dockerEngineVersion: n.Description.Engine.EngineVersion,
        ip: n.Status.Addr,
        state: n.Status.State,
        status: n.Spec.Availability
      });
    }
    return ret;
  }
  async getJoinToken(isManager) {
    const self = this;
    await Promise.resolve();
    const inspectData = await self.dockerode.swarmInspect();
    if (!inspectData || !inspectData.JoinTokens) {
      throw new Error("Inspect data does not contain tokens!!");
    }
    const token = isManager ? inspectData.JoinTokens.Manager : inspectData.JoinTokens.Worker;
    if (!token) {
      throw new Error("Inspect data does not contain the required token!!");
    }
    return token;
  }
  async buildImageFromDockerFile(imageName, newVersionNumber, tarballFilePath, envVars = [], registryConfig) {
    const self = this;
    const newVersion = `${newVersionNumber}`;
    log("Building docker image. This might take a few minutes...");
    await Promise.resolve();
    const buildargs = {};
    envVars.forEach((env) => {
      buildargs[env.key] = env.value;
    });
    if (envVars.length > 0) {
      log("Ignore warnings for unconsumed build-args if there is any");
    }
    const optionsForBuild = {
      t: imageName,
      buildargs
    };
    if (Object.keys(registryConfig).length > 0) {
      optionsForBuild["registryconfig"] = registryConfig;
    }
    const stream = await self.dockerode.buildImage(
      tarballFilePath,
      optionsForBuild
    );
    await new Promise(function(resolve, reject) {
      let errorMessage = "";
      stream.setEncoding("utf8");
      stream.on("data", function(chunkRaw) {
        log(`stream data ${chunkRaw}`);
        safeParseChunk(chunkRaw).forEach((chunk_1) => {
          const chuckStream = chunk_1.stream;
          if (chuckStream) {
            log(chuckStream);
          }
          if (chunk_1.error) {
            log(chunk_1.error);
            const errorDetails = JSON.stringify(chunk_1.errorDetail);
            log(errorDetails);
            log(errorDetails);
            log(chunk_1.error);
            errorMessage += "\n";
            errorMessage += errorDetails;
            errorMessage += "\n";
            errorMessage += chunk_1.error;
          }
        });
      });
      stream.on("end", function() {
        if (errorMessage) {
          reject(errorMessage);
          return;
        }
        resolve();
      });
      stream.on("error", function(chunk_2) {
        errorMessage += chunk_2;
      });
    });
    return await self.dockerode.getImage(imageName).tag({
      tag: newVersion,
      repo: imageName
    });
  }
  async pullImage(imageNameIncludingTag, authObj) {
    const self = this;
    const [repository, tag] = imageNameIncludingTag.split(":");
    await Promise.resolve();
    const stream = await self.dockerode.createImage({
      fromImage: repository,
      tag,
      authconfig: authObj
    });
    return await new Promise(function(resolve, reject) {
      let errorMessage = "";
      const logsBeforeError = [];
      for (let i = 0; i < 20; i++) {
        logsBeforeError.push("");
      }
      stream.setEncoding("utf8");
      stream.on("data", function(chunkRaw) {
        log(`stream data ${chunkRaw}`);
        safeParseChunk(chunkRaw).forEach((chunk_1) => {
          const chuckStream = chunk_1.stream;
          if (chuckStream) {
            logsBeforeError.shift();
            logsBeforeError.push(chuckStream);
          }
          if (chunk_1.error) {
            log(chunk_1.error);
            log(JSON.stringify(chunk_1.errorDetail));
            errorMessage += "\n [truncated] \n";
            errorMessage += logsBeforeError.join("");
            errorMessage += "\n";
            errorMessage += chunk_1.error;
          }
        });
      });
      stream.on("end", function() {
        if (errorMessage) {
          reject(errorMessage);
          return;
        }
        resolve();
      });
      stream.on("error", function(chunk_2) {
        errorMessage += chunk_2;
      });
    });
  }
  async ensureContainerStoppedAndRemoved(nameOrId, networkIdOrName) {
    const self = this;
    log(`Ensuring Stopped & Removed Container: ${nameOrId}`);
    return Promise.resolve().then(function() {
      log(`Stopping ${nameOrId}`);
      return self.dockerode.getContainer(nameOrId).stop({
        t: 2
      });
    }).then(function() {
      log(`Waiting to stop ${nameOrId}`);
      return Promise.race([
        self.dockerode.getContainer(nameOrId).wait(),
        new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve();
          }, 7e3);
        })
      ]);
    }).catch(function(error) {
      if (error && error.statusCode === 304) {
        log(`Container already stopped: ${nameOrId}`);
        return false;
      }
      throw error;
    }).then(function() {
      log(`Removing ${nameOrId}`);
      return self.dockerode.getContainer(nameOrId).remove({
        force: true
      });
    }).then(function() {
      return self.pruneContainers();
    }).then(function() {
      log(`Disconnecting from network: ${nameOrId}`);
      return self.dockerode.getNetwork(networkIdOrName).disconnect({
        Force: true,
        Container: nameOrId
      });
    }).catch(function(error) {
      if (error && error.statusCode === 404) {
        log(`Container not found: ${nameOrId}`);
        return false;
      }
      throw error;
    });
  }
  async createStickyContainer(containerName, imageName, volumes, network, arrayOfEnvKeyAndValue, addedCapabilities, addedSecOptions, authObj) {
    const self = this;
    log(`Creating Sticky Container: ${imageName}`);
    const volumesMapped = [];
    volumes = volumes || [];
    for (let i = 0; i < volumes.length; i++) {
      const v = volumes[i];
      volumesMapped.push(
        `${v.hostPath}:${v.containerPath}${v.mode ? `:${v.mode}` : ""}`
      );
    }
    const envs = [];
    arrayOfEnvKeyAndValue = arrayOfEnvKeyAndValue || [];
    for (let i = 0; i < arrayOfEnvKeyAndValue.length; i++) {
      const e = arrayOfEnvKeyAndValue[i];
      envs.push(`${e.key}=${e.value}`);
    }
    return Promise.resolve().then(function() {
      return self.pullImage(imageName, authObj);
    }).then(function() {
      return self.dockerode.createContainer({
        name: containerName,
        Image: imageName,
        Env: envs,
        HostConfig: {
          Binds: volumesMapped,
          CapAdd: addedCapabilities,
          SecurityOpt: addedSecOptions,
          NetworkMode: network,
          RestartPolicy: {
            Name: "always"
          }
        }
      });
    }).then(function(data) {
      return data.start();
    });
  }
  async retag(currentName, targetName) {
    const self = this;
    return Promise.resolve().then(function() {
      const currentSplit = currentName.split(":");
      const targetSplit = targetName.split(":");
      if (targetSplit.length < 2 || targetSplit.length < 2) {
        throw new Error("This method only support image tags with version");
      }
      if (currentSplit[currentSplit.length - 1].indexOf("/") > 0) {
        throw new Error(
          "This method only support image tags with version - current image."
        );
      }
      const targetVersion = targetSplit[targetSplit.length - 1];
      if (targetVersion.indexOf("/") > 0) {
        throw new Error(
          "This method only support image tags with version - target image."
        );
      }
      return self.dockerode.getImage(currentName).tag({
        tag: targetVersion,
        repo: targetSplit.slice(0, targetSplit.length - 1).join(":")
      });
    });
  }
  async pushImage(imageName, authObj) {
    const self = this;
    log(`Pushing to remote: ${imageName}`);
    log(`Server: ${authObj ? authObj.serveraddress : "N/A"}`);
    log("This might take a few minutes...");
    return Promise.resolve().then(function() {
      return self.dockerode.getImage(imageName).push({
        authconfig: authObj
      });
    }).then(function(stream) {
      return new Promise(function(resolve, reject) {
        let errorMessage = "";
        stream.setEncoding("utf8");
        stream.on("data", function(chunkRaw) {
          log(`stream data ${chunkRaw}`);
          safeParseChunk(chunkRaw).forEach((chunk) => {
            const chuckStream = chunk.stream;
            if (chuckStream) {
              log(chuckStream);
            }
            if (chunk.error) {
              log(chunk.error);
              const errorDetails = JSON.stringify(chunk.errorDetail);
              log(errorDetails);
              log(errorDetails);
              log(chunk.error);
              errorMessage += "\n";
              errorMessage += errorDetails;
              errorMessage += chunk.error;
            }
          });
        });
        stream.on("end", function() {
          if (errorMessage) {
            log("Push failed...");
            reject(errorMessage);
            return;
          }
          log("Push succeeded...");
          resolve();
        });
        stream.on("error", function(chunk) {
          errorMessage += chunk;
        });
      });
    });
  }
  createServiceOnNodeId(imageName, serviceName, portsToMap, nodeId, volumeToMount, arrayOfEnvKeyAndValue, resourcesObject) {
    const self = this;
    const ports = [];
    if (portsToMap) {
      for (let i = 0; i < portsToMap.length; i++) {
        const publishMode = portsToMap[i].publishMode;
        const protocol = portsToMap[i].protocol;
        const containerPort = portsToMap[i].containerPort;
        const hostPort = portsToMap[i].hostPort;
        if (protocol) {
          const item = {
            Protocol: protocol,
            TargetPort: containerPort,
            PublishedPort: hostPort
          };
          if (publishMode) {
            item.PublishMode = publishMode;
          }
          ports.push(item);
        } else {
          const tcpItem = {
            Protocol: "tcp",
            TargetPort: containerPort,
            PublishedPort: hostPort
          };
          const udpItem = {
            Protocol: "udp",
            TargetPort: containerPort,
            PublishedPort: hostPort
          };
          if (publishMode) {
            tcpItem.PublishMode = publishMode;
            udpItem.PublishMode = publishMode;
          }
          ports.push(tcpItem);
          ports.push(udpItem);
        }
      }
    }
    const dataToCreate = {
      name: serviceName,
      TaskTemplate: {
        ContainerSpec: {
          Image: imageName
        },
        Resources: resourcesObject,
        Placement: {
          Constraints: nodeId ? [`node.id == ${nodeId}`] : []
        },
        LogDriver: {
          Name: "json-file",
          Options: {
            "max-size": "100MB"
          }
        }
      },
      EndpointSpec: {
        Ports: ports
      }
    };
    if (volumeToMount) {
      const mts = [];
      for (let idx = 0; idx < volumeToMount.length; idx++) {
        const v = volumeToMount[idx];
        if (!v.containerPath) {
          throw new Error(
            "Service Create currently only supports bind volumes."
          );
        }
        mts.push({
          Source: v.hostPath,
          Target: v.containerPath,
          Type: "bind",
          ReadOnly: false,
          Consistency: "default"
        });
      }
      dataToCreate.TaskTemplate.ContainerSpec.Mounts = mts;
    }
    if (arrayOfEnvKeyAndValue) {
      dataToCreate.TaskTemplate.ContainerSpec.Env = [];
      for (let i = 0; i < arrayOfEnvKeyAndValue.length; i++) {
        const keyVal = arrayOfEnvKeyAndValue[i];
        const newSet = `${keyVal.key}=${keyVal.value}`;
        dataToCreate.TaskTemplate.ContainerSpec.Env.push(newSet);
      }
    }
    return self.dockerode.createService(dataToCreate);
  }
  removeServiceByName(serviceName) {
    const self = this;
    return self.dockerode.getService(serviceName).remove();
  }
  deleteVols(vols) {
    const self = this;
    const promises = [];
    const failedVols = [];
    vols.forEach((v) => {
      promises.push(async function() {
        return self.dockerode.getVolume(v).remove().catch((err) => {
          log(err);
          failedVols.push(v);
        });
      });
    });
    return Promise.all(promises).then(function() {
      return failedVols;
    });
  }
  async isServiceRunningByName(serviceName) {
    return this.dockerode.getService(serviceName).inspect().then(function() {
      return true;
    }).catch(function(error) {
      if (error && error.statusCode === 404) {
        return false;
      }
      throw error;
    });
  }
  async getContainerIdByServiceName(serviceName, retryCountMaybe) {
    const self = this;
    const retryCount = retryCountMaybe || 0;
    return self.dockerode.listTasks({
      filters: {
        service: [serviceName],
        "desired-state": ["running"]
      }
    }).then(function(data) {
      if (data.length >= 2) {
        throw new Error(
          `There must be only one instance (not ${data.length}) of the service running for sendSingleContainerKillHUP. ${serviceName}`
        );
      }
      if (data.length === 1 && !!data[0].Status.ContainerStatus) {
        return Promise.resolve(data[0].Status.ContainerStatus.ContainerID);
      }
      if (retryCount < 10) {
        return new Promise(function(resolve) {
          setTimeout(function() {
            resolve();
          }, 3e3);
        }).then(function() {
          log(
            `Retrying to get containerId for ${serviceName} retry count:${retryCount}`
          );
          return self.getContainerIdByServiceName(
            serviceName,
            retryCount + 1
          );
        });
      }
      throw new Error("No containerId is found");
    });
  }
  async executeCommand(serviceName, cmd) {
    const self = this;
    return self.getContainerIdByServiceName(serviceName).then(function(containerIdFound) {
      const cmdForLogging = (cmd || []).join(" ");
      log(`executeCommand Container: ${serviceName} ${cmdForLogging} `);
      if (!Array.isArray(cmd)) {
        throw new Error(
          'Command should be an array. e.g, ["echo", "--help"] '
        );
      }
      return self.dockerode.getContainer(containerIdFound).exec({
        AttachStdin: false,
        AttachStdout: true,
        AttachStderr: true,
        Tty: true,
        Cmd: cmd
      }).then(function(execInstance) {
        return execInstance.start({
          Detach: false,
          Tty: true
        });
      }).then(function(execStream) {
        if (!execStream) {
          throw new Error(
            `No output from service: ${serviceName} running ${cmd}`
          );
        }
        return new Promise(function(resolve) {
          let finished = false;
          let outputBody = "";
          execStream.setEncoding("utf8");
          execStream.on("data", function(chunk) {
            outputBody += chunk;
          });
          execStream.on("end", function() {
            if (finished) {
              return;
            }
            finished = true;
            resolve(outputBody);
          });
          execStream.on("close", function() {
            if (finished) {
              return;
            }
            finished = true;
            resolve(outputBody);
          });
        });
      });
    });
  }
  async sendSingleContainerKillHUP(serviceName) {
    const self = this;
    return self.getContainerIdByServiceName(serviceName).then(function(containerIdFound) {
      log(`Kill HUP Container: ${containerIdFound}`);
      return self.dockerode.getContainer(containerIdFound).kill({
        signal: "HUP"
      });
    });
  }
  async ensureSecretOnService(serviceName, secretName) {
    const self = this;
    let secretToExpose;
    return self.dockerode.listSecrets({
      name: secretName
    }).then(function(secrets) {
      for (let i = 0; i < secrets.length; i++) {
        const specs = secrets[i].Spec;
        if (specs && specs.Name === secretName) {
          secretToExpose = secrets[i];
          break;
        }
      }
      if (!secretToExpose) {
        throw new Error(`Cannot find secret: ${secretName}`);
      }
      return self.checkIfServiceHasSecret(serviceName, secretToExpose.ID);
    }).then(function(hasSecret) {
      if (hasSecret) {
        log(
          `${serviceName} (service) has already been connected to secret: ${secretName}`
        );
        return true;
      }
      log(
        `Adding ${secretToExpose.ID} Name:${secretName} to service: ${serviceName}`
      );
      return self.updateService(
        serviceName,
        void 0,
        void 0,
        void 0,
        void 0,
        [
          {
            secretName,
            secretId: secretToExpose.ID
          }
        ],
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ).then(function() {
        return false;
      });
    });
  }
  async checkIfServiceHasSecret(serviceName, secretId) {
    const self = this;
    return self.dockerode.getService(serviceName).inspect().then(function(data) {
      const secrets = data.Spec.TaskTemplate.ContainerSpec.Secrets;
      if (secrets) {
        for (let i = 0; i < secrets.length; i++) {
          if (secrets[i].SecretID === secretId) {
            return true;
          }
        }
      }
      return false;
    });
  }
  async ensureSecret(secretKey, valueIfNotExist) {
    const self = this;
    return this.checkIfSecretExist(secretKey).then(function(secretExists) {
      if (secretExists) {
        return;
      } else {
        return self.dockerode.createSecret({
          Name: secretKey,
          Labels: {},
          Data: Base64.encode(valueIfNotExist)
        }).then(function() {
          return;
        });
      }
    });
  }
  async checkIfSecretExist(secretKey) {
    const self = this;
    return self.dockerode.listSecrets({
      name: secretKey
    }).then(function(secrets) {
      let secretExists = false;
      for (let i = 0; i < secrets.length; i++) {
        const spec = secrets[i].Spec;
        if (spec && spec.Name === secretKey) {
          secretExists = true;
          break;
        }
      }
      return secretExists;
    });
  }
  async ensureServiceConnectedToNetwork(serviceName, networkName) {
    const self = this;
    let networkId;
    return self.dockerode.getNetwork(networkName).inspect().then(function(data) {
      networkId = data.Id;
      return self.dockerode.getService(serviceName).inspect();
    }).then(function(serviceData) {
      let availableNetworks = serviceData.Spec.TaskTemplate.Networks;
      const allNetworks = [];
      availableNetworks = availableNetworks || [];
      for (let i = 0; i < availableNetworks.length; i++) {
        allNetworks.push(availableNetworks[i].Target);
        if (availableNetworks[i].Target === networkId) {
          log(
            `Network ${networkName} is already attached to service: ${serviceName}`
          );
          return;
        }
      }
      allNetworks.push(networkId);
      log(`Attaching network ${networkName} to service: ${serviceName}`);
      return self.updateService(
        serviceName,
        void 0,
        void 0,
        allNetworks,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      );
    });
  }
  async ensureOverlayNetwork(networkName) {
    const self = this;
    return self.dockerode.getNetwork(networkName).inspect().then(function(data) {
      return true;
    }).catch(function(error) {
      if (error && error.statusCode === 404) {
        return self.dockerode.createNetwork({
          Name: networkName,
          CheckDuplicate: true,
          Driver: "overlay",
          Attachable: true
        });
      }
      return new Promise(function(resolve, reject) {
        reject(error);
      });
    });
  }
  async updateService(serviceName, imageName, volumes, networks, arrayOfEnvKeyAndValue, secrets, authObject, instanceCount, nodeId, namespace, ports, updateOrder, serviceUpdateOverride) {
    const self = this;
    return self.dockerode.getService(serviceName).inspect().then(function(readData) {
      const data = JSON.parse(JSON.stringify(readData));
      const updatedData = data.Spec;
      updatedData.version = parseInt(data.Version.Index);
      if (imageName) {
        updatedData.TaskTemplate.ContainerSpec.Image = imageName;
      }
      if (nodeId) {
        updatedData.TaskTemplate.Placement = updatedData.TaskTemplate.Placement || {};
        updatedData.TaskTemplate.Placement.Constraints = updatedData.TaskTemplate.Placement.Constraints || [];
        const newConstraints = [];
        for (let i = 0; i < updatedData.TaskTemplate.Placement.Constraints.length; i++) {
          const c = updatedData.TaskTemplate.Placement.Constraints[i];
          if (c.indexOf("node.id") < 0) {
            newConstraints.push(c);
          }
        }
        newConstraints.push(`node.id == ${nodeId}`);
        updatedData.TaskTemplate.Placement.Constraints = newConstraints;
      }
      if (arrayOfEnvKeyAndValue) {
        updatedData.TaskTemplate.ContainerSpec.Env = [];
        for (let i = 0; i < arrayOfEnvKeyAndValue.length; i++) {
          const keyVal = arrayOfEnvKeyAndValue[i];
          const newSet = `${keyVal.key}=${keyVal.value}`;
          updatedData.TaskTemplate.ContainerSpec.Env.push(newSet);
        }
      }
      if (ports) {
        updatedData.EndpointSpec = updatedData.EndpointSpec || {};
        updatedData.EndpointSpec.Ports = [];
        for (let i = 0; i < ports.length; i++) {
          const p = ports[i];
          if (p.protocol) {
            updatedData.EndpointSpec.Ports.push({
              Protocol: p.protocol,
              TargetPort: p.containerPort,
              PublishedPort: p.hostPort
            });
          } else {
            updatedData.EndpointSpec.Ports.push({
              Protocol: "tcp",
              TargetPort: p.containerPort,
              PublishedPort: p.hostPort
            });
            updatedData.EndpointSpec.Ports.push({
              Protocol: "udp",
              TargetPort: p.containerPort,
              PublishedPort: p.hostPort
            });
          }
        }
      }
      if (volumes) {
        const mts = [];
        for (let idx = 0; idx < volumes.length; idx++) {
          const v = volumes[idx];
          if (v.hostPath) {
            mts.push({
              Source: v.hostPath,
              Target: v.containerPath,
              Type: "bind",
              ReadOnly: false,
              Consistency: "default"
            });
          } else if (v.volumeName) {
            mts.push({
              Source: (namespace ? namespace + "--" : "") + v.volumeName,
              Target: v.containerPath,
              Type: "volume",
              ReadOnly: false
            });
          } else {
            throw new Error("Unknown volume type!!");
          }
        }
        updatedData.TaskTemplate.ContainerSpec.Mounts = mts;
      }
      if (networks) {
        updatedData.TaskTemplate.Networks = [];
        for (let i = 0; i < networks.length; i++) {
          updatedData.TaskTemplate.Networks.push({
            Target: networks[i]
          });
        }
      }
      if (secrets) {
        updatedData.TaskTemplate.ContainerSpec.Secrets = updatedData.TaskTemplate.ContainerSpec.Secrets || [];
        for (let i = 0; i < secrets.length; i++) {
          const obj = secrets[i];
          let foundIndexSecret = -1;
          for (let idx = 0; idx < updatedData.TaskTemplate.ContainerSpec.Secrets.length; idx++) {
            if (updatedData.TaskTemplate.ContainerSpec.Secrets[idx].secretId === obj.secretId) {
              foundIndexSecret = idx;
            }
          }
          const objToAdd = {
            File: {
              Name: obj.secretName,
              UID: "0",
              GID: "0",
              Mode: 292
            },
            SecretID: obj.secretId,
            SecretName: obj.secretName
          };
          if (foundIndexSecret >= 0) {
            updatedData.TaskTemplate.ContainerSpec.Secrets[foundIndexSecret] = objToAdd;
          } else {
            updatedData.TaskTemplate.ContainerSpec.Secrets.push(objToAdd);
          }
        }
      }
      if (updateOrder) {
        updatedData.UpdateConfig = updatedData.UpdateConfig || {};
        switch (updateOrder) {
          case IDockerUpdateOrders.AUTO:
            const existingVols = updatedData.TaskTemplate.ContainerSpec.Mounts || [];
            updatedData.UpdateConfig.Order = existingVols.length > 0 ? "stop-first" : "start-first";
            break;
          case IDockerUpdateOrders.START_FIRST:
            updatedData.UpdateConfig.Order = "start-first";
            break;
          case IDockerUpdateOrders.STOP_FIRST:
            updatedData.UpdateConfig.Order = "stop-first";
            break;
          default:
            const neverHappens = updateOrder;
            throw new Error(
              `Unknown update order! ${updateOrder}${neverHappens}`
            );
        }
      }
      updatedData.TaskTemplate.ContainerSpec.Labels = updatedData.TaskTemplate.ContainerSpec.Labels || {};
      updatedData.TaskTemplate.ContainerSpec.Labels.randomLabelForceUpdate = uuid();
      updatedData.authconfig = authObject;
      if (!updatedData.authconfig) {
        updatedData.authconfig = {
          username: "",
          password: "",
          serveraddress: "docker.io/v1"
        };
      }
      instanceCount = Number(instanceCount);
      if (instanceCount && instanceCount > 0 || instanceCount === 0) {
        if (!updatedData.Mode.Replicated) {
          throw new Error(
            "Non replicated services cannot be associated with instance count"
          );
        }
        updatedData.Mode.Replicated.Replicas = instanceCount;
      }
      return Object.assign(updatedData, serviceUpdateOverride);
    }).then(function(updatedData) {
      return updatedData;
    }).then(function(updatedData) {
      return self.dockerode.getService(serviceName).update(updatedData);
    }).then(function(serviceData) {
      setTimeout(function() {
        self.pruneContainers();
      }, 5e3);
      return serviceData;
    });
  }
  async pruneContainers() {
    log("Pruning containers...");
    const self = this;
    return self.dockerode.pruneContainers().catch(function(error) {
      if (error && error.statusCode === 409) {
        log("Skipping prune due to a minor error: " + error);
        return;
      }
      log("Prune Containers Failed!");
      log(error);
    });
  }
  async isNodeManager(nodeId) {
    const self = this;
    return self.dockerode.getNode(nodeId).inspect().then(function(data) {
      return data.Spec.Role === "manager";
    });
  }
  async getLogForService(serviceName, tailCount, encoding) {
    const self = this;
    return Promise.resolve().then(function() {
      return self.dockerode.getService(serviceName).logs({
        tail: tailCount,
        follow: false,
        timestamps: true,
        stdout: true,
        stderr: true
      });
    }).then(function(data) {
      if (Buffer.isBuffer(data)) {
        return data.toString(encoding);
      }
      throw new Error("Logs are not instance of Buffer! Cannot be parsed!!");
    });
  }
  async getDockerVersion() {
    const self = this;
    return Promise.resolve().then(function() {
      return self.dockerode.version();
    });
  }
  async checkRegistryAuth(authObj) {
    const self = this;
    return Promise.resolve().then(function() {
      return self.dockerode.checkAuth(authObj);
    });
  }
  async getDockerInfo() {
    const self = this;
    return Promise.resolve().then(function() {
      return self.dockerode.info();
    });
  }
  async deleteImages(imageIds) {
    const self = this;
    return Promise.resolve().then(function() {
      let promises = Promise.resolve();
      for (let i = 0; i < imageIds.length; i++) {
        const imageId = imageIds[i];
        const p = async function() {
          return self.dockerode.getImage(imageId).remove().then(function() {
            log(`Image Deleted: ${imageId}`);
          }).catch(function(err) {
            log(err);
          });
        };
        promises = promises.then(p);
      }
      return promises;
    });
  }
  async getImages() {
    const self = this;
    return Promise.resolve().then(function() {
      return self.dockerode.listImages();
    });
  }
  async getNodeLables(nodeId) {
    const self = this;
    return self.dockerode.getNode(nodeId).inspect().then(function(data) {
      return data.Spec.Labels;
    });
  }
  async updateNodeLabels(nodeId, labels, nodeName) {
    const self = this;
    return self.dockerode.getNode(nodeId).inspect().then(function(data) {
      const currentLabels = data.Spec.Labels || {};
      Object.keys(labels).forEach(function(key) {
        currentLabels[key] = labels[key];
      });
      return self.dockerode.getNode(nodeId).update({
        version: parseInt(data.Version.Index),
        Name: nodeName,
        Labels: currentLabels,
        Role: data.Spec.Role,
        Availability: data.Spec.Availability
      });
    }).then(function() {
      return true;
    });
  }
}
var DockerApi_default = DockerApi;
export {
  IDockerUpdateOrders,
  DockerApi_default as default,
  log,
  safeParseChunk
};
