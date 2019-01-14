import React, { Component } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

class DeleteCommentButton extends Component {
	render() {
		return (
			<div>
				{this.props.author === this.props.username && (
					<button id='deleteCommentButton' onClick={this.deleteComment}>
						<i className='fa fa-trash' aria-hidden='true' />
					</button>
				)}
			</div>
		);
	}

	deleteComment = () => {
		return axios
			.delete(
				`https://jhnc-news.herokuapp.com/api/articles/${this.props.articleId}/comments/${this.props.commentId}`
			)
			.then(({ data }) => {
				this.setState({ articles: data.articles });
			})
			.then((err) => {
				navigate(`/articles/${this.props.articleId}`);
			})
			.catch((err) => {
				navigate('/404');
			});
	};
}

export default DeleteCommentButton;
