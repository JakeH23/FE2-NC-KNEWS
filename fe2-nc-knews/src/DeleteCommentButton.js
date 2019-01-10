import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class DeleteCommentButton extends Component {
	render() {
		return (
			<div>
				<button id='deleteCommentButton' onClick={this.deleteComment}>
					<Link to={`/`}>
						<i className='fa fa-trash' aria-hidden='true' />
					</Link>
				</button>
			</div>
		);
	}

	deleteComment = () => {
		console.log(this.props);
		return Axios.delete(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.articleId}/comments/${this.props.commentId}`
		).then(({ data }) => {
			this.setState({ articles: data.articles });
		});
	};
}

export default DeleteCommentButton;
