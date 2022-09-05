import { ButtonFollow, Tabs } from "@pkg/ui";
import { Outlet } from "@remix-run/react";
import { LoaderFunction, MetaFunction } from "@remix-run/server-runtime";
import { LoaderContext } from "../../../types/index";
import { MultipleShoppingCard } from "@pkg/ui";
import { Trigger } from "../../../../ui/dialog/dialog";
import NaturalHome from "@pkg/ui/kit/templates/homePages/simplePage/NaturalHome";
import TailKitHome from "@pkg/ui/kit/templates/homePages/simplePage/TailkitHome";
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
            <NaturalHome />
            <Tabs
                list={[
                    {
                        label: "Latest Projects",
                        to: "latest",
                    },
                    {
                        label: "Latest Users",
                        to: "/",
                    },
                    {
                        label: "Latest Projects",
                        to: "latest",
                    },
                    {
                        label: "Latest Users",
                        to: "/",
                    },
                ]}
                className="sticky top-16 z-10"
            />
            <MultipleShoppingCard />
            {/* <Trigger>
                <ButtonFollow />
            </Trigger>
            <ButtonFollow action="/forms/user" />
            <Outlet /> */}
        </div>
    );
}
