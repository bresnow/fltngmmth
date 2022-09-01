import React from 'react'
import type { ButtonProps } from '../'
import { Button } from '../'

type ButtonAuthProps = {
	provider: keyof typeof Providers
	redirectTo?: string
} & ButtonProps

export const ButtonProvider = ({
	provider,
	redirectTo,
	...props
}: ButtonAuthProps) => {
	return (
		<Button {...props} icon={"hash_fill"} name="provider" value={provider}>
			Sign in with {Providers[provider].displayName}
		</Button>
	)
}

const Providers = {
	github: {
		displayName: 'GitHub',
	},
keypair:{
	displayName: 'Encryptiom Keypair',
},
	twitter: {
		displayName: 'Twitter',
	},
	twoFactor: {
		displayName: '2FA',
	}

}
