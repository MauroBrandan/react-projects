import { EVENTS } from '../utils/consts'
import { useState, useEffect } from 'react'

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

	const route = routes.find(route => route.path === currentPath)
	const Page = route?.Component

	return Page ? <Page /> : <DefaultComponent />
}
