import { h } from 'preact';
import { Link } from 'preact-router/match';

const Banner = () => (
	<div class="section">
		<div class="container">
			<div class="columns" style={{
				alignItems: 'center'
			}}
			>
				<div class="column">
					<img src="https://images.ctfassets.net/plyq12u1bv8a/7aWcFa4qruCkew446gW2wu/262411d3d7fe91d292000fc2072185ce/CAREERS_SPOT_01.png?w=1000" />
				</div>
				<div class="column">
					<div style={{
						paddingLeft: 45
					}}
					>
						<h2 class="title">Let’s do this.</h2>
						<p>Ready to be a part of something big? We can’t wait to meet you.</p>
						<br />
						<Link href="/jobs/search/?department=-1&location=-1">
							<button class="button is-medium">
              See all open jobs
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Banner;
