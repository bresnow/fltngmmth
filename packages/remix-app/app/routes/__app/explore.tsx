import { Tabs } from '@pkg/ui';
import { Outlet } from '@remix-run/react';
import { LoaderFunction, MetaFunction } from '@remix-run/server-runtime';
import { LoaderContext } from '../../../types/index';
export const meta: MetaFunction = () => ({
    title: 'Explore',
})
export let loader: LoaderFunction = async ({ params, request, context }) => {
    let loadCtx = context as unknown as LoaderContext;
    return {
        header: {
            title: 'browse',
            subtitle: 'Explore the Remix ecosystem',

        }
    }
}
export const handle = {
    header: {
        title: 'Explore',
    },
}

export default function Explore() {
    return (
        <div>
            <Tabs
                list={[
                    {
                        label: 'Latest Tweets',
                        to: '',
                        end: true,
                    },
                    {
                        label: 'Latest Users',
                        to: 'latest_users',
                    },
                ]}
                className="sticky top-16 z-10"
            />
            <Outlet />
        </div>
    )
}
