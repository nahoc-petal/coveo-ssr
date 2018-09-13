import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<nav style={{
		borderBottomColor: '#f3f3f3',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid'
	}} class="navbar is-white is-fixed-top"
	>
		<div class="container">
			<div class="navbar-brand">
				<Link class="navbar-item" href="/">
					<img src="/assets/images/coveo_logo_blue.svg" alt="Coveo" width="76" height="28" />
				</Link>
				<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
					<span />
					<span />
					<span />
				</div>
			</div>

			<div id="navbarExampleTransparentExample" class="navbar-menu">
				<div class="navbar-end">
					<Link class="navbar-item" href="https://bulma.io/">
          Home
					</Link>
					<div class="navbar-item has-dropdown is-hoverable">
						<Link class="navbar-link" href="/documentation/overview/start/">
            Docs
						</Link>
						<div class="navbar-dropdown is-boxed">
							<Link class="navbar-item" href="/documentation/overview/start/">
              Overview
							</Link>
							<Link class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
							</Link>
						</div>
					</div>
					<div class="navbar-item">
						<p class="control">
							<Link class="button is-primary">
								<span>Join Coveo</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</nav>
);

export default Header;
