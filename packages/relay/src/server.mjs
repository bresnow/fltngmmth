import process from "process";
import fs from "fs"
import path from "path"
import { chalk } from "zx"
import Docker, { log } from "../lib/DockerApi.mjs";
import { read } from "fsxx"
import { app } from "./express.mjs"
import { Config } from "./config.mjs";


export const error = (...args) => { console.error(chalk.redBright(args)) }
const routesDir = path.join(process.cwd(), Config.ROUTE_DIRECTORY);




const routes = fs.readdirSync(routesDir).map( (filePath, c) => {
 
      return filePath

});

if (routes.length === 0) {
  error(`No routes found in: "${routesDir}".`);
  process.exit(1);
}

routes.forEach(async filePath => {
  
  const middleware = await import(path.join(routesDir, filePath));
  log(middleware);
  app.use(`/${filePath}`, middleware);
});

let docker = new Docker({ host: Config.PROXY_HOST, port: Config.PROXY_PORT });
try {
  let services = await docker.getAllServices();
  services.forEach(async (service) => {
    if (Config.VIRTUAL_PEER.includes(service.Spec.Name)) {
      log(chalk.blueBright.bold("\nCURRENT SERVICE \n"), (JSON.stringify(service, null, 2)))
    }
  });
} catch (e) {
  error(e)
}

const server = app.listen(Config.RELAY_PORT, async () => {
  log(`Relay started on port ${Config.RELAY_PORT}.`);
});

const { default: initGun } = await import('./initGun.mjs')

export const gun = await initGun([], { web: server })

// let swarmServices = gun.path(["__SwarmContext", "Services"]);



