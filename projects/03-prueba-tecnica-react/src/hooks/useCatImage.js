import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
	const [imageUrl, setImageUrl] = useState('')

	useEffect(() => {
		if (!fact) return

		const word = fact.split(' ')[0]
		fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
			.then(res => res.json())
			.then(({ url }) => setImageUrl(`${CAT_PREFIX_IMAGE_URL}${url}`))
	}, [fact])

	return { imageUrl }
}
