import React from 'react';

const Pagination = (props) => {
	return (
		<div>
			<button
				id='buttonStylyID'
				onClick={() => {
					props.handlePage(-1);
				}}
			>
				Previous Page
			</button>
			<button
				id='buttonStylyID'
				onClick={() => {
					props.handlePage(1);
				}}
			>
				Next Page
			</button>
		</div>
	);
};

export default Pagination;
