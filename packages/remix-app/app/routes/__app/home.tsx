import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import { ContentForm, TweetList } from '@pkg/ui'



export let loader: LoaderFunction = () => {

    return json({
        data: {
            tweets: [{
                body: "Hello World... lorem ipsum dolor sit amet enim ad minim veniam -- aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: "1",
                created_at: Date.now(),
                tag: "#test",
                is_liked: true,
                num_likes: 2003,
                user: {
                    avatarUrl: 'https://avatars0.githubusercontent.com/u/17098?s=460&v=4',
                    name: 'Bresnow',
                    username: 'bresnow',
                },
                is_retweeted: true,
                num_replies: 0,
                num_retweets: 700
            }, {
                body: "Hello World... lorem ipsum dolor sit amet enim ad minim veniam -- aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: "1",
                created_at: Date.now(),
                tag: "#test",
                is_liked: true,
                num_likes: 2003,
                user: {
                    avatarUrl: 'https://avatars0.githubusercontent.com/u/17098?s=460&v=4',
                    name: 'Bresnow',
                    username: 'bresnow',
                },
                is_retweeted: true,
                num_replies: 0,
                num_retweets: 700
            }, {
                body: "Hello World... lorem ipsum dolor sit amet enim ad minim veniam -- aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: "1",
                created_at: Date.now(),
                tag: "#test",
                is_liked: true,
                num_likes: 2003,
                user: {
                    avatarUrl: 'https://avatars0.githubusercontent.com/u/17098?s=460&v=4',
                    name: 'Bresnow',
                    username: 'bresnow',
                },
                is_retweeted: true,
                num_replies: 0,
                num_retweets: 700
            }]
        },
    })
}

export const handle = {
    header: {
        title: 'Home',
    },
}

export default function Home() {
    const { data } = useLoaderData<typeof loader>()

    return (
        <div className="bg">
                <>
                    <ContentForm />
                    <div className="my-[5px] h-0 border-b border-gray-200" />
                </>
                       {/* <TweetList list={data.tweets} /> */}
        </div>
    )
}
