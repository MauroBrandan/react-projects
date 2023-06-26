import { style } from '@vanilla-extract/css'

export const story = style({
	color: '#FF6600',
	marginBottom: '16px',
	borderBottom: '1px solid #555'
})

export const storyTitle = style({
	textDecoration: 'none',
	color: '#eee',
	fontSize: '18px'
})

export const storyHeader = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	marginBottom: '2px',
	lineHeight: '24px'
})

export const storyFooter = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	lineHeight: '24px',
	fontSize: '12px',
	color: 'rgba(238, 238, 238, 0.75)'
})

export const storyLink = style({
	color: 'rgba(238, 238, 238, 0.75)',
	textDecoration: 'none',
	':hover': {
		textDecoration: 'underline'
	}
})
