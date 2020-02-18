import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import dogsData from '../../../helpers/data/dogsData';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    dogs: [],
  }

  getDogs = () => {
    dogsData.getDogsByDogId(authData.getUid())
      .then((dogs) => this.setState({ dogs }))
      .catch((err) => console.error('error from get dogs', err));
  }

  componentDidMount() {
    this.getDogs();
  }

  deleteDog =(dogId) => {
    dogsData.deleteDog(dogId)
      .then(() => this.deleteDog())
      .catch((err) => console.error('error deleting dog', err));
  }

  render() {
    return (
            <div className="Home">
                <h1>Home</h1>
                <div className="home d-flex flex-wrap">
                  <Link className="btn btn-success" to="/dogpen">Doggos</Link>
                  <Link className="btn btn-warning" to="/staffroom">Hoomans</Link>
                  <Link className="btn btn-primary" to="/walk">Let's Walk</Link>
                  {/* {this.state.boards.map((board) => (<DogP key={board.id} board={board} deleteBoard={this.deleteBoard} />))} */}
                </div>
            </div>
    );
  }
}

export default Home;
