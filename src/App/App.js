import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import './App.scss';

import Navbar from '../Components/shared/Navbar/Navbar';
import Auth from '../Components/pages/Auth/Auth';
import Home from '../Components/pages/Home/Home';
import DogPen from '../Components/pages/DogPen/DogPen';
import Staffroom from '../Components/pages/Staffroom/Staffroom';
import Walk from '../Components/pages/Walk/Walk';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <Router>
          <Navbar authed={authed} />
          <Switch>
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
            <PrivateRoute path="/" exact component={Home} authed={authed} />
            <PrivateRoute path="/dogpen" exact component={DogPen} authed={authed} />
            <PrivateRoute path="/staffroom" exact component={Staffroom} authed={authed} />
            <PrivateRoute path="/walk" exact component={Walk} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
