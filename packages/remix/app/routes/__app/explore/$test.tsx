import type { LoaderFunction } from "@remix-run/server-runtime";
import Iframe from "@pkg/ui/iframe";
import axios from "redaxios";
import { useLoaderData } from "@remix-run/react";
import {html} from "../$namespace"





export let loader: LoaderFunction = async () => {
  let { data } = await axios.get("http://front_app:3000");
  return html(data);
};

export default function () {
  let data = useLoaderData();
  return (
    <>
      <Iframe srcdocument={data} className={"w-full h-screen"} />
    </>
  )
}