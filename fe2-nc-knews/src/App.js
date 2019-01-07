import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Navigation />
				<Content />
				<Sidebar />
				<Footer />
			</div>
		);
	}
}

export default App;
