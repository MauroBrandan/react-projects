import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { CommentLoader } from './CommentLoader'
import { ListOfComments } from './ListOfComments'

type Props = {
    id: number
}

export function Comment ({ id }: Props) {
	const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

	if (isLoading) {
		return <CommentLoader />
	}

	const { by, text, kids } = data

	return (
		<details open>
			<summary style={{ color: '#FF6600' }}>
				<small style={{ color: 'rgba(238, 238, 238, 0.75)' }}>
					<span>{by}</span>
					<span> (5 hours ago)</span>
				</small>
			</summary>

			<p>{text}</p>

			{kids?.length > 0 && (
				<ListOfComments ids={kids?.slice(0, 10)} />
			)}
		</details>
	)
}
