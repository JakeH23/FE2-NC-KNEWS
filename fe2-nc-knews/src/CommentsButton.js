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
				<div className='ComButton'>
					<ul className>
						{this.state.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<button className='upVoteCom' />
									<span className='comVote' key={'votes' + comment.comment_id}>
										{comment.votes}
									</span>
									<span className='comCreated' key={'created_at' + comment.comment_id}>
										{`Posted at: ${comment.created_at.slice(0, 10)}`}
									</span>
									<span className='comBody' key={'comBody' + comment.comment_id}>
										<Link to={`/comments/${comment.comment_id}`}>{comment.body}</Link>
									</span>
									<button className='downVoteCom' />
								</li>
							);
						})}
					</ul>
					<button onClick={this.showComments}>Show Comments</button>
				</div>
			</Fragment>
		);
	}

	showComments = () => {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`
		).then(({ data: { comments } }) => {
			this.setState({ comments: comments });
		});
	};
}

export default CommentsButton;
