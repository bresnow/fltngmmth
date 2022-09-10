import { $, question, argv, chalk, glob } from "zx";
import { io } from "fsxx";
import "zx/globals";

$.verbose = false;

let message = argv.message ?? argv.m,
  version = argv.version ?? argv.v;

// Version prompt ... (if not provided current version is used)

//PACKAGE>JSON MODIFY VERSION
let pkgJsonGlob = await glob(["**/package.json"], { gitignore: true });
let pkg1 = await io.json`${pkgJsonGlob[0]}`;
if (!version) {
  version = await question(
    `${
      chalk.green("Version? \n Current Version ") +
      chalk.cyan(pkg1.data.version)
    }: `
  );
}
pkgJsonGlob.forEach(async (path) => {
  let pkg = await io.json`${path}`;
  version === "" ? (version = pkg.data.version) : (version = version.trim());
  pkg.data.version = version;
  await pkg.save();
});

//Commit Message (if not provided default message is used)
if (!message) {
  message = await question(chalk.green("Message for commit: "));
  if (message === "" || message.length < 2) {
    message = `Default Commit ${new Date(Date.now())
      .toLocaleString("en-US", { timeZone: "America/New_York" })
      .slice(0, -3)}`;
  } else {
    message += ` ${new Date(Date.now())
      .toLocaleString("en-US", { timeZone: "America/New_York" })
      .slice(0, -3)}`;
  }
}

// Prettier and finalize

try {
  await $`git status`;
  await $`yarn format`;
  await $`git add --all`;
  await $`git commit -s -m ${`${message} | ${version}`}`;
  await $`git push --recurse-submodules=check`;
} catch (error) {
  console.log(chalk.red(error));
}
