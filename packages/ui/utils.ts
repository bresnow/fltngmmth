import * as React from 'react'
import { useMatches } from '@remix-run/react'


const DEFAULT_REDIRECT = '/'

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
	to: FormDataEntryValue | string | null | undefined,
	defaultRedirect: string = DEFAULT_REDIRECT
) {
	if (!to || typeof to !== 'string') {
		return defaultRedirect
	}

	if (!to.startsWith('/') || to.startsWith('//')) {
		return defaultRedirect
	}

	return to
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 */
export function useMatchesData<T>(routeId: string) {
	const matchingRoutes = useMatches()
	const route = React.useMemo(
		() => matchingRoutes.find((route) => route.id === routeId),
		[matchingRoutes, routeId]
	)
	return route?.data as unknown as T
}

export function isUser<User>(user: any): user is User {
	return user && typeof user === 'object' && typeof user.id === 'string'
}



export function formatUserCreatedDate(created_at: Date) {
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric',
	}).format(created_at)
}

export function removeExtraBreakLines(text: string) {
	return text.replace(/\n\s*\n\s*\n/g, '\n\n')
}

export function parseDomainToValidUrl(domain: string) {
	return !domain.startsWith('http') ? `http://${domain}` : domain
}
