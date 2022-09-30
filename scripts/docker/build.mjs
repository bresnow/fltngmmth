import { $, argv, chalk } from "zx";
import pkg from "../package.json" assert { type: "json" };
let version = argv.version !== undefined ? argv.version : pkg.version;
let target = argv.target ?? argv.T ?? "dev",
  push = argv.push === "true";

let name, context;
if (target === "relay") {
  name = "fltngmmth_relay";
  context = "relay"
}
if (target === "frontend") {
  name = "fltngmmth_front";
  if (argv.server)
    name = "fltngmmth_frontend-server"
  if (argv.dev)
    name = "fltngmmth_frontend-dev"
    context = "frontend"
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
