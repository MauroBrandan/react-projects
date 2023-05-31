import Router from './components/Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import NotFound from './pages/NotFound.jsx'

const routes = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/about',
		Component: AboutPage
	}
]

function App () {
	return (
		<main>
			<Router routes={routes} defaultComponent={NotFound} />
		</main>
	)
}

export default App
