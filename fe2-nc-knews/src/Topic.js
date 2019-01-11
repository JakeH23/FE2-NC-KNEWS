import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import moment from 'moment';
import Loading from './Loading';

class Topic extends Component {
	state = {
		articles: [],
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='Topic'>
						<ul>
							{`Articles on ${this.props.topic.charAt(0).toUpperCase() + this.props.topic.substr(1)}`}
							{this.state.articles.map((article) => {
								return (
									<li key={article.title}>
										<span className='articleTitle' key={'articleTitle' + article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
											</Link>
										</span>
										<span className='articleCreated' key={'articleCreated' + article.article_id}>
											{`posted: ${moment(article.created_at).startOf('day').fromNow()}`}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</Fragment>
			);
	}

	fetchArticles = () => {
		axios.get(`https://jhnc-news.herokuapp.com/api/topics/${this.props.topic}/articles`)
			.then(({ data: { articles } }) => {
				this.setState({ articles: articles, isLoading: false });
			})
			.catch((err) => {
				navigate('/404/noContent', { replace: true });
			});
	};

	componentDidUpdate(prevProps) {
		if (this.props.topic !== prevProps.topic) {
			this.fetchArticles();
		}
	}

	componentDidMount() {
		this.fetchArticles();
	}
}

export default Topic;
