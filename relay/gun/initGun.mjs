import Gun from "gun";

let config

const error = console.error.bind(console);

export default async function (extensions = [], opts) {
  try {
    await import("../lib/gunlibs.js");
    for (let i = 0; i < extensions.length; i++) {
      const gunLib = extensions[i];
      if (typeof gunLib === "string") {
        await import(gunLib);
      }
      if (typeof gunLib === "function") {
        await gunLib();
      }
    }
  } catch (err) {
    error(err);
  }
  const gun = new Gun(opts);
  return gun;
}
