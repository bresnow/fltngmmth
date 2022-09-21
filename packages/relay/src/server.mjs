import express from "express";
import routes from "./routes.mjs";
import Gun from "gun";
import process from "process";
import Docker, { log } from '../lib/DockerApi.mjs'
import '../../server/gunlibs.js'
import {Config } from "./config.mjs"
import { chalk,$ } from "zx"
import { number } from "yup";
let port = process.env.RELAY_PORT ?? 3000;
const app = express();
app.use(express.json());
app.use(routes);

const server = app.listen(port, () =>
  console.log(`Server Running in Port ${port}`)
);

const gun = Gun({ peers: ["http://front_app:3333/gun"], web: server });
let docker = new Docker({host: Config.PROXY_HOST, port: Config.PROXY_PORT})

let swarmServices = gun.path(["__SwarmContext", "Services" ]);

let services = await docker.getAllServices()

services.forEach(async ({Spec, ...service}) => {
swarmServices.set(Spec)
})