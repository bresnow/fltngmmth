/** @type {import("@remix-run/dev").AppConfig} */
// import regexp from 'super-expressive'

// let chokidar = regexp().string('chokidar').toRegex()
let config = {
  serverModuleFormat: "esm",
serverDependenciesToBundle: [ /^chainlocker/],
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 8002,
};

export default config;
