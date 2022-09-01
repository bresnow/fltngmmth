import { useFetcher } from '@remix-run/react'
import { Avatar, Button } from '../'



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
		<textarea
			placeholder="What's happening?"
			rows={1}
			minLength={1}
			maxLength={280}
			className="resize-none overflow-hidden border-b border-transparent py-3 text-2xl focus:border-gray-200 focus:outline-none"
			name={name}
			onChange={(event) => {
	event.currentTarget.style.height = '1px'
	event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`}}
		/>
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
