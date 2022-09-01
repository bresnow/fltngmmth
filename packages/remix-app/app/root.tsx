import type { PropsWithChildren } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { LoaderContext } from "types";
import reset from '@unocss/reset/antfu.css';
import unocss from '~/uno.css';
import type { LinksFunction } from "@remix-run/server-runtime";
import 'chainlocker'
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: unocss,
    },
    {
      rel: 'stylesheet',
      href: reset,
    },
  ];
};
export let meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export let loader: LoaderFunction = async({params, request, context}) => { 
 let loaderContext= context as unknown as LoaderContext;
  return null
}
function Document({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  let { status, statusText } = useCatch();

  return (
    <Document>
      <main>
        <h1>{status}</h1>
        {statusText && <p>{statusText}</p>}
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);

  return (
    <Document>
      <main>
        <h1>Oops, looks like something went wrong 😭</h1>
      </main>
    </Document>
  );
}
