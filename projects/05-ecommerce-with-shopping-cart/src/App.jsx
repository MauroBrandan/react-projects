import { products as initialProducts } from './mocks/products.json'
import { CartProvider } from './contexts/cart'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart.jsx'
import { Products } from './components/Products'

function App () {
	const { filterProducts } = useFilters()
	const filteredProducts = filterProducts(initialProducts)

	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={filteredProducts} />
		</CartProvider>
	)
}

export default App
