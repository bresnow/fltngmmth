import { $, argv } from "zx";
import pkg from "../package.json" ;
let version = argv.version !== undefined ? argv.version : pkg.version;
let target = argv.target ?? argv.T ?? "dev",
  push = argv.push === "true";

let name;
if (target === "relay") {
  name = "remix-gun_relay";
}
if (target === "frontend") {
  name = "remix-gun_frontend";
}
if (target === "dev") {
  name = "remix-gun_dev";
}
await $`docker build -t bresnow/${name}:${version} --target=${target} .`;

push
  ? await $`docker push bresnow/${name}:${version}`
  : console.log("NOT PUSHING TO CONTAINER REGISTRY");
