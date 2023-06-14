import { type User } from '../types'

interface Props{
	users: User[]
	showColors: boolean
}

export function UserTable ({ users, showColors }: Props) {
	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Last name</th>
					<th>Country</th>
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
							<td><button>Delete</button></td>
						</tr>

					)
				})}
			</tbody>
		</table>
	)
}
