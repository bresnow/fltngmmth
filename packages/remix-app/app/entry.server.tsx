import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import type { EntryContext, Headers } from "@remix-run/node";
import { Response } from "@remix-run/node";
import isbot from "isbot";
import { RemixServer } from "@remix-run/react";

const ABORT_DELAY = 5000;
let helmet = [
  [ "Content-Type","text/html" ],
  [ "Transfer-Encoding", "chunked" ],
  [ "Connection", "keep-alive" ],
  [ "Content-Security-Policy", "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests" ],
  [ "Cross-Origin-Embedder-Policy", "require-corp" ],
  [ "Cross-Origin-Opener-Policy", "same-origin" ],
  [ "Cross-Origin-Resource-Policy", "same-origin" ],
  [ "Origin-Agent-Cluster", "?1" ],
  [ "Referrer-Policy", "same-origin" ],
  [ "Strict-Transport-Security", "max-age=15552000; includeSubDomains" ],
  [ "X-Content-Type-Options", "nosniff" ],
  [ "X-DNS-Prefetch-Control", "off" ],
  [ "X-Download-Options", "noopen" ],
  [ "X-Frame-Options", "SAMEORIGIN" ],
  [ "X-Permitted-Cross-Domain-Policies", "none" ],
  [ "X-XSS-Protection", "0" ]];


export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  return new Promise((resolve, reject) => {
    let didError = false;

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        [callbackName]() {
          let body = new PassThrough();

 
          helmet.forEach(header => {
            // console.log(header[0], header[1])
            responseHeaders.set(header[0], header[1]);
          })


          resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders,
            })
          );
          pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
