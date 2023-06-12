import { useState, useEffect } from 'react'
import { type User } from './types'
import { UserTable } from './components/UserTable.tsx'
import './App.css'

function App () {
	const [users, setUsers] = useState<User[]>([])
	const [showColors, setShowColors] = useState(false)

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=100')
			.then(res => res.json())
			.then(data => setUsers(data.results))
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<h1>React + TypeScript</h1>

			<header>
				<button onClick={() => setShowColors(!showColors)}>Color rows</button>
			</header>

			<main>
				<UserTable users={users} showColors={showColors} />
			</main>
		</>
	)
}

export default App
