import React from 'react';
import { Link } from '@reach/router';

const NoContentError = () => {
	return (
		<div>
			<div>No articles have been created yet.</div>
			<section>
				<Link to='/addArticle'>Click here to add an article</Link>
			</section>
		</div>
	);
};

export default NoContentError;
