import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class User extends Component {
	state = {
		user: {}
	};
	render() {
		return (
			<Fragment>
				<p>{`Username: ${this.state.user.username}`}</p>
				<img alt='' src={`${this.state.user.avatar_url}`} />
				<p>{this.state.user.name}</p>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(`https://jhnc-news.herokuapp.com/api/users/${this.props.username}`).then(({ data: { user } }) => {
			console.log(user);
			this.setState({ user: user });
		});
	}
}

export default User;
