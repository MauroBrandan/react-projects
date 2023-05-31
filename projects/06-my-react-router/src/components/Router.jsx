import { useState, useEffect } from 'react'
import { match } from 'path-to-regexp'
import { EVENTS } from '../utils/consts'

export default function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	// When the path changes
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener(EVENTS.PUSHSTATE, onLocationChange) // New path event
		window.addEventListener(EVENTS.POPSTATE, onLocationChange) // Go back event

		return () => {
			window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
			window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
		}
	}, [])

	let routeParams = {}

	const route = routes.find(route => {
		if (route.path === currentPath) return true

		// path-to-regexp to support routes with dynamic parameters
		const matcherUrl = match(route.path, { decode: decodeURIComponent })
		const matched = matcherUrl(currentPath)

		if (!matched) return false

		routeParams = matched.params
		return true
	})

	const Page = route?.Component

	return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
