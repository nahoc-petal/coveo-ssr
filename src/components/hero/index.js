import { h } from 'preact';

const Hero = (props) => (
	<section class="section">
		<div class="hero has-text-centered">
			<div class="hero-body" style={{
				maxWidth: 800,
				margin: 'auto'
			}}
			>
				{props.title ?
					<h1 class="title">{props.title}</h1> : null}
				{props.subtitle ?
					<h2 class="subtitle" style={{
						fontSize: 20,
						lineHeight: '30px'
					}}
					><br />{props.subtitle}</h2> : null}
			</div>
		</div>
	</section>
);

export default Hero;
