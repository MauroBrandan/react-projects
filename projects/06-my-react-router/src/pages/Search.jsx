import { Link } from '../components/Link'

export default function SearchPage ({ routeParams }) {
	const { query } = routeParams

	return (
		<>
			<h1>Search</h1>
			<p style={{ fontSize: 32 }}>Buscaste: {query}</p>
			<Link to='/'>Volver al inicio</Link>
		</>
	)
}
