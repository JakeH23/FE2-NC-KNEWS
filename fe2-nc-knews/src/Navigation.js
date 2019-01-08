import React, { Component, Fragment } from 'react';

class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<div className='Topic'> Topic Search</div>
				<div className='User'> User Search</div>
				<div className='Article'> Artcle Search</div>
			</Fragment>
		);
	}
}

export default Navigation;
