import { redirect } from "@remix-run/server-runtime";

export const loader = async () => {
  return redirect("/explore");
};

// import { useLoaderData } from "@remix-run/react";
// import type { LoaderFunction } from "@remix-run/server-runtime";
// import type { LoaderContext } from "types";
// export const loader: LoaderFunction = async ({ params, request, context }) => {

//   let loaderContext = context as unknown as LoaderContext;
//   let { authorizedDB } = await loaderContext({ params, request });
//   let { db } = authorizedDB();
//   let keys = await db.keys(['bresnow', 'password'])
//   let vault = db.vault('tester', keys)
//   vault.get('test_data').put({ loader: 'rootData', putter: 'Data is being pulled from the database like a boss' })

//   return db.get('test_data').once(value => console.log('VALUE\n', value)).then()
// }
// export default function () {
//   let { loader, putter } = useLoaderData();
//   return (
//     <main>
//       <AccountMenu />
//       <h1>{loader}</h1>
//       <p>{putter}</p>
//     </main>
//   );
// }
