import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

class AddArtForm extends Component {
	state = {
		title: '',
		body: '',
		topic: '',
		topics: []
	};
	render() {
		const { title, body, articleTitle, topics } = this.state;
		const isEnabled = title.length > 0 && body.length > 0;
		return (
			<Fragment>
				<h2>Add a new article</h2>
				<form onSubmit={this.addToArticles}>
					<label>Article Title:</label>
					<input
						onChange={this.handleChange}
						id='title'
						type='text'
						value={articleTitle}
						required='required'
					/>
					<label>Article Body:</label>
					<input onChange={this.handleChange} id='body' type='text' value={body} required='required' />
					<label htmlFor='topic'>Topic:</label>
					<select id='topic' onChange={this.handleChange} required='required'>
						<option value=''>Choose topic</option>
						{topics.map(({ slug }) => (
							<option key={slug} value={slug}>
								{slug}
							</option>
						))}
					</select>
					<button disabled={!isEnabled} id='submit'>
						Submit Article
					</button>
				</form>
			</Fragment>
		);
	}

	handleChange = ({ target: { value, id } }) => {
		this.setState({
			[id]: value
		});
	};

	addToArticles = (event) => {
		event.preventDefault();
		const { title, body, topic } = this.state;
		const { user_id, username } = this.props.user;
		axios
			.post(`https://jhnc-news.herokuapp.com/api/topics/${topic}/articles`, {
				title: title,
				body: body,
				created_by: user_id,
				topic: topic
			})
			.then((err) => {
				navigate(`/users/${username}/articles`);
			})
			.catch((err) => {
				navigate('/404');
			});
	};

	componentDidMount() {
		axios.get(`https://jhnc-news.herokuapp.com/api/topics`).then(({ data: { topics } }) => {
			this.setState({ topics: topics });
		});
	}
}

export default AddArtForm;
