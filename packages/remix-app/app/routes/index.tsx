import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import type { LoaderContext } from "types";
export const loader: LoaderFunction = async ({ params, request, context }) => {

  let loaderContext = context as unknown as LoaderContext;
  let { authorizedDB } = await loaderContext({ params, request, context });
  let { db } = authorizedDB();
  let keys = await db.keys(['bresnow', 'password'])
  let vault = db.vault('tester', keys)
  vault.get('test_data').put({ loader: 'rootData', putter: 'Data is being pulled from the database like a boss' })

  return db.get('test_data').once(value => console.log('VALUE\n', value)).then()
}
export default function () {
  let { loader, putter } = useLoaderData();
  return (
    <main>
      <h1>Remix App!</h1>
      <p>This is compiled to ESM and running on a node ESM server.</p>
      <h1>{loader}</h1>
      <p>{putter}</p>
    </main>
  );
}
