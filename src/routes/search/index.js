import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Search extends Component {
  
	componentWillMount() {
  	fetch(`http://52.0.76.6/jobs/`)
  		.then(response => response.json())
  		.then(data => {
				console.log(data);
  			this.setState({
  				jobs: data
  			});
  		});
	}
  
  renderJobs = (jobs) => {
  	const jobsNode = [];
  	jobs.forEach(job => {
  		jobsNode.push(
  			<Link class="columns" href={'/job/' + job.slug + '/' + job.id}>
  				<div class="column is-5">
  					{job.name}
  				</div>
  				<div class="column">
  					{job.description}
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
  			<h2>Sales</h2>
  				{jobs ? this.renderJobs(jobs) : null}
  		</div>
  	);
  }
}
