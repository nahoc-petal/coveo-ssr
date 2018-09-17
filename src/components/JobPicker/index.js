import { h, Component } from 'preact';
import { route } from 'preact-router';
import { API_URL, TOKEN_FR, TOKEN_EN } from './../../config/api';

class JobPicker extends Component {
  state = {
  	departments: null,
  	offices: null,
  	selectedDepartment: '',
  	selectedOffice: ''
  }

  componentDidMount() {
  	fetch(`${API_URL}/${TOKEN_EN}/departments`)
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				departments: data.departments
  			});
  		});
      
  	fetch(`${API_URL}/${TOKEN_EN}/offices`)
  		.then(response => response.json())
  		.then(data => {
  			this.setState({
  				offices: data.offices
  			});
  		});
  }

  onChangeDepartment = (event) => {
  	this.setState({
  		selectedDepartment: event.target.value
  	});
  };

  onChangeOffice = (event) => {
  	this.setState({
  		selectedOffice: event.target.value
  	});
  };

  renderDepartments = (departments) => {
  	const departmentsNode = [];
  	departments.forEach(department => {
  		departmentsNode.push(
  			<option key={department.id} value={department.id}>{department.name}</option>
  		);
  	});
  	return departmentsNode;
  }

  renderOffices = (offices) => {
  	const officesNode = [];
  	offices.forEach(office => {
  		officesNode.push(
  			<option key={office.id} value={office.id}>{office.name}</option>
  		);
  	});
  	return officesNode;
  }

  onClickSearch = (event) => {
  	const department = this.state.selectedDepartment ? '/' + this.state.selectedDepartment : '';
  	const office = this.state.selectedOffice ? '/' + this.state.selectedOffice : '';
  	route('/jobs/search' + department + office, true);  // replaces the current history entry
  }

  render() {
  	const { departments, offices } = this.state;
  	return (
  		<div class="columns box" style={{
  			alignItems: 'center',
  			maxWidth: 960,
  			margin: 'auto'
  		}}
  		>
  			<div class="column small-column">
  				<label>Show me</label>
  			</div>
  			<div class="column">
  				<div class="select is-medium is-fullwidth">
  					<select onChange={this.onChangeDepartment}>
  						<option>All</option>
  						{departments ? this.renderDepartments(departments) : null}
  					</select>
  				</div>
  			</div>
  			<div class="column small-column">
  				<label>jobs in</label>
  			</div>
  			<div class="column">
  				<div class="select is-medium is-fullwidth">
  					<select onChange={this.onChangeOffice}>
  						<option value="all">All Cities</option>
  						{offices ? this.renderOffices(offices) : null}
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
