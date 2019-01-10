import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import Votes from './Votes';
import Pagenation from './Pagenation';

class Content extends Component {
	state = {
		articles: [],
		voteCount: 0,
		page: 1,
		sort_by: 'votes'
	};
	render() {
		return (
			<Fragment>
				<div className='Content'>
					<ul>
						ARTICLES
						{this.state.articles.map((article) => {
							return (
								<li key={article.article_id}>
									<Votes articleId={article.article_id} votes={article.votes} />
									<span className='artTitle' key={'title' + article.article_id}>
										<Link to={`/articles/${article.article_id}`}>
											{article.title.charAt(0).toUpperCase() + article.title.substr(1)}
										</Link>
									</span>
									<span className='artAut' key={'author' + article.article_id}>
										<Link to={`/users/${article.author}`}>By {article.author}</Link>
									</span>
									<span className='artTop' key={'topic' + article.article_id}>
										<Link to={`/topics/${article.topic}/articles`}>
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
											<Link to={`${article.article_id}/addComment`}>
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
					<Pagenation handlePage={this.handlePage} />
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(`https://jhnc-news.herokuapp.com/api/articles?sort_by=created_at`).then(({ data: { articles } }) => {
			this.setState({ articles: articles });
		});
	}
	handlePage = (increment) => {
		this.setState({ page: this.state.page + increment }, () => {
			if (this.state.page < 1) {
				this.setState({ page: 1 });
			} else {
				this.getPage().catch((err) => {
					this.setState({ page: this.state.page - increment });
				});
			}
		});
	};

	getPage = () => {
		const newPage = `?p=${this.state.page}`;
		return Axios.get(`https://jhnc-news.herokuapp.com/api/articles${newPage}`).then(({ data }) => {
			this.setState({ articles: data.articles });
		});
	};
}

export default Content;
