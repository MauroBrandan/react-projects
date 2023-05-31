import { EVENTS } from '../utils/consts'

export function navigate (href) {
	window.history.pushState({}, '', href)
	// custom event
	const navigationEvent = new Event(EVENTS.PUSHSTATE)
	window.dispatchEvent(navigationEvent)
}

export function Link ({ to, target, ...props }) {
	const handleClick = (event) => {
		const isMainEvent = event.button === 0 // primary click
		const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
		const isManageableEvent = target === undefined || target === '_self'

		//  SPA navigation
		if (isMainEvent && isManageableEvent && !isModifiedEvent) {
			event.preventDefault()
			navigate(to)
		}
	}

	return <a href={to} target={target} onClick={handleClick} {...props} />
}
