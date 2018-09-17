import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import decode from 'decode-html';
import { fetchJobById } from './../../config/api';

export default class Job extends Component {
  
	componentWillMount() {
		const jobId = this.props.matches.id;
		fetchJobById(jobId)
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
  		<div class="container animated animatedFadeInUp fadeInUp" style={{
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
								<Link href="/apply">
  							<button class="button is-medium text-blue" style={{
										padding: '0px 24px',
										height: '55px',
										fontSize: 18
									}}
  							>Apply for this job</button>
								</Link>
  						</div>
  						<div class="level-right">
  							<p style={{
									fontSize: 14,
									lineHeight: '34px',
									color: '#051033'
								}}
  							>Share this job<br />
									<a class="social-icon facebook" href="/">facebook</a>
									<a class="social-icon twitter" href="/">twitter</a>
									<a class="social-icon linkedin" href="/">linkedin</a>
									<a class="social-icon mail" href="/">email</a>
								</p>
  						</div>
  					</div>
						<br />
						<hr />
  				</div> : null}
  		</div>
  	);
	}
}
