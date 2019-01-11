import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Loading from './Loading';

class User extends Component {
	state = {
		user: {},
		isLoading: true
	};
	render() {
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='userContainer'>
						<section className='userMain'>
							<img id='userImg' alt='' src={`${this.state.user.avatar_url}`} />
							<p>{`Username: ${this.state.user.username}`}</p>
							<p id='useruseruser'>{this.state.user.name}</p>
							<button id='submitInUser'>
								<Link to={`/users/${this.props.username}/articles`}>
									{`${this.state.user.name}'s Articles`}{' '}
								</Link>
							</button>
						</section>
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		axios.get(`https://jhnc-news.herokuapp.com/api/users/${this.props.username}`).then(({ data: { user } }) => {
			this.setState({ user: user, isLoading: false });
		});
	}
}

export default User;
