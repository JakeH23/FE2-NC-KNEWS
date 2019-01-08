import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class UserArticles extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<Fragment>
				<div className='UserArticles'>
					<ul>
						{this.state.articles.filter((article) => {
							return (
								<li key={article.article_id}>
									<button className='upVote' />
									<span className='artVote' key={'votes' + article.article_id}>
										{article.votes}
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
		Axios.get(`https://jhnc-news.herokuapp.com/api/articles`).then(({ data: { articles } }) => {
			this.setState({ articles: articles });
		});
	}
}

export default UserArticles;
