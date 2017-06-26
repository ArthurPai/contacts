import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeDetail from './EmployeeDetail';
import EmployeeList from './EmployeeList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEmployeeId: null,
      employees: this.props.service.findByName("")
    }
  }

  search = (searchKey) => {
    const employees = this.props.service.findByName(searchKey);

    this.setState({
      employees: employees
    })
  }

  selected = (id) => {
    this.setState({
      currentEmployeeId: id
    })
  }

  render() {
    const employee = this.props.service.findById(this.state.currentEmployeeId);

    return (
      <div className="App">
        <Header title="Contacts"/>
        <div className="contacts-panel">
          <div className="employee-list-panel">
            <SearchBar search={this.search} />
            <EmployeeList employees={this.state.employees} selected={this.selected}/>
          </div>
          <div className="employee-deatils-panel">
            <EmployeeDetail employee={employee} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
