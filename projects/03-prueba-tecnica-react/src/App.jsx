import { useState, useEffect } from 'react'
import './App.css'

export default function App () {
	const [fact, setFact] = useState('')
	const [firstWord, setFirstWord] = useState('')
	const [loading, setloading] = useState(false)

	useEffect(() => {
		if (!loading) return

		fetch('https://catfact.ninja/fact')
			.then(res => res.json())
			.then(({ fact }) => {
				const word = fact.split(' ')[0]
				setFact(fact)
				setFirstWord(word)
				setloading(false)
			})
	}, [loading])

	return (
		<main>
			<h1>Cat Facts</h1>
			<section>
				<p>{loading ? 'Loading...' : fact}</p>
				<button onClick={() => setloading(true)}>Random fact</button>
			</section>
			<section>
				{firstWord && !loading && <img src={`https://cataas.com/cat/says/${firstWord}`} alt='cat image' />}
			</section>
		</main>
	)
}
