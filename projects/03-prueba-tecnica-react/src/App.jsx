import './App.css'
import { useFacts } from './hooks/useFacts'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
	const { fact, loading, refreshFact } = useFacts()
	const { imageUrl } = useCatImage({ fact })

	return (
		<main>
			<h1>Cat Facts</h1>
			<section>
				<p>{loading ? 'Loading...' : fact}</p>
				<button onClick={refreshFact}>Random fact</button>
			</section>
			<section>
				{imageUrl && !loading && <img src={imageUrl} alt='Cat image with words of a random fact of cats' />}
			</section>
		</main>
	)
}
