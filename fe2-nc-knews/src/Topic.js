import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import moment from 'moment';

class Topic extends Component {
	state = {
		articles: []
	};
	render() {
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

	componentDidMount() {
		Axios.get(
			`https://jhnc-news.herokuapp.com/api/topics/${this.props.topic}/articles`
		).then(({ data: { articles } }) => {
			this.setState({ articles: articles });
		});
	}
}

export default Topic;
