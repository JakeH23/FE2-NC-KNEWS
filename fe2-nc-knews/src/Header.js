import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';

class Header extends Component {
	render() {
		return (
			<Fragment>
				<div className='Header'>
					<Link to='/'>NC KNEWS </Link>
				</div>
				<img
					className='Logo'
					src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png'
					alt=''
					height='52'
					width='54'
				/>
				<div className='ArticleSort'>Login </div>
				<div className='AddArticle'>
					<button>
						<Link to='/addArticle'>Click here to add an article of your own!</Link>
					</button>
				</div>
			</Fragment>
		);
	}
}

export default Header;
