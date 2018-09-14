import { h, Component } from 'preact';
import Hero from './../../components/Hero';
import Banner from './../../components/Banner';
import JobPicker from './../../components/JobPicker';
import { Link } from 'preact-router/match';
import Helmet from 'preact-helmet';
import Player from 'react-lazy-youtube';

export default class Home extends Component {

  state = {
  	offices: [{
  		city: 'Quebec',
  		address: '3175 Chemin des Quatre-Bourgeois #200 Quebec, QC G1W 2K7',
  		description: 'coveos first local office is based in sunny Los Angeles, California. Surrounded by scenic views, great restaurants, and even better people, the LA office is home to many departments, including Engineering and Clinical.',
  		directions_url: 'https://google.ca/'
  	}, {
  		city: 'Montreal',
  		address: '1100 Avenue des Canadiens-de-Montréal, Suite V20 Montreal, QC H3B 2S2',
  		description: 'coveos first local office is based in sunny Los Angeles, California. Surrounded by scenic views, great restaurants, and even better people, the LA office is home to many departments, including Engineering and Clinical.',
  		directions_url: 'https://google.ca/'
  	}, {
  		city: 'Schiphol-Rijk',
  		address: 'Beech Avenue 54-80 1119 PW Schiphol-Rijk',
  		description: 'coveos first local office is based in sunny Los Angeles, California. Surrounded by scenic views, great restaurants, and even better people, the LA office is home to many departments, including Engineering and Clinical.',
  		directions_url: 'https://google.ca/'
  	}, {
  		city: 'San Francisco',
  		address: '620 Davis St San Francisco, CA 94111',
  		description: 'coveos first local office is based in sunny Los Angeles, California. Surrounded by scenic views, great restaurants, and even better people, the LA office is home to many departments, including Engineering and Clinical.',
  		directions_url: 'https://google.ca/'
  	}],
  	departments: [{
  		name: 'Techno',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Business',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Marketing',
  		description: 'wokr hard play hard bla bla'
  	},{
  		name: 'Techno',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Business',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Marketing',
  		description: 'wokr hard play hard bla bla'
  	}]
  }

  componentDidMount() {

  	/*fetch('http://localhost:8080/api/collections/get/offices?token=e0649253150aaceff53d83d39f9fc7')
  		.then(response => response.json())
  		.then(data => {
        console.log(data);
  			this.setState({
  				offices: data.entries
  			});
  		});*/
  }

  renderOffices = (offices) => {
  	const officesNode = [];
  	offices.forEach(office => {
  		officesNode.push(
  			<div class="column is-half">
  				<img src="/assets/images/nyc.jpg" style={{
  					marginBottom: 24
  				}}
  				/>
  				{/*<img src={'http://52.0.76.6' + office.image.url} />*/}
  				<div class="columns">
  					<div class="column is-4">
  						<h2 class="title" style={{
  							fontSize: 24,
  							fontWeight: 400,
  							lineHeight: '30px',
  							fontFamily: 'Lato'
  						}}
  						>
  							{office.city}
  						</h2>
  						<p style={{
  							color: '#7a838e',
  							fontSize: 14,
  							lineHeight: '30px'
  						}}
  						>{office.address}
  							<br />
  							<a style={{
  							fontSize: 14,
  							lineHeight: '30px'
  						}} href={office.directions_url}
  							>Get Directions</a>
  						</p>

  					</div>
  					<div class="column">
  						<p style={{
  							color: '#7a838e',
  							fontSize: 16,
  							lineHeight: '27px'
  						}}
  						>{office.description}</p>
  					</div>
  			  </div>
  				<br />
  			</div>
  		);
  	});
  	return officesNode;
  };

  renderDepartments = (departments) => {
  	const departmentsNode = [];
  	departments.forEach(department => {
  		departmentsNode.push(
  			<div class="column is-one-third" style={{
  				alignSelf: 'stretch'
  			}}
  			>
  				<div class="box is-paddingless" style={{
  					height: '100%'
  				}}
  				>
  					<img src="https://images.ctfassets.net/plyq12u1bv8a/5pJSbu5nA4mUwaSIQkQqWk/a6d8790747e5abfe68044d9d7727f3ff/losangeles.jpg" />
  					<div style={{
  						padding: 24
  					}}
  					>
  					<h2 style={{
  							color: '#001837',
  							fontSize: 25,
                lineHeight: '36px',
                fontWeight: 400,  
                fontFamily: 'Lato'
  						}} class="title"
  					>{department.name}</h2>
  					<p style={{
  							color: '#979797',
  							lineHeight: '22px',
  							fontSize: 14
  						}}
  					>{department.description}
  							<br /><br />
  							<a href="#">link nubw e asdf</a></p>
  					</div>
  				</div>
  			</div>
  		);
  	});
  	return departmentsNode;
  };


  render() {

  	const { offices, departments } = this.state;
    
  	return (
  		<div>
  			<Helmet
	        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
	        title="Careers at Coveo"
	        meta={[
  					{ name: 'description', content: 'You\'ve found what you\'re looking for. Check the list of job postings and join our team!' },
  					{ property: 'og:type', content: 'website' }
  				]}
  			/>
  			<div class="container">
  				<Hero
	title={'title'}
	subtitle={'subtitle'}
  				/>
  				<JobPicker />
  				<br />
  				<br />
  				<br />
  				<Player id="pwfgkRRiQ-0" imageSize="maxresdefault" />
  				{/*<div class="embed-container">
  					<iframe src="https://www.youtube.com/embed/pwfgkRRiQ-0?modestbranding=1&autohide=1&showinfo=0&controls=0" frameBorder="0" allowfullscreen />
        </div>*/}
        <br />
  				<Hero
	title={'Join the best minds working on the hardest problems.'}
	subtitle={'The driven people who make up Oscars teams come from all over, with backgrounds as technology leaders, policy makers, and beyond. And they all have one thing in common – the desire to make a frustrating system more human and more friendly. You don’t have to have experience in health care – you just have to want to fix it. Ready to rebuild health care? Check out our job openings.'}
  				/>
             <br />
  				<div class="columns is-multiline">
  					{this.renderDepartments(departments)}
  				</div>
  				<Hero
	title={'Our locations'}
	subtitle={'We’re in four cities.'}
  				/>
  				<div class="columns is-multiline">
  					{ offices ? this.renderOffices(offices) : null }
  				</div>
  				<br />
  				<br /><br /><br /><br />
  			</div>
        
  			<section class="section" style={{
  				backgroundColor: '#f8f8f8'
  			}}
  			>
  				<div class="container">
  					<Hero
  						title={'Great perks for every employee'}
  					/>
  					<div class="columns">
  						<div class="column is-half">
  							<div style={{
  								backgroundColor: '#ffffff',
  								padding: 90
  							}}
  							>
  								<img src="" />
  								<h3>Health Insurance</h3>
  								<p>Of course. Oscar employees get great health insurance for themselves and their families.</p>
  							</div>
  						</div>
  						<div class="column is-half">
  							<div style={{
  								backgroundColor: '#ffffff',
  								padding: 90
  							}}
  							>
  								<img src="" />
  								<h3>Health Insurance</h3>
  								<p>Of course. Oscar employees get great health insurance for themselves and their families.</p>
  							</div>
  						</div>
  					</div>
  					<br />
  					<br />
  					<br />
  					<br />
  				</div>
  			</section>
  			<Banner />
  		</div>
  	);
  }
}
