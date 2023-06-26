import { Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const StoryPage = lazy(() => import('./pages/StoryPage'))

function App () {
	return (
		<>
			<Header />

			<main>
				<Suspense>
					<Route path='/' component={TopStoriesPage} />
					<Route path='/article/:id' component={StoryPage} />
				</Suspense>
			</main>
		</>
	)
}

export default App
