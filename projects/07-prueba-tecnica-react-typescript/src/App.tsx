import { useState, useEffect, useRef, useMemo } from 'react'
import { SortBy, type User } from './types.d'
import { UserTable } from './components/UserTable.tsx'
import './App.css'

function App () {
	const [users, setUsers] = useState<User[]>([])
	const [showColors, setShowColors] = useState(false)
	const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
	const [inputValue, setInputValue] = useState('')

	const originalUsers = useRef<User[]>([])

	const btnStyle = (condition: boolean) => condition ? 'active' : ''

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=100')
			.then(res => res.json())
			.then(data => {
				setUsers(data.results)
				originalUsers.current = data.results
			})
			.catch(err => console.log(err))
	}, [])

	const filteredUsers = useMemo(() => {
		if (inputValue === '') {
			return users
		}

		return users.filter(user => {
			return user.location.country.toLowerCase().includes(inputValue.toLowerCase())
		})
	}, [users, inputValue])

	const sortedUsers = useMemo(() => {
		if (sorting === SortBy.NONE) return filteredUsers

		const compareProperties: Record<string, (user: User) => string> = {
			[SortBy.COUNTRY]: user => user.location.country,
			[SortBy.NAME]: user => user.name.first,
			[SortBy.LAST]: user => user.name.last
		}

		return filteredUsers.toSorted((a, b) => {
			const extractProperty = compareProperties[sorting]
			return extractProperty(a).localeCompare(extractProperty(b))
		})
	}, [filteredUsers, sorting])

	const handleShowColors = () => {
		setShowColors(!showColors)
	}

	const handleOrderByCountry = () => {
		const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
		setSorting(newSortingValue)
	}

	const handleDeleteUser = (payload: User['email']) => {
		const newSortedUsers = users.filter(user => user.email !== payload)
		setUsers(newSortedUsers)
	}

	const handleResetUsers = () => {
		setUsers(originalUsers.current)
	}

	const handleSortByColumn = (sort: SortBy) => {
		setSorting(sort)
	}

	return (
		<>
			<h1>React + TypeScript</h1>

			<header>
				<button onClick={handleShowColors} className={btnStyle(showColors)}>Color rows</button>
				<button onClick={handleOrderByCountry} className={btnStyle(sorting === SortBy.COUNTRY)}>Order by country</button>
				<button onClick={handleResetUsers}>Reset users</button>
				<div>
					<label htmlFor='searchCountry'>Filter by country</label>
					<input type='search' name='searchCountry' placeholder='Argentina...' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
				</div>
			</header>

			<main>
				<UserTable users={sortedUsers} showColors={showColors} deleteUser={handleDeleteUser} sortClick={handleSortByColumn} sortBy={sorting} />
			</main>
		</>
	)
}

export default App
