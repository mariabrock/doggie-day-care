import React from 'react';
import './Employee.scss';

import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
    static propTypes = {
      employee: employeeShape.employeeShape,
    }

    render() {
      const { employee } = this.props;
      return (
        <div className="Employee col-3">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{employee.firstName}</h5>
                <h5>{employee.lastName}</h5>
                <p>{employee.phoneNumber}</p>
            </div>
            </div>
        </div>
      );
    }
}

export default Employee;
