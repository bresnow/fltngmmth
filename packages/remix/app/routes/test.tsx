import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import axios from "redaxios";
import { LoaderContext } from "types";

export let loader: LoaderFunction = async ({ context }) => {
  let loaderContext = context as unknown as LoaderContext;
  let { authorizedDB } = await loaderContext();
  let { gun } = authorizedDB();
  let deploy = gun.get("deployment_SOCKET");
  deploy.put({ line: "apk add --no-cache openssl" });

  let swarmServices = gun.path(["__SwarmContext", "Services"]);
  let testdata = await  new Promise(res=>{
    swarmServices.load(data => res(data))
  })
  return json(testdata);
};

export function html(
  content: string,
  init: number | ResponseInit = {}
): Response {
  let responseInit = typeof init === "number" ? { status: init } : init;

  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "text/html; charset=utf-8");
  }

  return new Response(content, {
    ...responseInit,
    headers,
  });
}
