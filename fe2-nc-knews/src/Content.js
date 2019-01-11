import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Votes from './Votes';
import Pagination from './Pagination';
import Loading from './Loading';

class Content extends Component {
	state = {
		articles: [],
		voteCount: 0,
		page: 1,
		sort_by: 'votes',
		replace: false,
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='Content'>
						<ul>
							<h3>ARTICLES</h3>
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
											<Link
												to={
													article.author === this.props.user.username ? (
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
						<Pagination handlePage={this.handlePage} />
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		axios.get(`https://jhnc-news.herokuapp.com/api/articles?sort_by=created_at`)
			.then(({ data: { articles } }) => {
				this.setState({ articles: articles, isLoading: false });
			})
			.catch((err) => {
				navigate('/404', { replace: true });
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
		return axios.get(`https://jhnc-news.herokuapp.com/api/articles${newPage}`).then(({ data }) => {
			this.setState({ articles: data.articles });
		});
	};
}

export default Content;
