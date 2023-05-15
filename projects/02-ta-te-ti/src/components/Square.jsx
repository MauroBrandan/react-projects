export const Square = ({ children, updateBoard, isSelected, index }) => {
	const squareClass = isSelected ? 'square is-selected ' : 'square'

	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div className={squareClass} onClick={handleClick}>
			{children}
		</div>
	)
}
