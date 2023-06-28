import { useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/hacker-news'
import { useScrollTo } from '../utils/useScrollTo'
import { Story } from '../components/Story'

export default function TopStoriesPage () {
	const { data, size, setSize } = useSWRInfinite(
		(index) => `stories/${index + 1}`,
		(key) => {
			const [, page] = key.split('/')
			return getTopStories(Number(page), 5)
		}
	)

	const stories = data?.flat()

	const sectionEl = useRef<HTMLElement>(null)
	const sectionHeight = sectionEl.current?.scrollHeight || 0
	useScrollTo(0, sectionHeight, 'smooth')

	return (
		<section ref={sectionEl}>
			<ul>
				{stories?.map((id: number, index: number) => (
					<li key={id}>
						<Story id={id} index={index} />
					</li>
				))}
			</ul>

			<button onClick={() => { setSize(size + 1) }} style={{ marginLeft: 32 }}>
				Load more
			</button>
		</section>
	)
}
