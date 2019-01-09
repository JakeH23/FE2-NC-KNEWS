import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';

class Header extends Component {
	render() {
		return (
			<Fragment>
				<div className='Header'>
					<Link to='/'>NC KNEWS </Link>
				</div>
				<div className='Logo'>
					<button className='homeButtonSize'>
						<Link to='/'>
							<img
								alt=''
								className='homeButton'
								src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png'
								height='58'
								width='58'
							/>
						</Link>
					</button>
				</div>
				<div className='ArticleSort'>{`You are logged in as: ${this.props.username}`}</div>
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
