import { Link } from '../components/Link.jsx'

export default function HomePage () {
	return (
		<>
			<h1>My React Router</h1>
			<p>Pagina de ejemplo para crear un React Router propio desde cero</p>
			<Link to='/about'>Ir a Sobre Mi</Link>
		</>
	)
}
