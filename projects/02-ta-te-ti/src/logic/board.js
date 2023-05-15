import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
	// check all winning combinations to find a winner
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo

		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a] //winner: X or O
		}
	}
	return null
}

export const checkIsFull = (boardToCheck) => {
	// if there aren't empty cells it's a tie
	return boardToCheck.every((cell) => cell != null)
}
