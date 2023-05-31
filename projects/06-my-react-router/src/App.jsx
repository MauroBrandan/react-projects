import { Router } from './components/Router'
import { Route } from './components/Route'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search.jsx'
import NotFoundPage from './pages/NotFound.jsx'

const routes = [
	{
		path: '/search/:query',
		Component: SearchPage
	}
]

function App () {
	return (
		<main>
			<Router routes={routes} defaultComponent={NotFoundPage}>
				<Route path='/' Component={HomePage} />
				<Route path='/about' Component={AboutPage} />
			</Router>
		</main>
	)
}

export default App
