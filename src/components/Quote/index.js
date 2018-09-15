import { h } from 'preact';
import { Link } from 'preact-router/match';

const Quote = ({ quote, author }) => (
	<section class="hero has-text-centered">
		<div class="hero-body">
			<img src="/assets/images/quote.svg" width="60" height="60" />
			<br />
			<br />
			<h3 style={{
				fontSize: 30,
				lineHeight: '42px',
				color: '#051033',
				fontWeight: 300
			}}
			>
				{quote}
			</h3>
			<br />
			<p style={{
				color: '#7a838e',
				fontSize: 14,
				lineHeight: '14px'
			}}
			>
				{author}
			</p>
		</div>
	</section>
);

export default Quote;
