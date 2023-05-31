import { lazy, Suspense } from 'react'
import { Router } from './components/Router'
import { Route } from './components/Route'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const SearchPage = lazy(() => import('./pages/Search'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

const routes = [
	{
		path: '/search/:query',
		Component: SearchPage
	}
]

function App () {
	return (
		<main>
			<Suspense>
				<Router routes={routes} defaultComponent={NotFoundPage}>
					<Route path='/' Component={HomePage} />
					<Route path='/about' Component={AboutPage} />
				</Router>
			</Suspense>
		</main>
	)
}

export default App
