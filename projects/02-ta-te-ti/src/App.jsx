import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinnerFrom, checkIsFull } from './logic/board'
import './App.css'

function App() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null) // null: there isn't winner | false: there's a tie

	const updateBoard = (index) => {
		// if it's already been written, do nothing
		if (board[index] || winner) return

		// update board
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		// check if there's a winner
		const newWinner = checkWinnerFrom(newBoard)
		if (newWinner) {
			setWinner(newWinner)
			confetti()
			return
		}

		// check if there's a tie
		const isFull = checkIsFull(newBoard)
		if (isFull) {
			setWinner(false)
			return
		}

		// change turn
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
	}

	return (
		<main className='board'>
			<h1>Ta Te Ti</h1>

			<section className='game'>
				{board.map((cell, index) => (
					<Square key={index} updateBoard={updateBoard} index={index}>
						{cell}
					</Square>
				))}
			</section>

			<section className='turn'>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<button onClick={resetGame}>Volver a empezar</button>

			<WinnerModal winner={winner} resetGame={resetGame} />
		</main>
	)
}

export default App
