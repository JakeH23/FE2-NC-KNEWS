import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import CommentsButton from './CommentsButton';
import { Link } from '@reach/router';

class Article extends Component {
	state = {
		article: {}
	};
	render() {
		return (
			<Fragment>
				<div className='artBox'>
					<h2>{this.state.article.title}</h2>
					<h3>{`Written by ${this.state.article.author}`}</h3>

					<p>{this.state.article.created_at}</p>
					<p>{this.state.article.body}</p>
					<p>{`${this.state.article.votes} votes`}</p>
					<p>{`${this.state.article.comment_count} comments`}</p>
					<CommentsButton article_id={this.props.article_id} />
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}`
		).then(({ data: { articles: [ article ] } }) => {
			console.log(article);
			this.setState({ article: article });
		});
	}
}

export default Article;
