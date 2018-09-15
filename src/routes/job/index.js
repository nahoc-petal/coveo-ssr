import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import decode from 'decode-html';
import { API_URL, TOKEN_FR, TOKEN_EN } from './../../config/api';

export default class Job extends Component {
  
	componentWillMount() {
  	fetch(`${API_URL}/${TOKEN_EN}/jobs/${this.props.matches.id}`)
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				job: data
				});
				this.props.onLoadComplete();
  		});
	}

	render() {
  	const { job } = this.state;
  	return (
  		<div class="container" style={{
				paddingTop: '20px'
  		}}
  		>
  			<nav class="breadcrumb" aria-label="breadcrumbs" style={{
					paddingLeft: '1.5rem',
					paddingRight: '1.5rem'
				}}
  			>
  				<ul>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="#">Overview</Link></li>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="/jobs">All Jobs</Link></li>
  					{job ? <li>
							<Link style={{ fontSize: 14 }} class="text-black" href="#">
								{job.departments[0].name}
							</Link>
						</li> : null}
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
  					<h1 class="title">{job.title}</h1>
  					<h6>{job.location.name}</h6>
  					<hr />
  					<div class="content" dangerouslySetInnerHTML={{ __html: decode(job.content) }} />
						<br />
  					<div class="level">
  						<div class="level-left">
  							<button class="button is-medium text-blue">Apply for this job</button>
  						</div>
  						<div class="level-right">
  							<p>share this job</p>
  						</div>
  					</div>
						<br />
						<hr />
  				</div> : null}
  		</div>
  	);
	}
}
