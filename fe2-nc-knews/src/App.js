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

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Navigation />
				<Router className='main'>
					<Content path='/' />
					<AddArtForm path='/addArticle' />
					<AddComForm path='/addComment' />
					<Article path='/articles/:article_id' />
					<User path='/users/:username' />
				</Router>
				<Sidebar />
				<Footer />
			</div>
		);
	}
}

export default App;
