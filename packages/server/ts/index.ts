import { createRequire } from "module";
import { dirname, resolve } from "path";
import compression from "compression";
import express from "express";
import { createRequestHandler, GetLoadContextFunction } from "@remix-run/express";
import { createRoutes } from "@remix-run/server-runtime/dist/routes.js";
import { matchServerRoutes } from "@remix-run/server-runtime/dist/routeMatching.js";
import { installGlobals } from "@remix-run/node";
import Gun from 'gun'
import '../gunlibs.js'
import process from 'process';
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
// void(async () => {
 let mode = process.env.NODE_ENV; 

    app.all("*", async (req, res, next) => {
      try {
        purgeRequireCache(importPath);
        remixEarlyHints(await import(importPath))(req, res, next);
        await createRequestHandler({
          build: await import(`${importPath}?${Date.now()}`),
          getLoadContext: getLoadContext as unknown as GetLoadContextFunction,
          mode,
        })(req, res, next);
      } catch (error) {
        console.error(error);
        next(error);
      }
    });
  // } else {
//     app.all(
//       "*",
//       createRequestHandler({
//         build: await import("../remix-app/build"),
//         getLoadContext: getLoadContext as unknown as GetLoadContextFunction, 
//         mode: "production",
//       })
//     );
//   }
// })();
const port = process.env.PORT ??3333;

const radataDir = "radata";
let server = app.listen(port, () => {
  console.log(`Remix.Gun relay server listening on port ${port}`);
});
const gun = Gun({ file: radataDir, web: server });

function purgeRequireCache(path:string) {
  process.env.NODE_ENV === "development"?
  delete require.cache[require.resolve(path)]: null;
}
const SECRET_KEY = process.env.SECRET_KEY??"secret";
function getLoadContext() {
  return async function ({request, params, secret = [SECRET_KEY]}) {
    let masterKeys = await gun.keys(secret);
    console.log("masterKeys", masterKeys);
    return {
      authorizedDB(opts) {
        let keypair =  masterKeys;
        let {protocol, host} =request ??{protocol: 'http', host: `localhost:${port}`};
       let db = gun.vault(`${protocol}://${host}`, keypair)
        return {db, gun};
      }
    };
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
  if (process.env.NODE_ENV === "development" ){
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

    if (next) next();}
  } else {
    return () => {

    }
  };
}