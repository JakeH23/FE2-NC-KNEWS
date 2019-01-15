import React from 'react';
import Articles from '../Articles';

const Home = (props) => {
	return <Articles username={props.user.username} />;
};

export default Home;
