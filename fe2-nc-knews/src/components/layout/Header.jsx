import React, { Fragment } from 'react';
import { Link } from '@reach/router';

const Header = (props) => (
	<Fragment>
		<div className='Header'>
			<Link to='/'>NC KNEWS </Link>
		</div>
		<div className='Logo'>
			<Link to='/'>
				<img
					alt=''
					className='homeButton'
					src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png'
				/>
			</Link>
		</div>
		<div className='Login'>
			<section>
				<Link to={`/users/${props.user.username}/profile`}>View Profile</Link>
				<button onClick={props.logout} className='logout'>
					Log Out
				</button>
			</section>
			<p>{`You are logged in as: ${props.user.username}`}</p>
		</div>
		<div className='AddArticle'>
			<button>
				<Link to='/addArticle'>Click here to add an article of your own</Link>
			</button>
		</div>
	</Fragment>
);

export default Header;
