import { Comment } from './Comment'

type Props = {
    ids: number[]
}

export function ListOfComments ({ ids }: Props) {
	return (
		<ul>
			{ids.map((id: number) => (
				<li key={id}>
					<Comment id={id} />
				</li>
			))}
		</ul>
	)
}
