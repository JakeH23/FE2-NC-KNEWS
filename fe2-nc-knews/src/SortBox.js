import React, { Component } from 'react';

class SortBox extends Component {
	render() {
		return (
			<div id='SortBox'>
				<form id='queryForm' onSubmit={this.props.handleFilter}>
					<label htmlFor='sortBy'>Order by:</label>
					<select onChange={this.props.handleSortBy} id='sortBy'>
						<option value='votes'>Votes</option>
						<option value='article_id'>Article Id</option>
						<option value='comment_count'>Comment Count</option>
						<option value='title'>Title</option>
						<option value='created_at'>Date</option>
					</select>
				</form>
			</div>
		);
	}
}

export default SortBox;
