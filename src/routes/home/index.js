import { h, Component } from 'preact';
import Hero from './../../components/Hero';
import Banner from './../../components/Banner';
import JobPicker from './../../components/JobPicker';
import { Link } from 'preact-router/match';
import Helmet from 'preact-helmet';
import Player from './../../lib/react-lazy-youtube';
import Quote from './../../components/Quote';
import slugify from 'slugify';

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
  	perks: [{
  		image: 'https://images.ctfassets.net/plyq12u1bv8a/6eJMms6FMWoIEC4ys2k0WY/a3624ebb143d2f21f9d227c85e67163c/CAREERS_CARD_HEALTHINSURANCE.jpg?w=1900',
  		name: 'Health Insurance',
  		description: 'Of course. Oscar employees get great health insurance for themselves and their families.'
  	}, {
  		image: 'https://images.ctfassets.net/plyq12u1bv8a/6eJMms6FMWoIEC4ys2k0WY/a3624ebb143d2f21f9d227c85e67163c/CAREERS_CARD_HEALTHINSURANCE.jpg?w=1900',
  		name: '401k',
  		description: 'We want you to be able to save for a long retirement.'
  	}, {
  		image: 'https://images.ctfassets.net/plyq12u1bv8a/6eJMms6FMWoIEC4ys2k0WY/a3624ebb143d2f21f9d227c85e67163c/CAREERS_CARD_HEALTHINSURANCE.jpg?w=1900',
  		name: '401k',
  		description: 'We want you to be able to save for a long retirement.'
  	}, {
  		image: 'https://images.ctfassets.net/plyq12u1bv8a/6eJMms6FMWoIEC4ys2k0WY/a3624ebb143d2f21f9d227c85e67163c/CAREERS_CARD_HEALTHINSURANCE.jpg?w=1900',
  		name: '401k',
  		description: 'We want you to be able to save for a long retirement.'
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
  		image: 'https://careers.coveo.com/content/1-home/background1.png',
  		name: 'Human Resources',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Business',
  		description: 'wokr hard play hard bla bla'
  	}, {
  		name: 'Marketing',
  		description: 'wokr hard play hard bla bla'
    }],
    quotes: [{
      content: 'Within one month of working at Coveo I declared to my friends and family that I have become a search nerd.',
      author: 'Cohan Carpentier'
    }, {
      content: 'The outfit doesn\'t make the moine lul',
      author: 'Cohan Lariviere'
    },{
      content: 'Im cool',
      author: 'Cohan Lariviere'
    }]
  }

  componentDidMount() {
  	this.props.onLoadComplete();
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
  					<div class="column is-5">
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
  							>Get Directions &nbsp;&nbsp;›</a>
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
  			</div>
  		);
  	});
  	return officesNode;
  };

  renderPerks = (perks) => {
  	const perksNode = [];
  	perks.forEach(perk => {
  		perksNode.push(
  			<div class="column is-half" style={{
  				alignItems: 'stretch'
  			}}
  			>
  				<div style={{
  					backgroundColor: '#ffffff',
  					padding: 90,
  					height: '100%'
  				}}
  				>
  					<img src={perk.image} />
  					<h3 style={{
  						color: '#051033',
  						fontSize: 18,
  						lineHeight: '34px',
  						fontWeight: 400
  					}}
  					>{perk.name}</h3>
  					<p style={{
  						color: '#65718b',
  						fontWeight: 300,
  						fontSize: 18,
  						lineHeight: '34px'
  					}}
  					>{perk.description}</p>
  				</div>
  			</div>
  		);
  	});
  	return perksNode;
  };

  renderDepartments = (departments) => {
  	const departmentsNode = [];
  	departments.forEach(department => {
  		departmentsNode.push(
  			<Link href={`/department/${slugify(department.name).toLowerCase()}`} class="column is-one-third" style={{
  				alignSelf: 'stretch'
  			}}
  			>
  				<div class="box is-paddingless" style={{
  					height: '100%'
  				}}
  				>
  						<img
	style={{
  								borderTopLeftRadius: 4,
  							borderTopRightRadius: 4
  							}}
	src={department.image ? department.image : 'https://images.ctfassets.net/plyq12u1bv8a/6xEvkrMQNiieK4qaoCQGqg/8b8df4e0ce2c940162e6e0d1d53002fa/Thumbnail_Care.jpg'}
  						/>
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
  							<span class="text-blue">link nubw e asdf&nbsp;&nbsp;›</span>
  						</p>
  					</div>
  				</div>
  			</Link>
  		);
  	});
  	return departmentsNode;
  };


  render() {

  	const { offices, departments, perks, quotes } = this.state;
    
  	return (
  		<div class="animated animatedFadeInUp fadeInUp">
  			<Helmet
	        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
	        title="Careers at Coveo"
	        meta={[
  					{ name: 'description', content: 'You\'ve found what you\'re looking for. Check the list of job postings and join our team!' },
  					{ property: 'og:type', content: 'website' }
  				]}
  			/>
  			<div class="container">
  				<section class="section">
  					<Hero
  						alignment="center"
  						title={'title'}
  						subtitle={'subtitle'}
  					/>
            					<JobPicker />
  				</section>

  				<section class="section youtube-wrapper">
  					<Player
	            id="pwfgkRRiQ-0"
  						imageSize="maxresdefault"
  						onPlay
  					/>
  				</section>
  				<Hero

  					alignment="center"
	  					title={'Join the best minds working on the hardest problems.'}
  					subtitle={'The driven people who make up Coveo teams come from all over, with backgrounds as technology leaders, policy makers, and beyond. And they all have one thing in common – the desire to make a frustrating system more human and more friendly. You don’t have to have experience in health care – you just have to want to fix it. Ready to rebuild health care? Check out our job openings.'}
  				/>
  				<section class="section">
  					<div class="columns is-multiline departments">
  					{this.renderDepartments(departments)}
  				</div>
  				</section>

  				{quotes ? <Quote quotes={quotes} /> : null}

  				<Hero
  					alignment="center"
  					title={'Our locations'}
  					subtitle={'We’re in four cities.'}
  				/>
  				<section class="section">
  					<div class="columns is-multiline">
  					{ offices ? this.renderOffices(offices) : null }
  				</div>
  				</section>
  			</div>
        
  			<section class="section" style={{
  				backgroundColor: '#f8f8f8',
  				paddingBottom: 90
  			}}
  			>
  				<div class="container">
  					<Hero
  						alignment="center"
	title={'Great perks for every employee'}
  					/>
  					<div class="columns is-multiline">
  						{ perks ? this.renderPerks(perks) : null }
  					</div>
  				</div>
  			</section>
  			<section class="section">
  				<Banner />
  			</section>

  		</div>
  	);
  }
}
