import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Job extends Component {
  
	componentWillMount() {
  	fetch(`http://52.0.76.6/jobs/${this.props.matches.id}`)
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				job: data
  			});
  		});
	}
  

	render() {
		const { job } = this.state;
		return (
			<div class="container" style={{
				paddingTop: '20px'
			}}
			>
				<nav class="breadcrumb" aria-label="breadcrumbs">
					<ul>
						<li><Link style={{ fontSize: 14 }} class="text-black" href="#">Overview</Link></li>
						<li><Link style={{ fontSize: 14 }} class="text-black" href="/jobs">All Jobs</Link></li>
						<li><Link style={{ fontSize: 14 }} class="text-black" href="#">Sales</Link></li>
					</ul>
				</nav>
				{job ?
					<div style={{
						maxWidth: 620,
						margin: 'auto'
					}}
					>
						<br />
						<br />
						<h1 class="title">{job.name} (Los Angeles, CA)</h1>
						<h6>{job.city}</h6>
						<hr />
						<p>{job.description}</p>
						<div class="level">
							<div class="level-left">
								<button class="button">Apply for this job</button>
							</div>
							<div class="level-right">
								<p>share this job</p>
							</div>
						</div>
					</div> : null}
			</div>
		);
	}
}
