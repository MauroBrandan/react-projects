import { useState } from 'react'

export default function TwitterFollowCard({ name, userName, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

	const btnText = isFollowing ? 'Siguiendo' : 'Seguir'
	const btnClass = isFollowing
		? 'tw-followCard-button is-following '
		: 'tw-followCard-button '

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}

	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={`https:unavatar.io/${userName}`}
					alt='profile image'
				/>
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span className='tw-followCard-infoUserName'>@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={btnClass} onClick={handleClick}>
					<span className='tw-followCard-text'>{btnText}</span>
					<span className='tw-followCard-stopFollow'>Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}
