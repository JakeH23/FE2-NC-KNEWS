import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class Votes extends Component {
	state = {
		voteCount: 0
	};
	render() {
		return (
			<Fragment>
				<button
					className='upVote'
					onClick={() => {
						this.handleVote(1, this.props.articleId);
					}}
				/>
				<span className='artVote' key={'votes' + this.props.article_id}>
					{`${this.props.votes + this.state.voteCount} votes`}
				</span>
				<button
					className='downVote'
					onClick={() => {
						this.handleVote(-1, this.props.articleId);
					}}
				/>
			</Fragment>
		);
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

export default Votes;
