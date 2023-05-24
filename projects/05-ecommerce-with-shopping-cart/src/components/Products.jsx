import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
	return (
		<main className='products'>
			<ul>
				{products.map(({ id, title, thumbnail, description, price }) => (
					<li key={id}>
						<article>
							<img src={thumbnail} alt={title} />
							<div>
								<h3>{title}</h3>
								<p>{description}</p>
								<span>${price}</span>
							</div>
							<button>
								<AddToCartIcon />
							</button>
						</article>
					</li>
				))}
			</ul>

		</main>
	)
}
