import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Hero from './../../components/Hero';
import { API_URL, TOKEN_FR, TOKEN_EN } from './../../config/api';

export default class Apply extends Component {
  
	componentDidMount() {
		this.props.onLoadComplete();
	}
  
	render() {
  	return (
  		<div class="container">
				<section class="section">
					<ul class="steps is-centered has-content-centered">
						<li class="steps-segment">
							<a href="#" class="has-text-dark">
								<span class="steps-marker">
									<span class="icon">
										<i class="fa fa-shopping-cart" />
									</span>
								</span>
								<div class="steps-content">
									<p class="heading">Level 1</p>
								</div>
							</a>
						</li>
						<li class="steps-segment is-active has-gaps">
							<a hef="#" class="has-text-dark">
								<span class="steps-marker">
									<span class="icon">
										<i class="fa fa-user" />
									</span>
								</span>
								<div class="steps-content">
									<p class="heading">Level 2</p>
								</div>
							</a>
						</li>
						<li class="steps-segment">
							<span class="steps-marker is-hollow">
								<span class="icon">
									<i class="fa fa-usd" />
								</span>
							</span>
							<div class="steps-content">
								<p class="heading">Level 3</p>
							</div>
						</li>
					</ul>
				</section>
  			<Hero
					title="So it begins."
					subtitle="Let's kick things off! First we would love to hear about technologies you're experienced with. Select as many options as you like from the list below. If there's something missing, don't worry – you'll have a chance to tell us about that later."
					alignment="left"
  			/>
  		</div>
  	);
	}
}
