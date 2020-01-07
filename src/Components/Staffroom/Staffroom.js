import React from 'react';

import Employee from '../Employee/Employee';

class Staffroom extends React.Component {
    printEmployees = () => {
      const { employees } = this.props;
      return employees.map((employee) => (<Employee key={employee.id} employee={employee} />));
    }

    render() {
      return (
        <div>
            {
                this.printEmployees()
            }
        </div>
      );
    }
}

export default Staffroom;
