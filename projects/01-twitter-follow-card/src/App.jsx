import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
	{ name: 'Mauro Brandan', userName: 'maurobrandan', initialIsFollowing: false },
	{ name: 'Miguel Ángel', userName: 'midudev', initialIsFollowing: true },
	{ name: 'Freddy Vega', userName: 'freddier', initialIsFollowing: true },
	{ name: 'Evan You', userName: 'evanyou', initialIsFollowing: false },
	{ name: 'Juan David', userName: 'juandc', initialIsFollowing: true },
]

function App() {
	return (
		<section className='App'>
			{users.map((user) => (
				<TwitterFollowCard key={user.userName} {...user} />
			))}
		</section>
	)
}

export default App
