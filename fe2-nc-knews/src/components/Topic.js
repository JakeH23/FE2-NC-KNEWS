import React, { Component } from 'react';
import Loading from './Loading';
import Articles from './Articles';

class Topic extends Component {
	state = {
		articles: [],
		isLoading: true
	};
	render() {
		const { isLoading } = this.state;
		if (isLoading) return <Loading />;
		else return <Articles username={this.props.user.username} />;
	}
}

export default Topic;
