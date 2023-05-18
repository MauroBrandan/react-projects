import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useFacts = () => {
	const [fact, setFact] = useState('')
	const [loading, setloading] = useState(false)

	const refreshFact = () => {
		setloading(true)

		getRandomFact()
			.then((newFact) => setFact(newFact))
			.then(() => setloading(false))
	}

	useEffect(refreshFact, [])

	return { fact, loading, refreshFact }
}
