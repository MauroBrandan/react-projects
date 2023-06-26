import { header, link } from './Header.css'

export function Header () {
	return (
		<nav className={header}>
			<img src='/logo.gif' alt='Hacker News Logo' />
			<a href='' className={link}>
				Hacker News - Top Stories
			</a>
		</nav>
	)
}
