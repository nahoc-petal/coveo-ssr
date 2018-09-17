import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
// import Footer from './Footer';

import { IntlProvider } from 'preact-i18n';
import fr from './../i18n/fr.json';
import en from './../i18n/en.json';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Apply from '../routes/apply';
import Job from '../routes/job';
import Search from '../routes/search';
import Department from '../routes/department';

export default class App extends Component {

  state = {
  	loading: true,
  	lang: null,
  	langString: ''
  };
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		let choosenLanguage;
		let langString;
    
		if (e.current.attributes.lang) {
			choosenLanguage = e.current.attributes.lang === 'en' ? en : fr;
			langString = e.current.attributes.lang === 'en' ? 'en' : 'fr';
		}
		else {
			// fallback to english if lang not in URL
			choosenLanguage = fr;
			langString = 'fr';
		}
		this.setState({
			loading: true,
			lang: choosenLanguage,
			langString
		});
		this.currentUrl = e.url;
	};
  
  onLoadComplete = () => {
  	this.setState({
  		loading: false
  	});
  };

  render() {
  	const { loading, lang, langString } = this.state;
  	return (
  		<IntlProvider definition={lang}>
  			<div id="app">
  				<link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
  				<div class={loading ? 'loader-bar-wrapper slideDown' : 'loader-bar-wrapper slideUp'}>
  					<div class="loader-bar" />
  				</div>
  				<Header />
  				<Router onChange={this.handleRoute}>
  					<Home onLoadComplete={this.onLoadComplete} path={'/:lang?'} />
  					<Apply onLoadComplete={this.onLoadComplete} path={'/apply'} />
  					<Department onLoadComplete={this.onLoadComplete} path={'/department/:department'} />
  					<Job onLoadComplete={this.onLoadComplete} path={'/job/:job?/:id'} />
  					<Search onLoadComplete={this.onLoadComplete} path={'/jobs/:search?/:department?/:city?'} />
  				</Router>
  				{/*<Footer />*/}
  			</div>
  		</IntlProvider>
  	);
  }
}
