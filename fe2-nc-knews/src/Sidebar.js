import React, { Fragment, Component } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

class Sidebar extends Component {
	state = {
		topics: []
	};
	render() {
		return (
			<Fragment>
				<div className='Sidebar'>
					<ul1>
						Topics
						{this.state.topics.map((topic) => {
							return (
								<li key={topic.slug}>
									<span className='topicname' key={'topicname' + topic.slug}>
										<Link to={`/${topic.slug}`}>{topic.slug}</Link>
									</span>
								</li>
							);
						})}
					</ul1>
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		Axios.get(`https://jhnc-news.herokuapp.com/api/topics`).then(({ data: { topics } }) => {
			this.setState({ topics: topics });
		});
	}
}
export default Sidebar;
