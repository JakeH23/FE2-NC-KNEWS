import React, { Component, Fragment } from 'react';
import axios from 'axios';
import DeleteArticleButton from './DeleteArticleButton';
import Loading from './Loading';

class DeleteArticlePage extends Component {
	state = {
		articles: [],
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='DeleteArticle'>
						<h2>YOUR ARTICLES</h2>
						<ul>
							{this.state.articles.map((article) => {
								return (
									<li key={article.article_id}>
										<span className='artDeleteTitle' key={'title' + article.article_id}>
											{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
										</span>
										<DeleteArticleButton articleId={article.article_id} author={article.author} />
									</li>
								);
							})}
						</ul>
					</div>
				</Fragment>
			);
	}
	componentDidMount() {
		axios.get(`https://jhnc-news.herokuapp.com/api/articles`).then(({ data: { articles } }) => {
			const userArticles = articles.filter((article) => article.author === this.props.user.username);
			this.setState({ articles: userArticles, isLoading: false });
		});
	}
}

export default DeleteArticlePage;
