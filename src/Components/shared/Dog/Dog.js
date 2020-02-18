import React from 'react';
import './Dog.scss';

import dogShape from '../../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
    <div className="Dog col-3">
        <div className="card">
          <img src={dog.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <h5>{dog.owner}</h5>
            <p>{dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
