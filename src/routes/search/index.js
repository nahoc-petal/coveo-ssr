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
				console.log(data);
  			this.setState({
  				jobs: data.jobs
  			});
  		});
	}
  
  renderJobs = (jobs) => {
  	const jobsNode = [];
  	jobs.forEach(job => {
  		jobsNode.push(
  			<Link class="columns" href={'/job/' + slugify(job.title).toLowerCase() + '/' + job.id}>
  				<div class="column is-5">
  					<h2 class="subtitle text-blue">{job.title}</h2>
  					<h3 class="text-black">{job.location.name}</h3>
  				</div>
  				<div class="column">
  					<p class="text-black">
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
  		<div class="container" style={{
  			paddingTop: '20px'
  		}}
  		>
      	<nav class="breadcrumb" aria-label="breadcrumbs">
  				<ul>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="#">Overview</Link></li>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="/jobs">All Jobs</Link></li>
  				</ul>
  			</nav>
        <Hero
          title={'title'}
          subtitle={'subtitle'}
        />
  			<JobPicker />
  			{jobs ? this.renderJobs(jobs) : null}
  		</div>
  	);
  }
}
