import React from 'react';

import DogPen from '../Components/DogPen/DogPen';
import dogsData from '../Components/helpers/data/dogsData';
import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
    <div className="App">
      <DogPen dogs={this.state.dogs} />
    </div>
    );
  }
}

export default App;
