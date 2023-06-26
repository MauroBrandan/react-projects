import { Link } from 'wouter'
import { header, link } from './Header.css'

export function Header () {
	return (
		<nav className={header}>
			<img src='/logo.gif' alt='Hacker News Logo' />
			<Link href='/' className={link}>
				Hacker News - Top Stories
			</Link>
		</nav>
	)
}
