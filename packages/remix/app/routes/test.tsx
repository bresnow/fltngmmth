import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import axios from "redaxios"

export let loader: LoaderFunction = async () => {
  let { data } = await axios.get('http://google.com')
  return html(data);
};



export function html(
  content: string,
  init: number | ResponseInit = {}
): Response {
  let responseInit = typeof init === 'number' ? { status: init } : init;

  let headers = new Headers(responseInit.headers);
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'text/html; charset=utf-8');
  }

  return new Response(content, {
    ...responseInit,
    headers,
  });
}