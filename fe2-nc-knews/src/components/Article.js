import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CommentsButton from './CommentsButton';
import Votes from './Votes';
import { Link, navigate } from '@reach/router';
import moment from 'moment';
import Loading from './Loading';
import AddComForm from './forms/AddComForm';

class Article extends Component {
	state = {
		article: {},
		isLoading: true,
		page: 1
	};
	render() {
		const { isLoading } = this.state;
		const { title, author, body, created_at, article_id, votes, comment_count } = this.state.article;
		if (isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='artBox'>
						<h2>{title}</h2>
						<h4>
							<Link to={`/users/${author}`}>{`Written by ${this.state.article.author}`}</Link>
						</h4>
						{created_at && <p> {`posted: ${moment(created_at).startOf('second').fromNow()}`}</p>}
						<p id='bodyArt'>{body}</p>
						<Votes articleId={article_id} votes={votes} />
						<p>{`${comment_count} comments`}</p>
						<CommentsButton article_id={this.props.article_id} username={this.props.user.username} />
						<AddComForm article_id={this.props.article_id} user_id={this.props.user.user_id} />
					</div>
				</Fragment>
			);
	}

	fetchArticle = () => {
		axios
			.get(`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}`)
			.then(({ data: { articles: [ article ] } }) => {
				this.setState({ article: article, isLoading: false });
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

export default Article;
