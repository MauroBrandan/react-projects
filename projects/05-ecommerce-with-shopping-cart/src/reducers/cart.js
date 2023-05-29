export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = state => {
	window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
	[CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
		const { payload } = action
		const productInCartIndex = state.findIndex(item => item.id === payload.id)

		if (productInCartIndex >= 0) {
			const newState = structuredClone(state)
			newState[productInCartIndex].quantity += 1
			updateLocalStorage(newState)
			return newState
		}

		const newState = [
			...state,
			{
				...payload,
				quantity: 1
			}
		]

		updateLocalStorage(newState)
		return newState
	},
	[CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
		const { payload } = action
		const newState = state.filter(item => item.id !== payload.id)
		updateLocalStorage(newState)
		return newState
	},
	[CART_ACTION_TYPES.CLEAR_CART]: () => {
		updateLocalStorage([])
		return []
	}
}

export const cartReducer = (state, action) => {
	const { type } = action
	const updateState = UPDATE_STATE_BY_ACTION[type]

	return updateState ? updateState(state, action) : state
}
