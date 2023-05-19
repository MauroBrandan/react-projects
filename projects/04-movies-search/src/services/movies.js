const API_KEY = 'd23e4e8f'
const API_ENDPOINT = (key, query) => `https://www.omdbapi.com/?apikey=${key}&s=${query}&type=movie`

export const getMovies = (query) => {
	return fetch(API_ENDPOINT(API_KEY, query))
		.then(res => res.json())
		.then(data => {
			if (data.Response === 'False') throw new Error(data.Error)

			const mappedMovies = data.Search.map(({ Title, Year, Poster, imdbID }) => ({
				id: imdbID,
				title: Title,
				year: Year,
				posterUrl: Poster
			}))

			return mappedMovies
		})
}
