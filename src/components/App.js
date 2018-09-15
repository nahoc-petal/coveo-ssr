import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Footer from './Footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Job from '../routes/job';
import Search from '../routes/search';
import Department from '../routes/department';

export default class App extends Component {

  state = {
  	loading: true
  };
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			loading: true
		});
		this.currentUrl = e.url;
	};
  
  onLoadComplete = () => {
  	this.setState({
  		loading: false
  	});
  };

  render() {
  	const { loading } = this.state;
  	return (
  		<div id="app">
  			<link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
  		  <div class={loading ? 'loader-bar-wrapper slideDown' : 'loader-bar-wrapper slideUp'}>
  				<div class="loader-bar" />
  			</div>
  			<Header />
  			<Router onChange={this.handleRoute}>
  				<Home onLoadComplete={this.onLoadComplete} path="/" />
  				<Department onLoadComplete={this.onLoadComplete} path="/department/:department" />
  				<Job onLoadComplete={this.onLoadComplete} path="/job/:job?/:id" />
  				<Search onLoadComplete={this.onLoadComplete} path="/jobs/:search?/:department?/:city?" />
  			</Router>
  			<Footer />
  		</div>
  	);
  }
}
