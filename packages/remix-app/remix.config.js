/** @type {import("@remix-run/dev").AppConfig} */
// import regexp from 'super-expressive'

let config = {
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [/^chainlocker/, /^docker.*/],
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 8002,

  appDirectory: "app",
  /**
   * The path to a directory Remix can use for caching things in development,
   * relative to `remix.config.js`. Defaults to `".cache"`.
   */
  cacheDirectory: ".cache",
  /**
   * A function for defining custom routes, in addition to those already defined
   * using the filesystem convention in `app/routes`. Both sets of routes will
   * be merged.
   */
  // routes: async(defineRoutes) => {},

  /**
   * The path to the server build file, relative to `remix.config.js`. This file
   * should end in a `.js` extension and should be deployed to your server.
   *
   * If omitted, the default build path will be based on your
   * {@link ServerConfig.serverBuildTarget}.
   */
  // serverBuildPath: string,
  /**
   * The path to the browser build, relative to `remix.config.js`. Defaults to
   * "public/build".
   */
  // assetsBuildDirectory: string,

  /**
   * The URL prefix of the browser build with a trailing slash. Defaults to
   * `"/build/"`. This is the path the browser will use to find assets.
   */
  // publicPath: string,

  /**
   * Additional MDX remark / rehype plugins.
   */
  // mdx: RemixMdxConfig | RemixMdxConfigFunction,

  /**
   * A server entrypoint, relative to the root directory that becomes your
   * server's main module. If specified, Remix will compile this file along with
   * your application into a single file to be deployed to your server. This
   * file can use either a `.js` or `.ts` file extension.
   */
  // server: string,

  /**
   * A function for defining custom directories to watch while running `remix dev`, in addition to `appDirectory`.
   */
  watchPaths: [
    "../../packages/ui/**/*.{ts,tsx}",
    "../server/index.js",
    "../../config/app-data/**/*.{js,ts}",
  ],
};

export default config;
