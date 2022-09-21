/// <reference types="dockerode" />
declare module "DockerService" {
    export interface Version {
        Index: number;
    }
    export interface Labels {
        [id: string]: string;
    }
    export interface Mount {
        Type: string;
        Source: string;
        Target: string;
    }
    export interface ContainerSpecType {
        Image: string;
        Env: string[];
        Mounts: Mount[];
        Isolation: string;
    }
    export interface Resources {
        Limits: {
            MemoryBytes: number;
            NanoCPUs: number;
        };
        Reservations: {
            MemoryBytes: number;
            NanoCPUs: number;
        };
    }
    export interface Placement {
        Constraints: string[];
    }
    export interface Options {
        "max-size": string;
    }
    export interface LogDriver {
        Name: string;
        Options: Options;
    }
    export interface TaskTemplate {
        ContainerSpec: ContainerSpecType;
        Resources: Resources;
        Placement: Placement;
        LogDriver: LogDriver;
        ForceUpdate: number;
        Runtime: string;
    }
    export interface Replicated {
        Replicas: number;
    }
    export interface Mode {
        Replicated: Replicated;
    }
    export interface Port {
        Protocol: string;
        TargetPort: number;
        PublishedPort: number;
        PublishMode: string;
    }
    export interface EndpointSpec {
        Mode: string;
        Ports: Port[];
    }
    export interface Spec {
        Name: string;
        Labels: Labels;
        TaskTemplate: TaskTemplate;
        Mode: Mode;
        EndpointSpec: EndpointSpec;
    }
    export interface PreviousSpec {
        Name: string;
        Labels: Labels;
        TaskTemplate: TaskTemplate;
        Mode: Mode;
        EndpointSpec: EndpointSpec;
    }
    export interface VirtualIP {
        NetworkID: string;
        Addr: string;
    }
    export interface Endpoint {
        Spec: Spec;
        Ports: Port[];
        VirtualIPs: VirtualIP[];
    }
    export interface UpdateStatus {
        State: string;
        StartedAt: string;
        Message: string;
    }
    export default interface DockerService {
        ID: string;
        Version: Version;
        CreatedAt: string;
        UpdatedAt: string;
        Spec: Spec;
        PreviousSpec: PreviousSpec;
        Endpoint: Endpoint;
        UpdateStatus: UpdateStatus;
    }
}
declare module "OtherTypes" {
    export abstract class VolumesTypes {
        static readonly BIND = "bind";
        static readonly VOLUME = "volume";
    }
    export type AnyError = any;
    export interface IDockerApiPort {
        Protocol: string;
        TargetPort: number;
        PublishedPort: number;
        PublishMode?: "ingress" | "host";
    }
    export interface IDockerContainerResource {
        Limits?: {
            NanoCPUs?: number;
            MemoryBytes?: number;
        };
        Reservation?: {
            NanoCPUs?: number;
            MemoryBytes?: number;
        };
    }
}
declare module "DockerAuthObj" {
    export interface DockerAuthObj {
        serveraddress: string;
        username: string;
        password: string;
    }
    export interface DockerRegistryConfig {
        [serveraddress: string]: {
            username: string;
            password: string;
        };
    }
}
declare module "DockerSecret" {
    export interface DockerSecret {
        secretName: string;
        secretId: string;
    }
}
declare module "DockerApi" {
    import Docker from "dockerode";
    import type DockerService from "DockerService";
    import type { IDockerContainerResource } from "OtherTypes";
    import type { DockerRegistryConfig, DockerAuthObj } from "DockerAuthObj";
    import type { DockerSecret } from "DockerSecret";
    export let log: any;
    interface ServerDockerInfo {
        nodeId: string;
        type: "manager" | "worker";
        isLeader: boolean;
        hostname: string;
        architecture: string;
        operatingSystem: string;
        nanoCpu: number;
        memoryBytes: number;
        dockerEngineVersion: string;
        ip: string;
        state: string;
        status: string;
    }
    export function safeParseChunk(chunk: string): {
        stream?: string;
        error?: any;
        errorDetail?: any;
    }[];
    export abstract class IDockerUpdateOrders {
        static readonly AUTO = "auto";
        static readonly STOP_FIRST = "stopFirst";
        static readonly START_FIRST = "startFirst";
    }
    export type IDockerUpdateOrder = "auto" | "stopFirst" | "startFirst";
    class DockerApi {
        private dockerode;
        constructor(connectionParams: Docker.DockerOptions);
        initSwarm(ip: string, portNumber?: number): Promise<any>;
        swarmLeave(forced: boolean): Promise<any>;
        getNodeIdByServiceName(serviceName: string, retryCount: number): Promise<string>;
        getLeaderNodeId(): Promise<any>;
        getAllServices(): Promise<DockerService[]>;
        createJoinCommand(managerIp: string, token: string, workerIp: string): string;
        getNodesInfo(): Promise<ServerDockerInfo[]>;
        getJoinToken(isManager: boolean): Promise<any>;
        buildImageFromDockerFile(imageName: string, newVersionNumber: number, tarballFilePath: string, envVars: Record<string, string>[], registryConfig: DockerRegistryConfig): Promise<any>;
        pullImage(imageNameIncludingTag: string, authObj: DockerAuthObj | undefined): Promise<void>;
        /**
         * This method container a lot of hacks to workaround some Docker issues.
         * See https://github.com/githubsaturn/captainduckduck/issues/176
         *
         * @param nameOrId
         * @param networkIdOrName
         * @returns {Promise<void>}
         */
        ensureContainerStoppedAndRemoved(nameOrId: string, networkIdOrName: string): Promise<any>;
        /**
         * Creates a volume thar restarts unless stopped
         * @param containerName
         * @param imageName
         * @param volumes     an array, hostPath & containerPath, mode
         * @param arrayOfEnvKeyAndValue:
         * [
         *    {
         *        key: 'somekey'
         *        value: 'some value'
         *    }
         * ]
         * @param network
         * @param addedCapabilities
         * @returns {Promise.<>}
         */
        createStickyContainer(containerName: string, imageName: string, volumes: {
            hostPath: string;
            containerPath: string;
            mode?: string;
        }[], network: string, arrayOfEnvKeyAndValue: {
            key: string;
            value: string;
        }[], addedCapabilities: string[], addedSecOptions: string[], authObj: DockerAuthObj | undefined): Promise<any>;
        retag(currentName: string, targetName: string): Promise<any>;
        pushImage(imageName: string, authObj: DockerAuthObj): Promise<void>;
        /**
         * Creates a new service
         *
         * @param imageName         REQUIRED
         * @param serviceName       REQUIRED
         * @param portsToMap        an array, containerPort & hostPort
         * @param nodeId            node ID on which we lock down the service
         * @param volumeToMount     an array, hostPath & containerPath
         * @param arrayOfEnvKeyAndValue:
         * [
         *    {
         *        key: 'somekey'
         *        value: 'some value'
         *    }
         * ]
         * @param resourcesObject:
         * [
         *    {
         *        Limits:      {   NanoCPUs	, MemoryBytes}
         *        Reservation: {   NanoCPUs	, MemoryBytes}
         *
         * ]
         */
        createServiceOnNodeId(imageName: string, serviceName: string, portsToMap: {
            protocol: string;
            publishMode?: "ingress" | "host";
            containerPort: number;
            hostPort: number;
        }[] | undefined, nodeId: string | undefined, volumeToMount: {
            hostPath: string;
            containerPath: string;
            mode?: string;
        }[], arrayOfEnvKeyAndValue: {
            key: string;
            value: string;
        }[] | undefined, resourcesObject?: IDockerContainerResource): Promise<Docker.ServiceCreateResponse>;
        removeServiceByName(serviceName: string): Promise<any>;
        deleteVols(vols: string[]): Promise<string[]>;
        isServiceRunningByName(serviceName: string): Promise<boolean>;
        getContainerIdByServiceName(serviceName: string, retryCountMaybe?: number): Promise<string>;
        executeCommand(serviceName: string, cmd: string[]): Promise<string>;
        sendSingleContainerKillHUP(serviceName: string): Promise<any>;
        /**
         * Adds secret to service if it does not already have it.
         * @param serviceName
         * @param secretName
         * @returns {Promise.<>}  FALSE if the secret is JUST added, TRUE if secret existed before
         */
        ensureSecretOnService(serviceName: string, secretName: string): Promise<boolean>;
        checkIfServiceHasSecret(serviceName: string, secretId: string): Promise<boolean>;
        ensureSecret(secretKey: string, valueIfNotExist: string): Promise<void>;
        checkIfSecretExist(secretKey: string): Promise<boolean>;
        ensureServiceConnectedToNetwork(serviceName: string, networkName: string): Promise<any>;
        ensureOverlayNetwork(networkName: string): Promise<any>;
        /**
         * @param serviceName
         * @param imageName
         * @param volumes
         * [
         *    {
         *        containerPath: 'some value' [REQUIRED]
         *        hostPath: 'somekey' [REQUIRED for bind type]
         *        volumeName: 'my-volume-name' [REQUIRED for type:volume]
         *        type: <defaults to bind>, can be volume or tmpfs (not supported yet through captain)
         *    }
         * ]
         * @param networks
         * @param arrayOfEnvKeyAndValue:
         * [
         *    {
         *        key: 'somekey'
         *        value: 'some value'
         *    }
         * ]
         * @param secrets:
         * [
         *    {
         *        secretName: 'somekey'
         *        secretId: 'some value'
         *    }
         * ]
         * @param authObject:
         * [
         *    {
         *        username: 'someuser
         *        password: 'password'
         *        serveraddress: 'registry.captain.com:996'
         *    }
         * ]
         * @param instanceCount: String '12' or null
         * @param nodeId: nodeId of the node this service will be locked to or null
         * @param namespace: String 'captain' or null
         * @returns {Promise.<>}
         */
        updateService(serviceName: string, imageName: string | undefined, volumes: {
            hostPath: string;
            containerPath: string;
            mode?: string;
            volumeName: string;
        }[] | undefined, networks: string[] | undefined, arrayOfEnvKeyAndValue: {
            key: string;
            value: string;
        }[] | undefined, secrets: DockerSecret[] | undefined, authObject: DockerAuthObj | undefined, instanceCount: number | undefined, nodeId: string | undefined, namespace: string | undefined, ports: {
            protocol: string;
            publishMode?: "ingress" | "host";
            containerPort: number;
            hostPort: number;
        }[] | undefined, updateOrder: IDockerUpdateOrder | undefined, serviceUpdateOverride: any | undefined): Promise<any>;
        pruneContainers(): Promise<void | Docker.PruneContainersInfo>;
        isNodeManager(nodeId: string): Promise<boolean>;
        getLogForService(serviceName: string, tailCount: number, encoding: string): Promise<string>;
        getDockerVersion(): Promise<Docker.DockerVersion>;
        checkRegistryAuth(authObj: DockerAuthObj): Promise<any>;
        getDockerInfo(): Promise<any>;
        deleteImages(imageIds: string[]): Promise<void>;
        getImages(): Promise<Docker.ImageInfo[]>;
        getNodeLables(nodeId: string): Promise<any>;
        updateNodeLabels(nodeId: string, labels: Record<string, string>, nodeName: string): Promise<boolean>;
    }
    export default DockerApi;
}
