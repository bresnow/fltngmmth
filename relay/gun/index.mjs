import process from "process";
import express, { Router } from "express";

import { $, chalk, argv } from "zx";
import Docker, { log } from "../lib/DockerApi.mjs";

import { Config } from "./config.mjs";
export const error = (...args) => {
  console.error(chalk.redBright(args));
};

const app = express();
const routes = new Router();
app.use(routes);

// let docker = new Docker({ host: Config.PROXY_HOST, port: Config.PROXY_PORT });
// try {
//   let services = await docker.getAllServices();
//   services.forEach(async (service) => {
//     if (Config.VIRTUAL_PEER.includes(service.Spec.Name)) {
//       // log(
//       //   chalk.blueBright.bold("\nCURRENT SERVICE \n"),
//       //   JSON.stringify(service, null, 2)
//       // );
//     }
//   });
// } catch (e) {
//   error(e);
// }

const server = app.listen(Config.RELAY_PORT, async () => {
  log(`Relay started on port ${Config.RELAY_PORT}.`);
});

const { default: initGun } = await import("./initGun.mjs");

export const gun = await initGun([], {
  peers: [Config.VIRTUAL_PEER],
  web: server,
});
// Node path to control the browser uri
let browserCtl = gun.path(["GJS_BROWSER", "WEBSOCKET_CMD_TEST"]),
  initialize = browserCtl.get("initialize_from_START_URL_ENV");

initialize.once(async ({ start_url }) => {
  let url = start_url ?? process.env.START_URL;
  if (url.length < 3) error("No START_URL prop or environment variable");
  // Use google/zx child process wrapper to initialize the gjs script when node subscription is activated with the START_URL environment variable
  else
    try {
      // eslint-disable-next-line no-undef
      await $`gjs /app/src/gtk/browser.js ${url}`;
    } catch (error) {}
});
browserCtl.once(async ({ url }) => {
  // Use google/zx child process wrapper to initialize the gjs script when node subscription is activated with the url property
  try {
    // eslint-disable-next-line no-undef
    await $`gjs /app/src/gtk/browser.js ${url}`;
  } catch (error) {}
});

// let swarmServices = gun.path(["__SwarmContext", "Services"]);
