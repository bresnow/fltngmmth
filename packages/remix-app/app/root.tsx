import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { LoaderContext } from "types";

import styles from "@pkg/ui/styles.css";
import type { LinksFunction } from "@remix-run/server-runtime";
import "chainlocker";
import { json } from "@remix-run/node";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
export let meta: MetaFunction = ({ data }) => ({
  ...data,
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export const loader: LoaderFunction = async ({ request, context }) => {
  let loaderContext = context as unknown as LoaderContext;
  let { authorizedDB, SECRET_KEY_ARRAY } = await loaderContext();
  let { gun } = authorizedDB();
  let masterKeys = await gun.keys(SECRET_KEY_ARRAY);
  gun.vault("REMIX_GUN", masterKeys);
  let locker = gun.locker(["ENCRYPTED_APP_CONTEXT"]);
  let { pages } = await locker.value((data) => console.log(data));
  let rootmetadata = pages.root.meta;
  let url = new URL(request.url);
  rootmetadata = JSON.parse(
    JSON.stringify(rootmetadata)
      .split("<%--protocol-host--%>")
      .join(url.protocol + url.host)
  );
  return json(rootmetadata);
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        {/* <ExternalScripts /> */}
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  let { status, statusText } = useCatch();

  return (
    <main>
      <h1>{status}</h1>
      {statusText && <p>{statusText}</p>}
    </main>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);

  return (
    <main>
      <h1>Oops, looks like something went wrong 😭</h1>
    </main>
  );
}
