import React, { Fragment, Component } from 'react';
import { Link } from '@reach/router';

class Sidebar extends Component {
	render() {
		return (
			<Fragment>
				<div className='Sidebar'>
					<ul>
						TOPICS
						{this.props.topics.map((topic) => {
							return (
								<li key={topic.slug}>
									<span className='topicname' key={'topicname' + topic.slug}>
										<Link to={`/${topic.slug}/articles`}>
											{topic.slug.charAt(0).toUpperCase() + topic.slug.substr(1)}
										</Link>
									</span>
								</li>
							);
						})}
					</ul>
					<div className='AddTopic'>
						<button id='submitTop'>
							<Link to='/addTopic'>Create a topic</Link>
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Sidebar;
