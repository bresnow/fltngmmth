/** @type {import("@remix-run/dev").AppConfig} */
import regexp from 'super-expressive'

let chokidar = regexp().string('chokidar').toRegex()
let config = {
  serverModuleFormat: "esm",
serverDependenciesToBundle: [ chokidar,],
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 8002,
};

export default config;
