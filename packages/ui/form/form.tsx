import React from 'react'
import { useFetcher } from '@remix-run/react'
import { Avatar, Button ,Text} from '../'
import { ContentEditable } from '../editable'



export type TweetFormProps = {
	onSubmit?: ({ id }: { id: string }) => void
}

export const ContentForm = ({ onSubmit }: TweetFormProps) => {

	const fetcher = useFetcher()

	return (
		<div className="flex gap-3.5 px-5 pt-2.5 pb-2.5">
			<Avatar src={'https://avatars0.githubusercontent.com/u/17098?s=460&v=4'} alt={"Bresnow"} size="lg" />
			<fetcher.Form
				onSubmit={() => onSubmit && onSubmit}
				action="/"
				method="post"
				className="flex flex-auto flex-col gap-3.5"
			>
				<TextArea name="body" />
				<div className="flex justify-between">
					<div>{/* TODO: add media buttons */}</div>
					<SubmitButton />
				</div>
			</fetcher.Form>
		</div>
	)
}

const TextArea = ({ name }: { name: string }) => {

	return (
		<ContentEditable onChange={(event) => {
	event.currentTarget.style.height = '1px'
	event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`}} className=" border-b border-transparent py-3 text-2xl focus:outline-none" name={name} id={'2222'} edit={true}>
			<Text weight={7} className="font-black text-2xl">
				Add description
			</Text>
</ContentEditable>
	)
}

const SubmitButton = ({isSubmitting = false, isValid = true}) => {

	const disabled = isSubmitting || !isValid
	return (
		<Button
			name="action"
			value="create"
			type="submit"
			color="primary"
			aria-label="Create tweet"
			disabled={disabled}
		>
			Tweet
		</Button>
	)
}
