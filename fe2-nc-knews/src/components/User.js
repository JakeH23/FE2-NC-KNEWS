import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Loading from './Loading';

class User extends Component {
	state = {
		user: {},
		isLoading: true
	};
	render() {
		const { avatar_url, username, name } = this.state.user;
		if (this.state.isLoading) return <Loading />;
		else
			return (
				<Fragment>
					<div className='userContainer'>
						<section className='userMain'>
							<img id='userImg' alt='' src={`${avatar_url}`} />
							<p>{`Username: ${username}`}</p>
							<p id='useruseruser'>{name}</p>
							<button id='submitInUser'>
								<Link to={`/users/${this.props.username}/articles`}>{`${name}'s Articles`}</Link>
							</button>
						</section>
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		axios
			.get(`https://jhnc-news.herokuapp.com/api/users/${this.props.username}`)
			.then(({ data: { user } }) => {
				this.setState({ user: user, isLoading: false });
			})
			.catch((err) => {
				navigate('/404');
			});
	}
}

export default User;
