import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
							<section>
								<button id='submitInUser'>
									<Link to='/addArticle'>Add Article</Link>
								</button>
							</section>
							<section>
								<button id='submitInUser'>
									<Link to={`/users/${this.props.username}/articles`}>
										{`${this.state.user.name}'s Articles`}
									</Link>
								</button>
							</section>
							<section>
								<button id='submitInUser'>
									<Link to='/addTopic'>Create a topic</Link>
								</button>
							</section>
							<section>
								<button id='submitInUser'>
									<Link to='/articles/deleteArticle'>Delete article</Link>
								</button>
							</section>
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

export default UserPersonalProfile;
