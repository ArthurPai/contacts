import React, { Component } from 'react';

class EmployeeItem extends Component {
  render() {
    const name = `${this.props.employee.firstName} ${this.props.employee.lastName}`;
    return (
      <div className="employee-item" onClick={() => this.props.selected(this.props.employee.id)}>
        <img src={`images/${this.props.employee.pic}`} className="employee-img" alt={name} />
        <div>
          <p>{name}</p>
          <span>{this.props.employee.title}</span>
        </div>
      </div>
    );
  }
}

export default EmployeeItem;
