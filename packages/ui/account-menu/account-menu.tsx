import { useMatches, useLocation } from '@remix-run/react'
import * as AriaKit from 'ariakit'
import { ContentEditable } from '../editable'
import { Icon, Avatar, Text, ProfilePic } from '../'
export function useUser<UserData>() {
	const matches = useMatches()
	const match = matches
		.reverse()
		.find((match) => match.data?.user || match.handle?.user)
	return match?.data?.user || match?.handle?.user as UserData
}

export const AccountMenu = () => {
	const location = useLocation()
	let user = useUser<{name:string; username:string; avatar: string}>()
	const popover = AriaKit.usePopoverState()
	const messagePopover = AriaKit.usePopoverState()
	return (
		<>

			<AriaKit.PopoverDisclosure
				state={popover}
				className="relative flex w-full cursor-pointer select-none items-center rounded-full p-5 transition-colors hover:bg-gray-100 active:bg-gray-200"
			>

				<Avatar
					size="xs"
					className="pointer-events-none sm:h-12 sm:w-12 rounded-full"
					src={user?.avatar??"/icons/icon-96x96.png"}
					alt={user?.name??"Bresnow"}
				/>
				<div className=" flex-auto items-center justify-between xl:flex">
					<div className="text-start mx-3.5 flex flex-col text-lg">
						<ContentEditable name={'account_name'} id={'account_name'} edit={true}>						
						<Text weight={7} className="leading-tight">
								{user?.name ?? "Bresnow"}
						</Text></ContentEditable>
						<Text color="gray" className="leading-tight">
							{user?.username??`@bresnow`}
						</Text>
					</div>
					<Icon name="dots" size="md" />
				</div>
			</AriaKit.PopoverDisclosure>
			<AriaKit.Popover state={popover}>



				<AriaKit.PopoverDisclosure
					state={messagePopover}>

					<section id={'message-notifications'}>
						<div className="mb-4">
							<div className="shadow-lg rounded-2xl w-64 p-4 bg-white flex justify-between items-center">
								<div className="w-2/6">
									<Avatar
										size="xs"
										className="pointer-events-none sm:h-12 sm:w-12 rounded-full"
										src={user.avatar??"/icons/icon-96x96.png"}
										alt={"Bresnow"}
									/>
								</div>
								<div className="w-3/6">
									<p className="text-gray-500 text-sm">
										You have
										<span className="text-indigo-500 font-bold">2</span>
										new messages
									</p>
								</div>
								<div className="w-1/6 text-right">
									<svg
										width="20"
										height="20"
										fill="currentColor"
										viewBox="0 0 1792 1792"
										className="text-indigo-500 h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
									</svg>
								</div>
							</div>
						</div>
						<AriaKit.Popover state={messagePopover}>
							<div className="mb-4">
								<div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
									<img
										alt="moto"
										src="/images/gradient.webp"
										className="absolute -right-16 -bottom-16 h-40 w-40 mb-4"
									/>
									<div className="w-4/6">
										<p className="text-gray-800 text-lg font-medium mb-2">Avg</p>
										<p className="text-gray-400 text-xs">
											Detail is not an obsession, it is the very essence of
											perfection.
										</p>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden">
									<img
										alt="moto"
										src="/images/gradient.webp"
										className="absolute -right-16 -bottom-16 h-40 w-40 mb-4"
									/>
									<div className="w-4/6">
										<p className="text-gray-800 text-lg font-medium mb-2">Avg</p>
										<p className="text-gray-400 text-xs">
											Detail is not an obsession, it is the very essence of
											perfection.
										</p>
									</div>
								</div>
							</div>
						</AriaKit.Popover>
					</section>

				</AriaKit.PopoverDisclosure>

			</AriaKit.Popover>
			{/* <ContentEditable name={'truelies'} id={'2222'} edit={true}>
				<Text className="font-black text-2xl">
					{'truelies'}
				</Text>
			</ContentEditable> */}
		</>
	)
}


const Follower = ({ user }: { user: { name: string } }) => {
	return (
		<div className="w-full">
			<div className="text-center mb-6">
				<p className="text-gray-800 dark:text-white text-xl font-medium">
					{user.name}
				</p>
				<p className="text-gray-400 text-xs">FullStack dev</p>
			</div>
			<div className="rounded-lg bg-pink-100 dark:bg-white p-2 w-full mb-4">
				<div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
					<p className="flex flex-col">
						Art.
						<span className="text-black dark:text-indigo-500 font-bold">
							34
						</span>
					</p>
					<p className="flex flex-col">
						Foll.
						<span className="text-black dark:text-indigo-500 font-bold">
							455
						</span>
					</p>
					<p className="flex flex-col">
						Rat.
						<span className="text-black dark:text-indigo-500 font-bold">
							9.3
						</span>
					</p>
				</div>
			</div>
			<button
				type="button"
				className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
			>
				Add
			</button>
		</div>)
}