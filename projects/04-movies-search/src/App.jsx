import { useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'
import { getMovies } from './services/movies'

function App () {
	const [inputText, setInputText] = useState('')
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const handleChange = (e) => {
		setInputText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!inputText) return

		setLoading(true)
		setError('')

		getMovies(inputText)
			.then(movies => setMovies(movies))
			.catch(err => setError(err))
			.finally(() => setLoading(false))
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
