import React, { Component, Fragment } from 'react';
import SortBox from './SortBox';
import Axios from 'axios';

class Navigation extends Component {
	state = {
		sort_by: 'votes',
		articles: []
	};
	render() {
		return (
			<Fragment>
				<SortBox handleSort={this.handleSort} />
			</Fragment>
		);
	}
	handleSort = (event) => {
		event.preventDefault();
		this.getSort();
	};

	getSort = () => {
		const newSort = `?sort_by=${this.state.sort_by}`;
		return Axios.get(`https://jhnc-news.herokuapp.com/api/articles${newSort}`).then(({ data }) => {
			this.setState({ articles: data.articles });
		});
	};
}

export default Navigation;
