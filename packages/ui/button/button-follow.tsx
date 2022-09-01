import React from 'react'
import { useFetcher } from '@remix-run/react'

import { Button } from '../'
import type { ButtonProps } from '../'

type ButtonFollowProps = {
	profile?: {is_followed: boolean; is_own:boolean| false; username: string; id: string}
	action?: string
} & ButtonProps

export const ButtonFollow = ({ profile, action,...rest }: ButtonFollowProps) => {

	const fetcher = useFetcher()
	const isFollowed = profile?.is_followed ?? false

	return profile?.is_own ? null : (
		<fetcher.Form action={action ??"/forms/user"} method="post">
			<input type="hidden" name="user" value={profile?.id} />
			<input type="hidden" name="remove" value={`${isFollowed}`} />
			<Button
				// eslint-disable-next-line no-self-compare
				type={('1'==='1')? 'submit' : 'button'}
				name="action"
				value="follow"
				aria-label={`'Follow ${profile?.username || 'Default'}'`}
				variant={isFollowed ? 'ghost' : 'fill'}
				outline={isFollowed}
				{...rest}
			>
				{isFollowed ? 'Following' : 'Follow'}
			</Button>
		</fetcher.Form>
	)
}
