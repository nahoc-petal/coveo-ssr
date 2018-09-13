import { h, Component } from 'preact';
import { route } from 'preact-router';

class JobPicker extends Component {
  state = {
  	department: null,
  	city: null
  }

  onChangeDepartment = (event) => {
  	this.setState({
  		department: event.target.value
  	});
  };

  onChangeCity = (event) => {
  	this.setState({
  		city: event.target.value
  	});
  };

  onClickSearch = (event) => {
  	const department = this.state.department ? '/' + this.state.department : null;
  	const city = this.state.city ? '/' + this.state.city : null;
  	route('/jobs/search' + department + city, true);  // replaces the current history entry
  }

  render() {
  	return (
  		<div class="columns box" style={{ alignItems: 'center' }}>
  			<div class="column small-column">
  				<label>Show me</label>
  			</div>
  			<div class="column">
  				<div class="select is-medium is-fullwidth">
  					<select onChange={this.onChangeDepartment}>
  						<option value="all">All</option>
  						<option value="sales">Sales</option>
  					</select>
  				</div>
  			</div>
  			<div class="column small-column">
  				<label>jobs in</label>
  			</div>
  			<div class="column">
  				<div class="select is-medium is-fullwidth">
  					<select onChange={this.onChangeCity}>
  						<option value="all">All Cities</option>
  						<option value="montreal">Montreal</option>
  					</select>
  				</div>
  			</div>
  			<div class="column small-column">
  				<button onClick={this.onClickSearch} class="button is-medium text-blue">
            Go
  				</button>
  			</div>
  		</div>
  	);
  }
}

export default JobPicker;
