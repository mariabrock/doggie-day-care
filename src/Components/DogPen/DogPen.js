import React from 'react';
import './DogPen.scss';

import Dog from '../Dog/Dog';

class DogPen extends React.Component {
printDogs = () => {
  const { dogs } = this.props;
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
