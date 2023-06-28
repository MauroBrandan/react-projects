import { useEffect } from 'react'

type ScrollBehavior = 'smooth' | 'instant' | 'auto'

export const useScrollTo = (x: number, y: number, behavior?: ScrollBehavior) => {
	useEffect(() => {
		window.scrollTo({
			top: y,
			left: x,
			behavior
		})
	})
}
