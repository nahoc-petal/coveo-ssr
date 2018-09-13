import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Job from '../routes/job';
import Search from '../routes/search';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Job path="/job/:job/:id" />
					<Search path="/jobs/:search?/:department?/:city?" />
				</Router>
				<Footer />
			</div>
		);
	}
}
