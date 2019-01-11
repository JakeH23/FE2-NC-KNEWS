import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Loading from './Loading';

class UserArticles extends Component {
	state = {
		articles: [],
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='UserContent'>
						<ul>
							{this.state.articles[0] && (
								<h2 id='artTitleName'>{`${this.state.articles[0].author}'s Articles`}</h2>
							)}
							{this.state.articles.map((article) => {
								return (
									<li key={article.article_id}>
										<span className='artTitle' key={'title' + article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
											</Link>
										</span>
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
			const userArticles = articles.filter((article) => article.author === this.props.username);
			this.setState({ articles: userArticles, isLoading: false });
		});
	}
}

export default UserArticles;
