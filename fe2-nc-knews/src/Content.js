import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class Content extends Component {
	state = {
		articles: [],
		voteCount: 0
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
									<button
										className='upVote'
										onClick={() => {
											this.handleVote(1, article.article_id);
										}}
									/>
									<span className='artVote' key={'votes' + article.article_id}>
										{article.votes + this.state.voteCount}
									</span>
									<span className='artTitle' key={'title' + article.article_id}>
										<Link to={`/articles/${article.article_id}`}>{article.title}</Link>
									</span>
									<span className='artAut' key={'author' + article.article_id}>
										<Link to={`/users/${article.author}`}>By {article.author}</Link>
									</span>
									<span className='artTop' key={'topic' + article.article_id}>
										<Link to={`/topics/${article.topic}/articles`}>Topic: {article.topic}</Link>
									</span>
									<span className='artCom' key={'comments' + article.article_id}>
										{article.comment_count}
									</span>
									<button
										className='downVote'
										onClick={() => {
											this.handleVote(-1, article.article_id);
										}}
									/>
									<div className='commentLogo'>
										<button className='commentButtonSize'>
											<Link to={`${article.article_id}/addComment`}>
												<img
													alt=''
													className='commentButton'
													src='https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png'
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
		Axios.get(`https://jhnc-news.herokuapp.com/api/articles?sort_by=votes`).then(({ data: { articles } }) => {
			this.setState({ articles: articles });
		});
	}

	handleVote = (increment, articleId) => {
		const { commentId } = this.props;
		const voteObj = { inc_votes: increment };
		if ((this.state.voteCount === 1 && increment === 1) || (this.state.voteCount === -1 && increment === -1)) {
		} else {
			this.setState({ voteCount: this.state.voteCount + increment });
			Axios.patch(
				commentId
					? `https://jhnc-news.herokuapp.com/api/articles/${articleId}/comments/${commentId}`
					: `https://jhnc-news.herokuapp.com/api/articles/${articleId}`,
				voteObj
			).catch((err) => {
				this.setState((state) => {
					return { voteCount: state.voteCount - increment };
				});
			});
		}
	};
}

export default Content;
