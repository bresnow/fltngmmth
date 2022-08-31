import { useFetcher } from '@remix-run/react'
import * as RVF from 'remix-validated-form'
import { z } from 'zod'
import { withZod } from '@remix-validated-form/with-zod'

import { removeExtraBreakLines, useUser } from '../utils'
import { Avatar, Button } from '../'
import React from 'react'

const TweetFormSchema = z.object({
	body: z.string().trim().min(1).max(280).transform(removeExtraBreakLines),
})

export const TweetFormValidator = withZod(TweetFormSchema)

export type TweetFormProps = {
	onSubmit?: ({ id }: { id: string }) => void
}

export const ContentForm = ({ onSubmit }: TweetFormProps) => {
	const user = useUser()
	const fetcher = useFetcher()

	return (
		<div className="flex gap-3.5 px-5 pt-2.5 pb-2.5">
			<Avatar src={user.avatarUrl} alt={user.username} size="lg" />
			<RVF.ValidatedForm
				validator={TweetFormValidator}
				fetcher={fetcher}
				onSubmit={() => onSubmit && onSubmit(fetcher.data)}
				resetAfterSubmit
				action="/forms/tweet"
				method="post"
				className="flex flex-auto flex-col gap-3.5"
			>
				<TextArea name="body" />
				<div className="flex justify-between">
					<div>{/* TODO: add media buttons */}</div>
					<SubmitButton />
				</div>
			</RVF.ValidatedForm>
		</div>
	)
}

const TextArea = ({ name }: { name: string }) => {
	const { getInputProps } = RVF.useField(name)
	return (
		<textarea
			placeholder="What's happening?"
			rows={1}
			minLength={1}
			maxLength={280}
			className="resize-none overflow-hidden border-b border-transparent py-3 text-2xl focus:border-gray-200 focus:outline-none"
			{...getInputProps({
				id: name,
				onChange: (event) => {
					event.currentTarget.style.height = '1px'
					event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
				},
			})}
		/>
	)
}

const SubmitButton = () => {
	const isSubmitting = RVF.useIsSubmitting()
	const { isValid } = RVF.useFormContext()
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
