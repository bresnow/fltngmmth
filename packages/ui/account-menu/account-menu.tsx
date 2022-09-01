import { Form, useLocation } from '@remix-run/react'
import * as AriaKit from 'ariakit'
import {ContentEditable} from '../editable'
// import { useUser } from '../utils'
import { Icon, Avatar, Text , ProfilePic} from '../'

export const AccountMenu = () => {
	const location = useLocation()
	const popover = AriaKit.usePopoverState()

	return (
		<>
			<AriaKit.PopoverDisclosure
				state={popover}
				className="relative flex w-full cursor-pointer select-none items-center rounded-full p-3.5 transition-colors hover:bg-gray-100 active:bg-gray-200"
			>
				<Avatar
					size="xs"
					className="pointer-events-none sm:h-12 sm:w-12 rounded-full"
					src={"/images/icon-96x96.png"}
					alt={"Bresnow"}
				/>
				<div className=" flex-auto items-center justify-between xl:flex">
					<div className="text-start mx-3.5 flex flex-col text-lg">
						
						<Text weight={7} className="leading-tight">
							{'Bresnow'}
						</Text>
						<Text color="gray" className="leading-tight">
							{`@bresnow`}
						</Text>
					</div>
					<Icon name="dots" size="md" />
				</div>
			</AriaKit.PopoverDisclosure>
			<AriaKit.Popover state={popover}>
				<ProfilePic size="small" withBorder withInfo={true} img={"https://avatars0.githubusercontent.com/u/17098?s=460&v=4"} />
				<div className="w-72 drop-shadow-lg group-hover:block">
					<AriaKit.PopoverArrow className="first:!fill-white" />
					<div className="flex rounded-xl border-t border-gray-100 bg-white py-3">
						<Form action="/auth/logout" method="post" className="w-full">
							<button
								name="redirectTo"
								value={'/'}
								className="w-full p-4 text-left text-lg leading-6 hover:bg-gray-100"
							>
								Log out @bresnow
							</button>
						</Form>
					</div>
				</div>
			</AriaKit.Popover>
			{/* <ContentEditable name={'truelies'} id={'2222'} edit={true}>
				<Text className="font-black text-2xl">
					{'truelies'}
				</Text>
			</ContentEditable> */}
		</>
	)
}
