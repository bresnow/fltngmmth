import { UserCard } from './user-card'
import React from 'react'

export type UserListProps = {
	list?: any[]
}

export const UserList = ({ list }: UserListProps) => {
	return (
		<div>
			{/* {list.map((user) => ( */}
				<UserCard  />
			{/* ))} */}
		</div>
	)
}
