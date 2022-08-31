import { Form, type FormProps } from '@remix-run/react'
import React from 'react'


export const FormAuth = (props: FormProps) => {
	return <Form action="/auth?index" method="post" {...props} />
}
