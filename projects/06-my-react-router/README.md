# Crea un React Router desde cero

- [✔] Crear una forma de hacer MPAs (Multiple Page Application)
- [✔] Crea una forma de hacer SPAs (Single Page Applications)
- [✔] Poder navegar entre páginas con el botón de atrás
- [✔] Crear componente `Link` para hacerlo declarativo
- [✔] Crear componente `Router` para hacerlo más declarativo
- [✔] Soportar ruta por defecto (404)
- [✔] Soportar rutas con parámetros
- [✔] Componente `<Route />` para hacerlo declarativo
- [✔] Lazy Loading de las rutas
- [✔] Testing
- [✔] **Publicar el paquete en NPM**

# Uso

## Instalación

```bash
npm i maurobrandan-router
```

El proyecto debe contar con las dependencias de `react` y `react-dom`

## Router

Proveedor de rutas. Puede recibir un array de rutas a renderizar y un componente por default en caso de que ninguna ruta coincida.
También puede renderizar como hijo el componente `Route` para declarar una ruta.

```js
import { Router } from 'maurobrandan-router'

const routes = [
	{
		path: '/home',
		Component: () => <h1>Home Page</h1>
	}
]

function App() {
	return (
		<main>
			<Router routes={routes} defaultComponent={NotFoundPage}>
				<Route />
			</Router>
		</main>
	)
}

export default App
```

## Route

El componente `Route` sirve para declarar una ruta, recibe el `path` y el componente a renderizar.

```js
import { Router, Route } from 'maurobrandan-router'

function App() {
	return (
		<main>
			<Router defaultComponent={NotFoundPage}>
				<Route path='/about' Component={() => <h1>About Page</h1>} />
			</Router>
		</main>
	)
}

export default App
```

## Link

El componente `Link` sirve para navegar entre paginas manteniendo el comportamiento de una SPA y renderizando un elemento `<a>`, el cual permite el comportamiento por defecto.
Este recibe las propiedades `to` para indicar la ruta a donde hará la navegación, y `target` para especificar dónde abrir el documento.

```js
import { Link } from 'maurobrandan-router'

export default function HomePage() {
	return (
		<>
			<h1>My React Router</h1>
			<p>Pagina de ejemplo para crear un React Router propio desde cero</p>
			<Link to='/about'>Ir a Sobre Mi</Link>
		</>
	)
}
```
