import { SortBy, type User } from '../types.d'

interface Props{
	users: User[]
	showColors: boolean
	sortBy: SortBy
	deleteUser: (payload: User['email']) => void
	sortClick: (sort: SortBy) => void
}

export function UserTable ({ users, showColors, sortBy, deleteUser, sortClick }: Props) {
	const columnClass = (column: SortBy) => column === sortBy ? 'table-column-click active' : 'table-column-click'

	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Picture</th>
					<th onClick={() => sortClick(SortBy.NAME)} className={columnClass(SortBy.NAME)}>Name</th>
					<th onClick={() => sortClick(SortBy.LAST)} className={columnClass(SortBy.LAST)}>Last name</th>
					<th onClick={() => sortClick(SortBy.COUNTRY)} className={columnClass(SortBy.COUNTRY)}>Country</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => {
					const bgColor = (index % 2) === 0 ? '#3f3e3e' : '#505050'
					const bgStyle = showColors ? bgColor : ''
					return (
						<tr key={user.email} style={{ backgroundColor: bgStyle }}>
							<td>
								<img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last} picture`} />
							</td>
							<td>{user.name.first}</td>
							<td>{user.name.last}</td>
							<td>{user.location.country}</td>
							<td>
								<button onClick={() => deleteUser(user.email)}>Delete</button>
							</td>
						</tr>

					)
				})}
			</tbody>
		</table>
	)
}
