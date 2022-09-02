import { log } from "./utils/log";
import DockerApi from "./DockerApi";
import SshClientImport from "ssh2";
const SshClient = SshClientImport.Client;

export default class DockerUtils {
  static async joinDockerNode(
    dockerApi: DockerApi,
    sshUser: string,
    sshPort: number,
    ipAddress: string,
    isManager: boolean,
    remoteNodeIpAddress: string,
    privateKey: string
  ) {
    const remoteUserName = sshUser; // Docker requires root access. It has to be root or any non root user that can run Docker without sudo

    await Promise.resolve();
      const token = await dockerApi.getJoinToken(isManager);
      return await new Promise<void>(function (resolve, reject) {
          const conn = new SshClient();
          conn
              .on("error", function (err) {
                  log(err);
                  reject("SSH Connection error!!");
              })
              .on("ready", function () {
                  log("SSH Client :: ready");
                  conn.exec(
                      dockerApi.createJoinCommand(
                          ipAddress,
                          token,
                          remoteNodeIpAddress
                      ),
                      function (err_1, stream) {
                          if (err_1) {
                              log(err_1);
                              reject("SSH Running command failed!!");
                              return;
                          }

                          let hasExisted = false;

                          stream
                              .on("close", function (code: string, signal: string) {
                                  log(
                                      `Stream :: close :: code: ${code}, signal: ${signal}`
                                  );
                                  conn.end();
                                  if (hasExisted) {
                                      return;
                                  }
                                  hasExisted = true;
                                  resolve();
                              })
                              .on("data", function (data: string) {
                                  log(`STDOUT: ${data}`);
                              })
                              .stderr.on("data", function (data_1) {
                                  log(`STDERR: ${data_1}`);
                                  if (hasExisted) {
                                      return;
                                  }
                                  hasExisted = true;
                                  reject(`Error during setup: ${data_1}`);
                              });
                      }
                  );
              })
              .connect({
                  host: remoteNodeIpAddress,
                  port: sshPort,
                  username: remoteUserName,
                  privateKey: privateKey,
              });
      });
  }
}
