import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class CommentsButton extends Component {
	state = {
		comments: []
	};
	render() {
		return (
			<Fragment>
				<div className='Content'>
					<ul>
						{this.state.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<span className='comBody' key={'comBody' + comment.comment_id}>
										{comment.body}
									</span>
								</li>
							);
						})}
					</ul>
					<button onClick={this.showComments}>Show Comments</button>
				</div>
			</Fragment>
		);
	}

	showComments = (event) => {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`
		).then(({ data: { comments } }) => {
			this.setState({ comments: comments });
		});
	};
}

export default CommentsButton;
