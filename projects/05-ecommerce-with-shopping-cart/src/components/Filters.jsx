import { useId } from 'react'
import './Filters.css'
import { categories } from '../mocks/products.json'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
	const { filters, setFilters } = useFilters()
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (e) => {
		const newMinPrice = e.target.value

		setFilters((prevFilters) => (
			{
				...prevFilters,
				minPrice: newMinPrice
			}
		))
	}

	const handleChangeCategory = (e) => {
		const newCategory = e.target.value

		setFilters((prevFilters) => (
			{
				...prevFilters,
				category: newCategory
			}
		))
	}

	return (
		<section className='filters'>
			<form>
				<div>
					<label htmlFor={minPriceFilterId}>Min price</label>
					<input type='range' id={minPriceFilterId} min={0} max={1500} value={filters.minPrice} onChange={handleChangeMinPrice} />
					<span>${filters.minPrice}</span>
				</div>
				<div>
					<label htmlFor={categoryFilterId}>Category</label>
					<select id={categoryFilterId} onChange={handleChangeCategory}>
						{categories.map(({ value, text }, index) => (
							<option key={index} value={value}>{text}</option>
						))}
					</select>
				</div>
			</form>
		</section>
	)
}
