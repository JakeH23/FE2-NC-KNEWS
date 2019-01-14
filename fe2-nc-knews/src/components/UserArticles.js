import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Loading from './Loading';
import moment from 'moment';

class UserArticles extends Component {
	state = {
		articles: [],
		isLoading: true
	};
	render() {
		const { isLoading, articles } = this.state;
		if (isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='UserContent'>
						<ul>
							{articles[0] && <h2 id='artTitleName'>{`${articles[0].author}'s Articles`}</h2>}
							{articles.map((article) => {
								return (
									<li key={article.article_id}>
										<span className='userArtTitle' key={'title' + article.article_id}>
											<Link to={`/articles/${article.article_id}`}>
												{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
											</Link>
										</span>
										<span className='articleCreated' key={'articleCreated' + article.article_id}>
											{`posted: ${moment(article.created_at).startOf('second').fromNow()}`}
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
