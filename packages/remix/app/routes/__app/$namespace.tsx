import type { LoaderFunction } from "@remix-run/server-runtime";
import Iframe from "@pkg/ui/iframe";
import axios from "redaxios";
import { useLoaderData } from "@remix-run/react";



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



export let loader: LoaderFunction = async () => {
  let { data } = await axios.get("http://front_app:3000");
  return html(data);
};

export default function () {
  let data = useLoaderData();

  return (
    <>
      <Iframe src={'https://relay.fltngmmth.com'} className={"w-full h-full"} />
      {/* <Iframe srcdocument={data} className={"w-full h-1/2"} /> */}
    </>
  );
}
// export function CatchBoundary() {
//   let caught = useCatch();

//  switch (caught.status) {
// case 401:
//  case 403:
//     case 404:
//       return (
// <></>
// );
// }
// throw new Error(`Unexpected caught response with status: ${caught.status}`);
// }
