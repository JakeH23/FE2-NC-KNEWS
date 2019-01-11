import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import Loading from './Loading';

class UserPersonalProfile extends Component {
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
								<Link to='/addArticle'>Add Article</Link>
							</button>
							<button id='submitInUser'>
								<Link to={`/users/${this.props.username}/articles`}>
									{`${this.state.user.name}'s Articles`}{' '}
								</Link>
							</button>
							<button id='submitInUser'>
								<Link to='/addTopic'>Create a topic</Link>
							</button>
							<button id='submitInUser'>
								<Link to='/articles/deleteArticle'>Delete article</Link>
							</button>
						</section>
					</div>
				</Fragment>
			);
	}

	componentDidMount() {
		Axios.get(`https://jhnc-news.herokuapp.com/api/users/${this.props.username}`).then(({ data: { user } }) => {
			this.setState({ user: user, isLoading: false });
		});
	}
}

export default UserPersonalProfile;
