import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from '../components/Router.jsx'
import { Route } from '../components/Route.jsx'
import { Link } from '../components/Link.jsx'
import { getCurrentPath } from '../utils/utils.js'

vi.mock('../utils/utils.js', () => ({
	getCurrentPath: vi.fn()
}))

describe('Router', () => {
	beforeEach(() => {
		cleanup()
		vi.clearAllMocks()
	})

	it('should render without problems', () => {
		render(<Router routes={[]} />)
		expect(true).toBeTruthy()
	})

	it('should render 404 if no routes match', () => {
		render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
		expect(screen.getByText('404')).toBeTruthy()
	})

	it('should render the component of the first route that matches', () => {
		getCurrentPath.mockReturnValue('/about')

		const routes = [
			{
				path: '/',
				Component: () => <h1>Home</h1>
			},
			{
				path: '/about',
				Component: () => <h1>About</h1>
			}
		]

		render(<Router routes={routes} />)
		expect(screen.getByText('About')).toBeTruthy()
	})

	it('should navigate using Links', async () => {
		getCurrentPath.mockReturnValueOnce('/') // Execute once since the path will change

		render(
			<Router>
				<Route path='/' Component={() => (
					<>
						<h1>Home</h1>
						<Link to='/about'>
							Go to about
						</Link>
					</>
				)}
				/>
				<Route path='/about' Component={() => <h1>About</h1>} />
			</Router>
		)
		
		// Click on the link
		const button = screen.getByText('Go to about')
		fireEvent.click(button)

		// Check that the new route has rendered
		const aboutTitle = await screen.findByText('About') // instead of getByText use findBy to await
		expect(aboutTitle).toBeTruthy()
	})
})
