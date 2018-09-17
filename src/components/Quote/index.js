import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

class Quote extends Component {
  state = {
  	quoteIndex: 0,
  	amountOfQuotes: null,
  	animationClass: 'fadeInUp'
  }

  incrementQuoteIndex() {
  	setTimeout(() => {
  		this.toggleAnimationClass();
  		this.incrementQuoteIndex();
  	}, 6000);
  }

  slideDown() {
  	this.setState({
  		animationClass: 'fadeOutDown'
  	});
  }

  slideUp() {
  	this.setState({
  		animationClass: 'fadeInUp'
  	});
  }

  toggleAnimationClass() {
  	this.slideDown();
  	setTimeout(() => {
  		if (this.state.quoteIndex < this.state.amountOfQuotes.length - 1) {
  			this.setState({
  				quoteIndex: this.state.quoteIndex + 1
  			});
  		}
  		else {
  			this.setState({
  				quoteIndex: 0
  			});
  		}
  		this.slideUp();
  	}, 450);
  }

  initAmountOfQuotes(quotes) {
  	let array = [];
  	quotes.forEach((quote, index) => {
  		array.push(index);
  	});
  	this.setState({
  		amountOfQuotes: array
  	});
  }

  componentWillMount() {
  	this.initAmountOfQuotes(this.props.quotes);
  }

  componentDidMount() {
  	this.incrementQuoteIndex();
  }

  render() {
  	const { quoteIndex } = this.state;
  	const { quotes } = this.props;
  	return (
  		<section id={`quote-${quoteIndex}`} class={`hero has-text-centered animated-fast ${this.state.animationClass}`}>
  			<div class="hero-body" style={{
  				minHeight: 400,
  				maxWidth: 800,
  				display: 'flex',
  				justifyContent: 'center',
  				alignItems: 'center',
  				textAlign: 'center',
  				margin: 'auto',
  				flexDirection: 'column'
  			}}
  			>
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
  					{quotes[quoteIndex].content}
  				</h3>
  				<br />
  				<p style={{
  					color: '#7a838e',
  					fontSize: 14,
  					lineHeight: '14px'
  				}}
  				>
  					{quotes[quoteIndex].author}
  				</p>
  			</div>
  		</section>
  	);
  }
}

export default Quote;
