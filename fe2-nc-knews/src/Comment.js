import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class Article extends Component {
	state = {
		article: {},
		comment: {}
	};
	render() {
		console.log(this.state);
		return (
			<Fragment>
				<div className='artBox'>
					<h2>{this.state.article.title}</h2>
					<h3>{`Written by ${this.state.comment.author}`}</h3>
					<p>{this.state.article.created_at.slice(0, 10)}</p>
					<p>{this.state.article.body}</p>
					<p>{`${this.state.article.votes} votes`}</p>
					<p>{`${this.state.article.comment_count} comments`}</p>
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments/${this.props.comment_id}`
		).then(({ data: { articles: [ article ] }, comment }) => {
			console.log(article);
			this.setState({ article: article, comment: comment });
		});
	}
}

export default Article;
