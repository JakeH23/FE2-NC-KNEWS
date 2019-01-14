import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import { Router } from '@reach/router';
import AddArtForm from './components/forms/AddArtForm';
import Article from './components/Article';
import User from './components/User';
import AddComForm from './components/forms/AddComForm';
import Auth from './components/Auth';
import AddTopicForm from './components/forms/AddTopicForm';
import Articles from './components/Articles';
import DeleteArticlePage from './components/DeleteArticlePage';
import UserArticles from './components/UserArticles';
import Errors from './components/errors/Errors';
import UserPersonalProfile from './components/UserPersonalProfile';
import NoContentError from './components/errors/NoContentError';

class App extends Component {
	state = {
		user: {}
	};
	render() {
		return (
			<div className='App'>
				<Auth user={this.state.user} login={this.login}>
					<Header logout={this.logout} user={this.state.user} />
					<Router className='main'>
						<Home user={this.state.user} path='/' />
						<AddArtForm user={this.state.user} path='/addArticle' />
						<AddComForm user={this.state.user} path=':article_id/addComment' />
						<Article user={this.state.user} path='/articles/:article_id' />
						<User user={this.state.user} path='/users/:username' />
						<Articles user={this.state.user} path='/:topic/articles' />
						<AddTopicForm path='/addTopic' />
						<DeleteArticlePage user={this.state.user} path='/articles/deleteArticle' />
						<UserArticles user={this.state.user} path='/users/:username/articles' />
						<UserPersonalProfile user={this.state.user} path='/users/:username/profile' />
						<NoContentError path='/404/noContent' />
						<Errors default />
					</Router>
					<Sidebar />
					<Footer />
				</Auth>
			</div>
		);
	}

	componentDidMount() {
		if (localStorage.getItem('user')) {
			this.setState({ user: JSON.parse(localStorage.getItem('user')) });
		}
	}

	login = (user) => {
		this.setState({
			user
		});
		localStorage.setItem('user', JSON.stringify(user));
	};

	logout = () => {
		this.setState({ user: {} });
		localStorage.clear();
	};
}

export default App;
