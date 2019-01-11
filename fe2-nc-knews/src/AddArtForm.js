import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class AddArtForm extends Component {
	state = {
		articleTitle: '',
		body: '',
		topic: ''
	};
	render() {
		return (
			<Fragment>
				<div className='AddArtForm'>
					<h2>Add a new article</h2>
					<form>
						<label>Article Title:</label>
						<input
							onChange={this.handleTitleChange}
							id='title'
							type='text'
							value={this.state.articleTitle}
						/>
						<label>Article Body:</label>
						<input onChange={this.handlebodyChange} id='body' type='text' value={this.state.body} />
						<label>Topic:</label>
						<input onChange={this.handleTopicChange} id='title' type='text' value={this.state.topic} />
						<button id='submit' onClick={this.addToArticles}>
							<Link to='/'>Submit Article </Link>
						</button>
					</form>
				</div>
			</Fragment>
		);
	}
	handleTitleChange = (event) => {
		this.setState({ articleTitle: event.target.value }, () => {
			console.log(this.state);
		});
	};
	handlebodyChange = (event) => {
		this.setState({ body: event.target.value }, () => {
			console.log(this.state);
		});
	};
	handleTopicChange = (event) => {
		this.setState({ topic: event.target.value }, () => {
			console.log(this.state);
		});
	};

	addToArticles = (event) => {
		event.preventDefault();
		axios.post(`https://jhnc-news.herokuapp.com/api/topics/${this.state.topic}/articles`, {
			title: this.state.articleTitle,
			body: this.state.body,
			created_by: this.props.user.user_id
		}).then((res) => {
			console.log(res);
		});
	};
}

export default AddArtForm;
