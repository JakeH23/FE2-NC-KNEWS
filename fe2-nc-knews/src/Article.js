import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CommentsButton from './CommentsButton';
import Votes from './Votes';
import { Link } from '@reach/router';
import moment from 'moment';
import Loading from './Loading';

class Article extends Component {
	state = {
		article: {},
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='artBox'>
						<h2>{this.state.article.title}</h2>
						<h4>
							<Link to={`/users/${this.state.article.author}`}>{`Written by ${this.state.article
								.author}`}</Link>
						</h4>
						{this.state.article.created_at && (
							<p> {`posted: ${moment(this.state.article.created_at).startOf('day').fromNow()}`}</p>
						)}
						<p id='bodyArt'>{this.state.article.body}</p>
						<Votes articleId={this.state.article.article_id} votes={this.state.article.votes} />
						<p>{`${this.state.article.comment_count} comments`}</p>
						<CommentsButton article_id={this.props.article_id} />
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}`
		).then(({ data: { articles: [ article ] } }) => {
			this.setState({ article: article, isLoading: false });
		});
	}
}

export default Article;
