import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class Content extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<Fragment>
				<div className='Content'>
					<ul>
						Articles
						{this.state.articles.map((article) => {
							return (
								<li key={article.article_id}>
									<button className='upVote' />
									<span className='artVote' key={'votes' + article.article_id}>
										{article.votes}
									</span>
									<span className='artTitle' key={'title' + article.article_id}>
										<Link to={`/articles/${article.article_id}`}>{article.title}</Link>
									</span>
									<span className='artAut' key={'author' + article.article_id}>
										<Link to={`/users/${article.author}`}>{article.author}</Link>
									</span>
									<span className='artCom' key={'comments' + article.article_id}>
										{article.comment_count}
									</span>
									<button className='downVote' />
								</li>
							);
						})}
					</ul>
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(`https://jhnc-news.herokuapp.com/api/articles?sort_by=votes`).then(({ data: { articles } }) => {
			this.setState({ articles: articles });
		});
	}
}

export default Content;
