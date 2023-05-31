import { Link } from '../components/Link'

export default function NotFoundPage () {
	return (
		<>
			<h1>404</h1>
			<p>Page not found</p>
			<Link to='/'>Volver al inicio</Link>
		</>
	)
}
