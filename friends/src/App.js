import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <Link to="/login">Login</Link>
            <Link to="/protected">Friends</Link>
            <Link to="/addfriend">Add Friend</Link>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <PrivateRoute path="/addfriend" component={FriendForm}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
    );
};

export default App;
