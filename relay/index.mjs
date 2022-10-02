import process from "process";
import express from "express";
import io from "socket-io"
import { $, chalk, argv, fs } from "zx";
import { BroadwayProxy } from "./lib/broadway-proxy/index.js";
// import Docker, { log } from "../lib/DockerApi.mjs";

import { Config } from "./gun/config.mjs";
export const error = (...args) => {
  console.error(chalk.redBright(args));
};

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
const server = app.listen(Config.RELAY_PORT, async () => {
  log(`Relay started on port ${Config.RELAY_PORT}.`);
});


let proxySocket = io.listen(server)



proxySocket.on('connection', function (client) {
  console.log('CONNECTION received by proxy from client');

  var broadway = new BroadwayProxy();
  broadway.on('message', function (msg) {
    client.send(msg);
  });

  client.on('message', function (msg) {
    broadway.send(msg);
  });

  broadway.connect();
});










const { default: initGun } = await import("./gun/initGun.mjs");

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
