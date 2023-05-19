export default function MoviesList ({ movies }) {
	if (!movies.length > 0) return null

	return (
		<section className='movies'>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>
						<article className='movie'>
							<h3>{movie.title} (<small>{movie.year}</small>)</h3>
							<img src={movie.posterUrl} />
						</article>
					</li>
				))}
			</ul>
		</section>
	)
}
