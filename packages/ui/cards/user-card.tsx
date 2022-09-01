import { Link } from '@remix-run/react'
import React from 'react'
import { Avatar, ButtonFollow, Text } from '../'

export type UserCardProps = {
	user?: any
}

export const UserCard = ({ user }: UserCardProps) => {
	return (
		<Link
			to={`/user.username`}
			className="flex gap-[14px] p-5 hover:bg-red-500"
			key={user.id}
		>
			<div className="flex-none">
				<Avatar src={"https://avatars0.githubusercontent.com/u/17098?s=460&v=4"} alt={"user.username"} size="lg" />
			</div>

			<div className="flex flex-auto flex-col gap-2">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<Text className="font-bold leading-none hover:underline">
							{"user.name"}
						</Text>
						<Text color="gray">{'@' + "user.username"}</Text>
					</div>
					<ButtonFollow profile={{ is_followed: true, is_own:  false, username: "string", id: "string" }} />
				</div>
				<Text as="p" size="md">
					{"user.bio"}
				</Text>
			</div>
		</Link>
	)
}
