import { $ } from "zx";
import Gun from "gun";



export default async function (extensions = [], opts) {
  try {
    await import("../../server/gunlibs.js");
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
   console.error(err);
  }
  const gun = new Gun(opts);
  return gun;
}
