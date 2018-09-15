import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Hero from './../../components/Hero';
import JobPicker from './../../components/JobPicker';
import { API_URL, TOKEN_FR, TOKEN_EN } from './../../config/api';
import slugify from 'slugify';

export default class Search extends Component {
  
	componentWillMount() {
  	fetch(`${API_URL}/${TOKEN_EN}/jobs`)
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				jobs: data.jobs
				});
				this.props.onLoadComplete();
			});
	}
  
  renderJobs = (jobs) => {
  	const jobsNode = [];
  	jobs.forEach(job => {
  		jobsNode.push(
  			<Link class="columns" href={'/job/' + slugify(job.title).toLowerCase() + '/' + job.id} style={{
  				borderBottomWidth: 1,
  				borderBottomStyle: 'solid',
  				borderBottomColor: '#f7f7f7'
  			}}
  			>
  				<div class="column is-5" style={{
  					paddingTop: 30,
  					paddingBottom: 30
  				}}
  				>
  					<h2 class="subtitle text-blue">{job.title}</h2>
  					<h3 style={{
  						color: '#001837',
  						fontSize: 14,
  						lineHeight: '34px',
  						fontWeight: 400
  					}}
  					>{job.location.name}</h3>
  				</div>
  				<div class="column" style={{
  					paddingTop: 30,
  					paddingBottom: 30
  				}}
  				>
  					<p style={{
  						fontSize: 20,
  						color: '#7a838e',
  						lineHeight: '32px',
  						fontWeight: 300
  					}}
  					>
  						{job.description}
            sdfkjhasd fjhsadjfh asjkdfhsajkdhf jkasdhfjka sdhfjkhasdf hjk</p>
  				</div>
  			</Link>
  		);
  	});
  	return jobsNode;
  }

  render() {
  	const { jobs } = this.state;
  	return (
  		<div class="container animated animatedFadeInUp fadeInUp">
  			<section class="section" style={{ paddingTop: '1.5rem' }}>
  				<nav class="breadcrumb is-paddingless" aria-label="breadcrumbs">
  				<ul class="is-paddingless">
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="#">Overview</Link></li>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="/jobs">All Jobs</Link></li>
  				</ul>
  			</nav>
  				<Hero
	title={'title'}
	subtitle={'subtitle'}
  				/>
        		<JobPicker />
  			</section>
  			<section class="section">
  				{jobs ? this.renderJobs(jobs) : null}
  			</section>
 
  		</div>
  	);
  }
}
