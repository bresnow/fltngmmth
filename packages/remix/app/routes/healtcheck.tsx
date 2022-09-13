import { json, LoaderFunction } from "@remix-run/server-runtime";

export let loader: LoaderFunction = () => {
  return json("OK", 200);
};
