import Router from './components/Router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search.jsx'
import NotFoundPage from './pages/NotFound.jsx'

const routes = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/about',
		Component: AboutPage
	},
	{
		path: '/search/:query',
		Component: SearchPage
	}
]

function App () {
	return (
		<main>
			<Router routes={routes} defaultComponent={NotFoundPage} />
		</main>
	)
}

export default App
