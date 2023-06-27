import useSWR from 'swr'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStoriesPage () {
	const { data } = useSWR('stories', () => getTopStories(1, 10))

	return (
		<section>
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
