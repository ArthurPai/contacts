import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        {this.props.employees.map((employee, index) => {
          return <EmployeeItem key={index} employee={employee} selected={this.props.selected}/>;
        })}
      </div>
    );
  }
}

export default EmployeeList;
