import { h } from 'preact';
import { Link } from 'preact-router/match';
import { Text } from 'preact-i18n';

const Header = () => (
	<div class="header" style={{
		borderBottomColor: '#f3f3f3',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid'
	}}
	>
		<div class="container">
			<div class="section" style={{
				paddingTop: 0,
				paddingBottom: 0
			}}
			>
      	<nav class="navbar is-white">
					<div class="navbar-brand">
						<Link class="navbar-item" href="/">
							<img src="/assets/images/coveo_logo_blue.svg" alt="Coveo" />
						</Link>
						<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
							<span />
							<span />
							<span />
						</div>
					</div>

					<div id="navbarExampleTransparentExample" class="navbar-menu">
						<div class="navbar-end">
							{/*<Link class="navbar-item" href="https://bulma.io/">
          FAQ
							</Link>
							<Link class="navbar-item" href="https://bulma.io/">
          Internship
    </Link>*/}
							<div class="navbar-item">
								<p class="control">
									<Link class="button is-primary" href="/apply">
										<span><Text id="labels.joinCoveo">Join Coveo</Text></span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
);

export default Header;
