import { Outlet } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import type { LoaderContext } from "../../../types/index";
import { MultipleShoppingCard } from "@pkg/ui";
import NaturalHome from "@pkg/ui/kit/templates/homePages/simplePage/NaturalHome";
import TailKitHome from "@pkg/ui/kit/templates/homePages/simplePage/TailkitHome";
import SimpleProjectDashboard from "../../../../ui/kit/templates/dashboardPages/projectDashboard/SimpleProjectDashboard";
export const meta: MetaFunction = () => ({
  title: "Explore",
});
export let loader: LoaderFunction = async ({ params, request, context }) => {
  let loadCtx = context as unknown as LoaderContext;
  return {
    header: {
      title: "browse",
      subtitle: "Explore the Remix ecosystem",
    },
  };
};
export const handle = {
  header: {
    title: "Explore",
  },
};

export default function () {
  return (
    <div>
      <TailKitHome />
      <Outlet />
      {/* <SimpleProjectDashboard/> */}
      {/* //   <NaturalHome />
    //   <MultipleShoppingCard /> */}
      {/* <Trigger>
    //             <ButtonFollow />
    //         </Trigger>
    //         <ButtonFollow action="/forms/user" />
    //         <Outlet /> */}
    </div>
  );
}
