import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class Topic extends Component {
	state = {
		slug: '',
		description: ''
	};
	render() {
		return (
			<Fragment>
				<div className='AddTopForm'>
					<h4>Create a new topic</h4>
					<form>
						<label>Topic Name:</label>
						<input onChange={this.handleTopicChange} id='title' type='text' value={this.state.slug} />
						<label>Topic description:</label>
						<input
							onChange={this.handleDescriptionChange}
							id='title'
							type='text'
							value={this.state.description}
						/>
						<button onClick={this.addToTopics}>
							<Link id='submit' to='/'>
								Submit Topic
							</Link>
						</button>
					</form>
				</div>
			</Fragment>
		);
	}
	handleTopicChange = (event) => {
		this.setState({ slug: event.target.value }, () => {
			console.log(this.state);
		});
	};
	handleDescriptionChange = (event) => {
		this.setState({ description: event.target.value }, () => {
			console.log(this.state);
		});
	};

	addToTopics = (event) => {
		event.preventDefault();
		Axios.post('https://jhnc-news.herokuapp.com/api/topics', {
			slug: this.state.slug,
			description: this.state.description
		}).then((res) => {
			console.log(res);
		});
	};
}

export default Topic;
