import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import Votes from './Votes';
import moment from 'moment';

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
									<Votes commentId={comment.comment_id} votes={comment.votes} />
									<span className='comCreated' key={'created_at' + comment.comment_id}>
										{`posted: ${moment(comment.created_at).startOf('day').fromNow()}`}
									</span>
									<span className='comAuthor' key={'author' + comment.comment_id}>
										{`Posted by: ${comment.author}`}
									</span>
									<span className='comBody' key={'comBody' + comment.comment_id}>
										<Link to={`/comments/${comment.comment_id}`}>{comment.body}</Link>
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

	showComments = () => {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`
		).then(({ data: { comments } }) => {
			this.setState({ comments: comments });
		});
	};
}

export default CommentsButton;
