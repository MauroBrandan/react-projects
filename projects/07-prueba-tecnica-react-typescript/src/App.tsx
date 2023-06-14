import { useState, useEffect } from 'react'
import { type User } from './types'
import { UserTable } from './components/UserTable.tsx'
import './App.css'

function App () {
	const [users, setUsers] = useState<User[]>([])
	const [sortedUsers, setSortedUsers] = useState<User[]>([])
	const [showColors, setShowColors] = useState(false)
	const [isSorted, setIsSorted] = useState(false)

	const btnStyle = (condition: boolean) => ({
		backgroundColor: condition ? '#646cff' : ''
	})

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=100')
			.then(res => res.json())
			.then(data => {
				setUsers(data.results)
				setSortedUsers(data.results)
			})
			.catch(err => console.log(err))
	}, [])

	const handleShowColors = () => {
		setShowColors(!showColors)
	}

	const handleOrderByCountry = () => {
		if (isSorted) {
			setSortedUsers(users)
			setIsSorted(false)
			return
		}

		const sortedUsers = users.toSorted((a, b) => {
			return a.location.country.localeCompare(b.location.country)
		})

		setSortedUsers(sortedUsers)
		setIsSorted(true)
	}

	return (
		<>
			<h1>React + TypeScript</h1>

			<header style={{ margin: 32, display: 'flex', justifyContent: 'center', gap: 32 }}>
				<button onClick={handleShowColors} style={btnStyle(showColors)}>Color rows</button>
				<button onClick={handleOrderByCountry} style={btnStyle(isSorted)}>Order by country</button>
			</header>

			<main>
				<UserTable users={sortedUsers} showColors={showColors} />
			</main>
		</>
	)
}

export default App
