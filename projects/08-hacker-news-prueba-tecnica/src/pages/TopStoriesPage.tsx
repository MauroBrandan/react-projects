import useSWR from 'swr'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStoriesPage () {
	const { data, isLoading } = useSWR('stories', () => getTopStories(1, 10))

	return (
		<section>
			{isLoading && <p>Loading...</p>}

			<ul>
				{data?.map((id: number, index: number) => (
					<li key={id}>
						<Story id={id} index={index} />
					</li>
				))}
			</ul>
		</section>
	)
}
