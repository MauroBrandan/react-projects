/* eslint-disable react/jsx-indent-props */
import { useId } from 'react'
import useCart from '../hooks/useCart.js'
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart () {
	const { cart, addToCart, removeFromCart, clearCart } = useCart()
	const cartCheckboxid = useId()

	return (
		<>
			<label className='cart-button' htmlFor={cartCheckboxid}>
				<CartIcon />
			</label>
			<input type='checkbox' id={cartCheckboxid} hidden />

			<aside className='cart'>
				<ul>
					{cart.map(item => (
						<CartItem
							key={item.id}
							item={item}
							addToCart={() => addToCart(item)}
							removeFromCart={() => removeFromCart(item)}
						/>
					))}
				</ul>

				<button onClick={clearCart}><ClearCartIcon /></button>
			</aside>
		</>
	)
}

function CartItem ({ item, addToCart, removeFromCart }) {
	return (
		<li key={item.id}>
			<img src={item.thumbnail} alt={item.title} />
			<div>
				<strong>{item.title}</strong> - ${item.price}
			</div>
			<footer>
				<small>Qty: {item.quantity}</small>
				<button onClick={addToCart}>+</button>
				<button onClick={removeFromCart}>
					<RemoveFromCartIcon />
				</button>
			</footer>
		</li>
	)
}
