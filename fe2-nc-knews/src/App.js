import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';
import { Router } from '@reach/router';
import AddArtForm from './AddArtForm';
import Article from './Article';
import User from './User';
import AddComForm from './AddComForm';
import Comment from './Comment';
import Auth from './Auth';
import Topic from './Topic';

class App extends Component {
	state = {
		user: {}
	};
	render() {
		return (
			<div className='App'>
				<Auth user={this.state.user} login={this.login}>
					<Header />
					<Navigation />
					<Router className='main'>
						<Content path='/' />
						<AddArtForm user={this.state.user} path='/addArticle' />
						<AddComForm user={this.state.user} path=':article_id/addComment' />
						<Article user={this.state.user} path='/articles/:article_id' />
						<User user={this.state.user} path='/users/:username' />
						<Comment path='/comments/:comment_id' />
						<Topic path='/addTopic' />
					</Router>
					<Sidebar />
					<Footer />
				</Auth>
			</div>
		);
	}

	login = (user) => {
		this.setState({
			user
		});
		localStorage.setItem('user', JSON.stringify(user));
	};
}

export default App;
