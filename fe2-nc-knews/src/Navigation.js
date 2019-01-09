import React, { Component, Fragment } from 'react';

class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<div className='Filter'>
					<input type='text' id='myInput' placeholder='Search for article..' />
				</div>
			</Fragment>
		);
	}
}

export default Navigation;
