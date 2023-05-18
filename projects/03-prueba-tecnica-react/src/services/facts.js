const GET_RANDOM_FACT_API = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
	const res = await fetch(GET_RANDOM_FACT_API)
	const { fact } = await res.json()
	return fact
}
