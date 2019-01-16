import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Votes from './Votes';
import moment from 'moment';
import { navigate } from '@reach/router';
import DeleteCommentButton from './DeleteCommentButton';
import Pagination from './layout/Pagination';

class Comments extends Component {
	state = {
		comments: [],
		isHidden: false,
		page: 1,
		maxPage: 100000
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
										deletedComment={this.props.deletedComment}
									/>
								</li>
							);
						})}
					</ul>
					<Pagination handlePage={this.handlePage} />
				</div>
			</Fragment>
		);
	}

	fetchArticle = () => {
		axios
			.get(`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`)
			.then(({ data: { comments } }) => {
				this.setState({ comments: comments });
			})
			.catch((err) => {
				navigate('/404');
			});
	};

	componentDidUpdate(prevProps) {
		if (
			this.props.article_id !== prevProps.article_id ||
			this.props.commentAdded !== prevProps.commentAdded ||
			this.props.commentDeleted !== prevProps.commentDeleted
		) {
			this.fetchArticle();
		}
	}

	componentDidMount() {
		this.fetchArticle();
	}

	handlePage = (increment) => {
		this.setState({ page: this.state.page + increment }, () => {
			if (this.state.page < 1) {
				this.setState({ page: 1 });
			} else if (this.state.page > this.state.maxPage) {
				this.setState({ page: this.state.maxPage });
			} else {
				this.getPage().catch((err) => {
					this.setState({ page: this.state.page - increment });
				});
			}
		});
	};

	getPage = () => {
		const newPage = `?p=${this.state.page}`;
		return axios
			.get(`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments${newPage}`)
			.then(({ data }) => {
				this.setState({ comments: data.comments });
				if (data.comments.length < 10) {
					this.setState((state) => ({ maxPage: state.page }));
				}
			});
	};
}

export default Comments;
