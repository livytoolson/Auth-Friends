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
          <ul>
            <Link to="/login">Login</Link>
          </ul>
          <ul>
            <Link to="/protected">Friends</Link>
          </ul>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
          <Route component={FriendForm}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
