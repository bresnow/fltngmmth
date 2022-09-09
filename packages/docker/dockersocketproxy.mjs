import Docker from "dockerode";

let docker = new Docker({ host: "socket-proxy", port: "8000" });

try {
  const services = await docker.listServices();
  console.log("DOCKER SERVICES\n", JSON.stringify(services, null, 2));
} catch (error) {
  console.error(error);
}
