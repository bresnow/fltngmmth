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
