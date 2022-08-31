import { $, question, YAML, chalk } from "zx";
import { io } from "fsxx";
import "zx/globals";

$.verbose = false;
let pkg = await io.json`package.json`;
let message, version;
let args = process.argv.slice(3);

if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];

        if (arg.startsWith("--message=" || "-m=" || "--message" || "-m")) {
            message = arg.includes("=") ? arg.split("=")[1] : args[i + 1];
        }

        if (arg.startsWith("--version=" || "-v=" || "--version" || "-v")) {
            version = arg.includes("=") ? arg.split("=")[1] : args[i + 1];
        }
    }
}

// Version prompt ... (if not provided current version is used)
if (version === undefined) {
    version = await question(
        `${chalk.green("Version? \n Current Version ") + chalk.cyan(pkg.data.version)
        }: `
    );
    version === "" ? (version = pkg.data.version) : (version = version.trim());
}
//PACKAGE>JSON MODIFY VERSION
pkg.data.version = version;
await pkg.save();

//Commit Message (if not provided default message is used)
if (message === undefined) {
    message = await question(chalk.green("Message for commit : "));
    if (message === "" || message.length < 2) {
        message = `Default Commit ${new Date(Date.now())
            .toLocaleString("en-US", { timeZone: "America/New_York" })
            .slice(0, -3)}`;
    }
}

// Prettier and finalize

await $`git status`;
try {
    await $`yarn prettier`;
} catch (error) {
    console.log(chalk.red(error));
}
await $`git add --all`;
await $`git commit -s -m ${`${message} | ${version}`}`;
await $`git push`;