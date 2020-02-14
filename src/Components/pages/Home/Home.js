import React from 'react';
import './Home.scss';

import dogsData from '../../../helpers/data/dogsData';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    dogs: [],
  }

  getDogs = () => {
    dogsData.getBoardsByUid(authData.getUid())
      .then((dogs) => this.setState({ dogs }))
      .catch((err) => console.error('error from get dogs', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deleteBoard =(dogId) => {
    dogsData.deleteBoard(dogId)
      .then(() => this.getBoards())
      .catch((err) => console.error('error deleting board', err));
  }

  render() {
    return (
            <div className="Home">
                <h1>Home</h1>
                <div className="boards d-flex flex-wrap">
                  <button className="btn btn-success">Test Button</button>
                  {/* {this.state.boards.map((board) => (<DogP key={board.id} board={board} deleteBoard={this.deleteBoard} />))} */}
                </div>
            </div>
    );
  }
}

export default Home;
