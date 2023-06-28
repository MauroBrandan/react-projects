import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'
import { getRelativeTime } from '../utils/getRelativeTime'
import { StoryLoader } from './StoryLoader'
import { story, storyHeader, storyFooter, storyLink, storyTitle } from './Story.css'

type Props = {
    id: number,
	index: number
}

export function Story ({ id, index }: Props) {
	const { data, isLoading } = useSWR(`/article/${id}`, () => getItemInfo(id))

	if (isLoading) {
		return <StoryLoader />
	}

	const { by, kids, score, title, url, time } = data

	const relativeTime = getRelativeTime(time)

	return (
		<article className={story}>
			<header className={storyHeader}>
				<small>{index + 1}. </small>
				<a href={url} className={storyTitle} target='_blank' rel='noopener noreferrer'>{title}</a>
			</header>

			<footer className={storyFooter}>
				<span>{score} points</span>

				<Link className={storyLink} href={`/article/${id}`}>
					by {by}
				</Link>
				<Link className={storyLink} href={`/article/${id}`}>
					{relativeTime}
				</Link>
				<Link className={storyLink} href={`/article/${id}`}>
					{kids?.length ?? 0} comments
				</Link>
			</footer>
		</article>
	)
}
