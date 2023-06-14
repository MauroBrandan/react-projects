import { useState, useEffect, useRef, useMemo } from 'react'
import { type User } from './types'
import { UserTable } from './components/UserTable.tsx'
import './App.css'

function App () {
	const [users, setUsers] = useState<User[]>([])
	const [showColors, setShowColors] = useState(false)
	const [isSorted, setIsSorted] = useState(false)

	const originalUsers = useRef<User[]>([])

	const btnStyle = (condition: boolean) => ({
		backgroundColor: condition ? '#646cff' : ''
	})

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=100')
			.then(res => res.json())
			.then(data => {
				setUsers(data.results)
				originalUsers.current = data.results
			})
			.catch(err => console.log(err))
	}, [])

	const handleShowColors = () => {
		setShowColors(!showColors)
	}

	const sortedUsers = useMemo(() => {
		if (!isSorted) return users

		return users.toSorted((a, b) => {
			return a.location.country.localeCompare(b.location.country)
		})
	}, [users, isSorted])

	const handleOrderByCountry = () => {
		if (isSorted) {
			setIsSorted(false)
			return
		}

		setIsSorted(true)
	}

	const handleDeleteUser = (payload: User['email']) => {
		const newSortedUsers = users.filter(user => user.email !== payload)
		setUsers(newSortedUsers)
	}

	const handleResetUsers = () => {
		setUsers(originalUsers.current)
	}

	return (
		<>
			<h1>React + TypeScript</h1>

			<header style={{ margin: 32, display: 'flex', justifyContent: 'center', gap: 32 }}>
				<button onClick={handleShowColors} style={btnStyle(showColors)}>Color rows</button>
				<button onClick={handleOrderByCountry} style={btnStyle(isSorted)}>Order by country</button>
				<button onClick={handleResetUsers}>Reset users</button>
			</header>

			<main>
				<UserTable users={sortedUsers} showColors={showColors} deleteUser={handleDeleteUser} />
			</main>
		</>
	)
}

export default App
