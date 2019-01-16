import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

class AddTopicForm extends Component {
	state = {
		slug: '',
		description: ''
	};
	render() {
		const { slug, description } = this.state;
		return (
			<Fragment>
				<div className='AddTopForm'>
					<h2>Create a new topic</h2>
					<form>
						<label>Topic Name:</label>
						<input onChange={this.handleChange} id='slug' type='text' value={slug} required='required' />
						<label>Topic description:</label>
						<input
							onChange={this.handleChange}
							id='description'
							type='text'
							value={description}
							required='required'
						/>
						<button id='submit' onClick={this.addToTopics}>
							<Link to='/'>Submit Topic</Link>
						</button>
					</form>
				</div>
			</Fragment>
		);
	}

	handleChange = ({ target: { value, id } }) => {
		this.setState({
			[id]: value
		});
	};

	addToTopics = (event) => {
		event.preventDefault();
		const { slug, description } = this.state;
		axios
			.post('https://jhnc-news.herokuapp.com/api/topics', {
				slug: slug,
				description: description
			})
			.then(({ data: { topic } }) => {
				this.props.addTopic(topic);
				navigate(`/${slug}/articles`);
			})
			.catch((err) => {
				navigate('/404/noContent');
			});
	};
}

export default AddTopicForm;
