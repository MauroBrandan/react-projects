import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { getMovies } from '../services/movies'

export function useMovies () {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const searchMovies = useCallback((search) => {
		if (!search) return

		setLoading(true)
		setError('')

		getMovies(search)
			.then(movies => setMovies(movies))
			.catch(err => setError(err))
			.finally(() => setLoading(false))
	})

	const debouncedSearchMovies = useCallback(
		debounce(search => {
			searchMovies(search)
		}, 500),
		[searchMovies]
	)

	return { movies, searchMovies, debouncedSearchMovies, loading, error }
}
