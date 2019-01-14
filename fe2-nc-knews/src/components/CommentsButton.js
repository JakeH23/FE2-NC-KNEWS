import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Votes from './Votes';
import moment from 'moment';
import { navigate } from '@reach/router';
import DeleteCommentButton from './DeleteCommentButton';
class CommentsButton extends Component {
	state = {
		comments: [],
		isHidden: false
	};
	render() {
		return (
			<Fragment>
				<div className='ComButton'>
					<ul>
						{this.state.comments.map((comment) => {
							return (
								<li key={comment.comment_id}>
									<Votes commentId={comment.comment_id} votes={comment.votes} />
									<span className='comCreated' key={'created_at' + comment.comment_id}>
										{`posted: ${moment(comment.created_at).startOf('second').fromNow()}`}
									</span>
									<span className='comAuthor' key={'author' + comment.comment_id}>
										{`Posted by: ${comment.author}`}
									</span>
									<span className='comBody' key={'comBody' + comment.comment_id}>
										{comment.body}
									</span>
									<DeleteCommentButton
										commentId={comment.comment_id}
										articleId={this.props.article_id}
										author={comment.author}
										username={this.props.username}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</Fragment>
		);
	}

	fetchArticle = () => {
		axios
			.get(`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`)
			.then(({ data: { comments } }) => {
				this.setState({ comments: comments, isHidden: true });
			})
			.catch((err) => {
				navigate('/404');
			});
	};

	componentDidUpdate(prevProps) {
		if (this.props.article_id !== prevProps.article_id) {
			this.fetchArticle();
		}
	}

	componentDidMount() {
		this.fetchArticle();
	}
}

export default CommentsButton;
