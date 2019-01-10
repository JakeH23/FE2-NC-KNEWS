import React, { Component } from 'react';

class Pagenation extends Component {
	render() {
		return (
			<div>
				<button
					id='buttonStylyID'
					onClick={() => {
						this.props.handlePage(-1);
					}}
				>
					Previous Page
				</button>
				<button
					id='buttonStylyID'
					onClick={() => {
						this.props.handlePage(1);
					}}
				>
					Next Page
				</button>
			</div>
		);
	}
}

export default Pagenation;
