import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class AddComForm extends Component {
	state = {
		articleTitle: '',
		body: '',
		userId: null
	};
	render() {
		return (
			<Fragment>
				<div className='AddArtForm'>
					<h4>Add a new article</h4>
					<form>
						<label>Article Title:</label>
						<input onChange={this.handleTitleChange} type='text' />
						<label>Article Body:</label>
						<input onChange={this.handlebodyChange} id='body' type='text' />
						<label>User ID:</label>
						<input onChange={this.handleUserIdChange} type='number' />
						<button onClick={this.addToArticles}>
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
	handleUserIdChange = (event) => {
		this.setState({ userId: event.target.value }, () => {
			console.log(this.state);
		});
	};

	addToArticles = (event) => {
		event.preventDefault();
		Axios.post('https://jhnc-news.herokuapp.com/api/articles', {
			title: this.state.title,
			body: this.state.body,
			user: this.state.user_id
		}).then((res) => {
			console.log(res);
		});
	};
}

export default AddComForm;
