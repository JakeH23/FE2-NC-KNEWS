import React, { Component } from 'react';
import Articles from '../Articles';

class Home extends Component {
	render() {
		return <Articles username={this.props.user.username} />;
	}
}

export default Home;
