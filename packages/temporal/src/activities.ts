import type { DockerOptions } from "dockerode";

export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function getDocker(opts?: DockerOptions) {
  const { default: Docker } = await import("dockerode");
  const docker = new Docker(opts);
  return docker;
}
