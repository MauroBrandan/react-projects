import { Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const StoryCommentsPage = lazy(() => import('./pages/StoryCommentsPage'))

function App () {
	return (
		<>
			<Header />

			<main>
				<Suspense>
					<Route path='/' component={TopStoriesPage} />
					<Route path='/article/:id' component={StoryCommentsPage} />
				</Suspense>
			</main>
		</>
	)
}

export default App
