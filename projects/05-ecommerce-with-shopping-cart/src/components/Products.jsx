import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import useCart from '../hooks/useCart'

export function Products ({ products }) {
	const { addToCart, removeFromCart, isInCart } = useCart()

	return (
		<main className='products'>
			<ul>
				{products.map((product) => {
					const { id, title, thumbnail, description, price } = product
					return (
						<li key={id}>
							<article>
								<img src={thumbnail} alt={title} />
								<div>
									<h3>{title}</h3>
									<p>{description}</p>
									<span>${price}</span>
								</div>
								{isInCart(product)
									? (
										<button className='remove' onClick={() => removeFromCart(product)}>
											<RemoveFromCartIcon />
										</button>
									)
									: (
										<button className='add' onClick={() => addToCart(product)}>
											<AddToCartIcon />
										</button>

									)}
							</article>
						</li>
					)
				})}
			</ul>

		</main>
	)
}
