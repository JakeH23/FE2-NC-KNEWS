import React, { Fragment } from 'react';
import { Link } from '@reach/router';

const Sidebar = props => (
  <Fragment>
    <div className="Sidebar">
      <ul>
					TOPICS
        {props.topics.map(topic => (
          <li key={topic.slug}>
            <span className="topicname" key={`topicname${topic.slug}`}>
              <Link to={`/${topic.slug}/articles`}>
                {topic.slug.charAt(0).toUpperCase() + topic.slug.substr(1)}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <div className="AddTopic">
        <button id="submitTop">
          <Link to="/addTopic">Create a topic</Link>
        </button>
      </div>
    </div>
  </Fragment>
);

export default Sidebar;
