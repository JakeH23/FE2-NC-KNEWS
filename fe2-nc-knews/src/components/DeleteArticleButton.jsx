import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class DeleteArticleButton extends Component {
	render() {
		return (
			<div>
				<button id='deleteArticleButton' onClick={this.deleteArticle}>
					<Link to={`/users/${this.props.author}/profile`}>
						<i className='fa fa-trash' aria-hidden='true' />
					</Link>
				</button>
			</div>
		);
	}

	deleteArticle = () => {
		return axios.delete(`https://jhnc-news.herokuapp.com/api/articles/${this.props.articleId}`).then(({ data }) => {
			this.setState({ articles: data.articles });
		});
	};
}

export default DeleteArticleButton;
