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

import styles from '@pkg/ui/styles.css';
import type { LinksFunction } from "@remix-run/server-runtime";
import 'chainlocker'
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    }
   
  ];
};
export let meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export let loader: LoaderFunction = async ({ params, request, context }) => {
  let loaderContext = context as unknown as LoaderContext;
  return null
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-dark-800'>
        <div className=' font-sans antialiased bg-gradient-to-tr from-cnxt_red via-white to-transparent text-gray-900 leading-normal tracking-wider bg-cover'>
          <div className='p-5 font-sans antialiased bg-gradient-to-b from-cnxt_black via-blue-400 to-cnxt_blue text-gray-900 leading-normal tracking-wider bg-cover'>
            {' '}
            <div className='py-10 mt-10 font-sans antialiased bg-gradient-to-tr from-slate-900 via-transparent to-cnxt_red text-gray-900 leading-normal tracking-wider bg-cover'>
              <Outlet />
            </div>
          </div>
        </div>
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
