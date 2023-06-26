import { style } from '@vanilla-extract/css'

export const header = style({
	display: 'flex',
	gap: '32px',
	alignItems: 'center',
	borderBottom: '1px solid #eee',
	padding: '12px 32px'
})

export const link = style({
	color: '#eee',
	fontSize: '18px',
	margin: 0,
	textDecoration: 'none'
})
