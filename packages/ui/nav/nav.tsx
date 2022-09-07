import { NavLink } from '@remix-run/react'
import type { NavLinkProps } from '@remix-run/react'
import cn from 'clsx'
import React from 'react'
import {CustomButton as Button} from '../button/button-multi'
import { HashtagLarge, IconCollection, PencilIcon, useUser } from '../'
import {  ContentForm, Icon, Dialog } from '../'

export const NavList = () => {
	const user = useUser()
	return (
		<nav className="flex flex-auto justify-around gap-2 w-3/4">
			{user && (
				<NavButton to="/home" icon="home" iconActive="home_fill">
					Home
				</NavButton>
			 )} 

			<NavButton
				to="/explore"
				icon="hash_to_search"
				iconActive="hash_to_search_fill"
			>
				Explore
			</NavButton>

			 {user && ( 
				<>
					<NavButton
						to={`/${user.username.replace('@', '')}`}
						icon="user"
						iconActive="user_fill"
					>
						Profile
					</NavButton>
					{/* Button New Tweet */}
					<div className="sm:my-5 xl:w-11/12">
						<NewSubmissionButton />
					</div>
				</>
			)} 
		</nav>
	)
}

const NavButton = ({
	children,
	to,
	icon,
	iconActive,
}: {
	to: NavLinkProps['to']
	children: React.ReactNode
	icon: IconCollection
	iconActive?: IconCollection
}) => (
	<NavLink to={to} prefetch="intent">
		{({ isActive }) => (
			<Button
			type={'button'}
				className="ring-6 !block w-16 ring-inset ring-white sm:ring-0 xl:!inline-flex xl:w-auto"
			>
				<span className={cn(!isActive && 'font-normal', 'hidden xl:block')}>
					{children}
				</span>
			</Button>
		)}
	</NavLink>
)

const NewSubmissionButton = () => {
	const dialog = Dialog.useDialog()
	return (
		<>
			<Button
				onClick={dialog.toggle}
		type={'button'}
				className="shadow-md sm:shadow-none xl:w-2/6"
				shape={'rounded'}
			>
				<span className="hidden text-xl xl:block">New Namespace</span>
			</Button>

			<Dialog.Content state={dialog}>
				<Dialog.Header />
				<ContentForm
					onSubmit={() => {
						dialog.setOpen(false)
					}}
				/>
			</Dialog.Content>
		</>
	)
}
