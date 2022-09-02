import { createRequire } from "module";
import { dirname, resolve } from "path";
import compression from "compression";
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import { createRoutes } from "@remix-run/server-runtime/dist/routes.js";
import { matchServerRoutes } from "@remix-run/server-runtime/dist/routeMatching.js";
import { installGlobals } from "@remix-run/node";
import Gun from 'gun'
import './gunlibs.js'
import process from 'process';
import { data } from './loader.config.js'
installGlobals()
let require = createRequire(import.meta.url);
let packagePath = dirname(require.resolve("../remix-app/package.json"));
let importPath = resolve(packagePath, "build/index.js");
let publicPath = resolve(packagePath, "public");

let app = express();
const noCompressContentTypes = [
  /text\/html/,
  /text\/remix-deferred/,
  /text\/event-stream/,
];
// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");
app.use(Gun.serve);
app.use(
  compression({
    filter: (req, res) => {
      let contentTypeHeader = res.getHeader("Content-Type");
      let contentType = "";
      if (typeof contentTypeHeader === "string") {
        contentType = contentTypeHeader;
      } else if (typeof contentTypeHeader === "number") {
        contentType = String(contentTypeHeader);
      } else if (contentTypeHeader) {
        contentType = contentTypeHeader.join("; ");
      }

      if (
        noCompressContentTypes &&
        noCompressContentTypes.some((regex) => regex.test(contentType))
      ) {
        return false;
      }

      return true;
    },
  })
);
app.use(express.static(publicPath, { maxAge: "5m" }));

// eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === "development") {
    app.all("*", async (req, res, next) => {
      try {
        purgeRequireCache(importPath);
        remixEarlyHints(await import(importPath))(req, res);
        await createRequestHandler({
          build: await import(`${importPath}?${Date.now()}`),
          getLoadContext,
          mode: "development",
        })(req, res, next);
      } catch (error) {
        console.error(error);
        next(error);
      }
    });
  } else {
    app.all(
      "*",
      createRequestHandler({
        build: await import("remix-app"),
        getLoadContext,
        mode: "production",
      })
    );
  }

const port = parseInt(process.env.PORT) ?? 3333;
const SECRET_KEY = process.env.SECRET_KEY, SECRET_KEY_ARRAY = SECRET_KEY ? [SECRET_KEY] : []

const radataDir = "radata";
let server = app.listen(port, () => {
  console.log(`Remix.Gun relay server listening on port ${port}`);
});
const gun = Gun({ file: radataDir, web: server });
global.Gun = Gun;
global.gun = gun;
function purgeRequireCache(path) {
  delete require.cache[require.resolve(path)];
}
(async () => {
  await import('chainlocker')
  gun.keys(SECRET_KEY_ARRAY, masterKeys => {
    gun.vault("REMIX_GUN", masterKeys);
    let locker = gun.locker(['ENCRYPTED_APP_CONTEXT'])
    locker.put(data);

  });
})();
function getLoadContext() {
  return async function () {

    return {
      authorizedDB() {
        return { gun };
      },
      SECRET_KEY_ARRAY,
    }
  };

}
function remixEarlyHints(build) {
  function getRel(resource) {
    if (resource.endsWith(".js")) {
      return "modulepreload";
    }
    return "preload";
  }

  const routes = createRoutes(build.routes);

  /**
   *
   * @param {*} req
   * @param {import("express").Response} res
   * @param {*} next
   */
  return (req, res, next) => {
    const matches = matchServerRoutes(routes, req.path);

    let resources =
      matches &&
      matches.flatMap((match) => [
        build.assets.routes[match.route.id].module,
        ...(build.assets.routes[match.route.id].imports || []),
      ]);

    if (resources && resources.length > 0) {
      res.socket.write("HTTP/1.1 103\r\n");
      for (const resource of resources) {
        res.socket.write(
          `Link: <${resource}>; rel=${getRel(resource)}\r\n`
        );
      }
      res.socket.write("\r\n");
    }

    if (next) next();
  };
}