import { $, argv } from "zx";
import pkg from "../package.json" assert { type: "json" };
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
try {
  await $`docker build -t bresnow/${name}:${version} --target=${target} .`;

  if (push) {
    await $`docker push bresnow/${name}:${version}`;
    if (target === "dev") {
      await $`yarn deploy:dev`;
    }
  }
} catch (error) {
  console.log(
    `${chalk.red("ExitCode: " + error.exitCode)}\n ${chalk.bold(error.stderr)}`
  );
}
