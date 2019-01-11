import React, { Component } from 'react';
import * as api from './api';

class Auth extends Component {
	state = {
		username: 'jessjelly',
		failedAttempt: false
	};
	render() {
		return this.props.user.user_id ? (
			this.props.children
		) : (
			<div className='authContainer'>
				<section className='authMain'>
					<section className='authHeader'>
						<h1>Welcome to NC NEWS</h1>
						<h3>Please enter your username below to log in</h3>
					</section>
					<form onSubmit={this.handleSubmit}>
						<section className='authForm'>
							<label htmlFor='username' className='authFormLabel'>
								Username:
							</label>
							<input
								type='text'
								id='username'
								value={this.state.username}
								onChange={this.handleUsername}
								className='authFormInput'
							/>
						</section>
						<button type='submit' className='loginButton'>
							Login
						</button>
					</form>
					{this.state.failedAttempt && <p>Username incorrect. Please try again.</p>}
				</section>
			</div>
		);
	}

	handleUsername = (event) => {
		const { id, value } = event.target;
		this.setState({ [id]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		api
			.getUser(this.state.username)
			.then((userDetails) => {
				return this.props.login(userDetails);
			})
			.catch((err) =>
				this.setState({
					failedAttempt: true
				})
			);
	};
}

export default Auth;
