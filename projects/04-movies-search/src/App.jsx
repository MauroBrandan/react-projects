import { useState, useRef } from 'react'

import './App.css'
import MoviesList from './components/MoviesList'
import { useMovies } from './hooks/useMovies'

function App () {
	const [inputText, setInputText] = useState('')
	const { movies, searchMovies, debouncedSearchMovies, loading, error } = useMovies()
	const previousInputText = useRef(inputText)

	const handleChange = (e) => {
		const newSearch = e.target.value
		previousInputText.current = newSearch

		setInputText(newSearch)
		debouncedSearchMovies(newSearch)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!inputText) return
		if (inputText === previousInputText.current) return

		previousInputText.current = inputText

		searchMovies(inputText)
	}

	return (
		<main>
			<header>
				<h1>Movies Search</h1>
				<form onSubmit={handleSubmit}>
					<input type='text' id='search' placeholder='The Wolf of Wall Street' onChange={handleChange} value={inputText} />
					<button>Search</button>
				</form>
			</header>

			<div>
				{error && <p className='error'>{`${error}`}</p>}
				{loading && <p>Loading...</p>}
			</div>

			<MoviesList movies={movies} />
		</main>
	)
}

export default App
