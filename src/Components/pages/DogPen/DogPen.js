import React from 'react';
import './DogPen.scss';

import Dog from '../../shared/Dog/Dog';

class DogPen extends React.Component {
state = {
  dogs: [],
}

printDogs = () => {
  const { dogs } = this.state;
  return dogs.map((dog) => (<Dog key={dog.id} dog={dog} />));
}

render() {
  return (
    <div>
      {
        this.printDogs()
      }
    </div>
  );
}
}

export default DogPen;
