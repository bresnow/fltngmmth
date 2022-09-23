import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import type { LoaderContext } from "types";
import {html} from "../$namespace"
import Iframe from "../../../../../ui/iframe";
export let loader: LoaderFunction = async({params, request, context}) => { 
 let ctx = context as unknown as LoaderContext

  return html("")
}


export default function () {
  let data = useLoaderData();
  return (
    <>
      <Iframe srcdocument={data} className={"w-full h-screen"} />
    </>
  )
}