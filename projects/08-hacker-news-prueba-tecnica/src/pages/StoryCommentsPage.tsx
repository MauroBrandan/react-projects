import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { ListOfComments } from '../components/ListOfComments'

type Props = {
	params: {
		id: string
	}
}

export default function StoryCommentsPage ({ params }: Props) {
	const { id } = params
	const { data } = useSWR(`/article/${id}`, () => getItemInfo(Number(id)))

	const commentIds = data?.kids?.slice(0, 10) ?? []

	return (
		<section>
			<h2 style={{ padding: '0 32px' }}>{data?.title} - Comments</h2>
			<ListOfComments ids={commentIds} />
		</section>
	)
}
