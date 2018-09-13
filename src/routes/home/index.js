import { h, Component } from 'preact';
import Hero from './../../components/hero';
import Banner from './../../components/banner';
import JobPicker from './../../components/job-picker';
import { Link } from 'preact-router/match';

export default class Home extends Component {

  state = {
  	offices: []
  }

  componentDidMount() {
  	fetch('http://52.0.76.6/offices')
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				offices: data
  			});
  		});
  }

  renderOffices = (offices) => {
  	const officesNode = [];
  	offices.forEach(office => {
  		officesNode.push(
  			<div class="column is-half">
  				<img src="/assets/images/nyc.jpg" />
  				{/*<img src={'http://52.0.76.6' + office.image.url} />*/}
  				<div class="columns">
  					<div class="column">
  						<h2 class="title" style={{
  							fontSize: 24
  						}}
  						>
  							{office.city}
  						</h2>
  						<p>{office.address}</p>
  						<a href="https://google.com">Get Directions</a>
  					</div>
  					<div class="column" />
  				</div>
  				<div class="column">
  					<p>{office.description}</p>
  				</div>
  			</div>
  		);
  	});
  	return officesNode;
  };


  render() {

  	const { offices } = this.state;
    
  	return (
  		<div>
  			<div class="container">
  				<Hero
	title={'title'}
	subtitle={'subtitle'}
          />
  				<JobPicker />
  				<Link href="/job/senior-software-engineer-web/5b9abbf58319cf618fca672b">John</Link>
  				<Hero
	title={'Join the best minds working on the hardest problems.'}
	subtitle={'The driven people who make up Oscars teams come from all over, with backgrounds as technology leaders, policy makers, and beyond. And they all have one thing in common – the desire to make a frustrating system more human and more friendly. You don’t have to have experience in health care – you just have to want to fix it. Ready to rebuild health care? Check out our job openings.'}
  				/>
  				<div class="columns">
  					<div class="column is-one-third">
  						<div class="box is-paddingless">
  							<img src="https://images.ctfassets.net/plyq12u1bv8a/5pJSbu5nA4mUwaSIQkQqWk/a6d8790747e5abfe68044d9d7727f3ff/losangeles.jpg?w=1200" />
  							<h2 class="title">Techonlogy</h2>
  							<p>skgjsdlg jsdgsdfklg jkldsfgjl ksdjg lksdjfgl jsdfl</p>
  							<a href="#">link nubw e asdf</a>
  						</div>
  					</div>
  				</div>
  				<Hero
	title={'Our locations'}
	subtitle={'We’re in four cities.'}
  				/>
  				<div class="columns">
  					{ offices ? this.renderOffices(offices) : null }
  				</div>
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
  				</div>
  			</section>
  			<Banner />
  		</div>
  	);
  }
}
