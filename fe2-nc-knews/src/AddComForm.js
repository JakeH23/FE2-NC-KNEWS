import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class AddComForm extends Component {
	state = {
		body: ''
	};
	render() {
		return (
			<Fragment>
				<div className='AddComForm'>
					<h4>Add a new comment</h4>
					<form>
						<label>Please enter your comment below:</label>
						<input onChange={this.handlebodyChange} id='body' type='text' value={this.state.body} />
						<button id='submit' onClick={this.addToComments}>
							<Link to='/'>Submit Comment </Link>
						</button>
					</form>
				</div>
			</Fragment>
		);
	}
	handlebodyChange = (event) => {
		this.setState({ body: event.target.value }, () => {
			console.log(this.state);
		});
	};

	addToComments = (event) => {
		console.log(this.props);
		event.preventDefault();
		Axios.post(`https://jhnc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`, {
			body: this.state.body,
			user_id: this.props.user.user_id
		}).then((res) => {
			console.log(res);
		});
	};
}

export default AddComForm;
