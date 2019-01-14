import React, { Fragment, Component } from 'react';
import { navigate, Link } from '@reach/router';
import Votes from './Votes';

import Loading from './Loading';
import * as api from '../api';

class Articles extends Component {
	state = {
		articles: [],
		voteCount: 0,
		page: 1,
		isLoading: true
	};
	render() {
		const { isLoading, articles } = this.state;
		if (isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='Content'>
						<ul>
							<h3>ARTICLES</h3>
							{articles.map((article) => {
								return (
									<li key={article.article_id}>
										<Votes articleId={article.article_id} votes={article.votes} />
										<span className='artTitle' key={'title' + article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
											</Link>
										</span>
										<span className='artAut' key={'author' + article.article_id}>
											<Link
												to={
													article.author === this.props.username ? (
														`/users/${article.author}/profile`
													) : (
														`/users/${article.author}`
													)
												}
											>
												By {article.author}
											</Link>
										</span>
										<span className='artTop' key={'topic' + article.article_id}>
											<Link to={`/${article.topic}/articles`}>
												Topic: {article.topic.charAt(0).toUpperCase() + article.topic.substr(1)}
											</Link>
										</span>
										<span className='artCom' key={'comments' + article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												Comments {article.comment_count}
											</Link>
										</span>
										<div className='commentLogo'>
											<button className='commentButtonSize'>
												<Link to={`articles/${article.article_id}`}>
													<img
														alt=''
														className='commentButton'
														src='https://static.thenounproject.com/png/24079-200.png'
														height='15px'
														width='15px'
													/>
												</Link>
											</button>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		this.getArticles();
	}

	componentDidUpdate(prevProps) {
		if (this.props.topic !== prevProps.topic) this.getArticles();
	}

	getArticles = () => {
		const { topic } = this.props;
		api
			.getArticles(topic)
			.then((articles) => {
				this.setState({ articles: [ ...articles ], isLoading: false });
			})
			.catch(() => {
				navigate('/404/noContent');
			});
	};
}

export default Articles;
