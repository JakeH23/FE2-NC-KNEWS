import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

class AddComForm extends Component {
	state = {
		body: ''
	};
	render() {
		const { body } = this.state;
		const isEnabled = body.length > 0;
		return (
			<Fragment>
				<div className='AddComForm'>
					<h4>Add a new comment</h4>
					<form>
						<label>Please enter your comment below:</label>
						<input onChange={this.handleChange} id='body' type='text' value={body} required='required' />
						<button disabled={!isEnabled} id='submit' onClick={this.addToComments}>
							Submit Comment
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

	addToComments = (event) => {
		event.preventDefault();
		const { body } = this.state;
		const { user_id, article_id } = this.props;
		axios
			.post(`https://jhnc-news.herokuapp.com/api/articles/${article_id}/comments`, {
				body: body,
				user_id: user_id
			})
			.then((err) => {
				navigate(`/articles/${article_id}`);
			})
			.catch((err) => {
				navigate('/404');
			});
	};
}

export default AddComForm;
