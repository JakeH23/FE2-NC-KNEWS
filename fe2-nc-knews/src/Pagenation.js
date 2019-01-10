import React, { Component } from 'react';

class Pagenation extends Component {
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.props.handlePage(-1);
					}}
				>
					Previous Page
				</button>
				<button
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
