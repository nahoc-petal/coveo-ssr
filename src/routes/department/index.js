import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Hero from './../../components/Hero';
import Helmet from 'preact-helmet';
import Quote from './../../components/Quote';
import Player from 'react-lazy-youtube';
import slugify from 'slugify';


export default class Department extends Component {

  state = {
  	quotes: [{
  		content: 'Within one month of working at Coveo I declared to my friends and family that I have become a search nerd.',
  		author: 'Cohan Carpentier'
  	}]
  }
  
  componentDidMount() {
  	console.log(this.props);
  	this.props.onLoadComplete();
  }

  renderQuotes = (quotes) => {
  	const quotesNode = [];
  	quotes.forEach(quote => {
  		quotesNode.push(
  			<Quote 
          content={quote.content}
          author={quote.author}
        />
  		);
  	});
  	return jobsNode;
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

  cleanUpSlug(slug) {
  	const slugWithoutHyphens = slug.replace(/-/g, ' ');
  	const slugWithEachFirstLetterCapitalized = slugWithoutHyphens.toLowerCase()
  		.split(' ')
  		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  		.join(' ');
  	return slugWithEachFirstLetterCapitalized;
  }
  
  render() {
  	const { jobs, quotes } = this.state;
  	const { department } = this.props;
  	return (
  		<div class="container animated animatedFadeInUp fadeInUp">
  			<Helmet
	        htmlAttributes={{ lang: 'en', amp: undefined }}
	        title={`${this.cleanUpSlug(department)} Jobs - Careers at Coveo`}
	        meta={[
  					{ name: 'description', content: 'You\'ve found what you\'re looking for. Check the list of job postings and join our team!' },
  					{ property: 'og:type', content: 'website' }
  				]}
  			/>
  			<section class="section" style={{ paddingTop: '1.5rem' }}>
  				<nav class="breadcrumb is-paddingless" aria-label="breadcrumbs">
  				<ul class="is-paddingless">
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="/">Overview</Link></li>
  					<li><Link style={{ fontSize: 14 }} class="text-black" href="/jobs">All Jobs</Link></li>
  						<li>
  							<Link style={{ fontSize: 14 }} class="text-black is-active" href="#">
  								{this.cleanUpSlug(department)}
  							</Link>
  						</li>
  				</ul>
  			</nav>
  				<Hero
	alignment="center"
  					title={'Our Technology team keeps it simple. And human.'}
  					subtitle={'Revolutionizing an old and backwards industry means new technology and forward-thinking ideas. And the grit to deal with messy problems.'}
  				/>
  					<Player id="pwfgkRRiQ-0" imageSize="maxresdefault" />
  				  {quotes ? this.renderQuotes(quotes) : null}
  				</section>
  			<section class="section">
  				{jobs ? this.renderJobs(jobs) : null}
  			</section>
  		</div>
  	);
  }
}
