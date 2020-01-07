import React from 'react';

import DogPen from '../Components/DogPen/DogPen';
import Staffroom from '../Components/Staffroom/Staffroom';
import dogsData from '../Components/helpers/data/dogsData';
import employeeData from '../Components/helpers/data/employeeData';
import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
    const employees = employeeData.getAllEmployees();
    this.setState({ employees });
  }

  render() {
    return (
    <div className="App">
      <DogPen dogs={this.state.dogs} />
      <Staffroom employees={this.state.employees} />
    </div>
    );
  }
}

export default App;
