import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div><h1>My Friends</h1></div>
        <nav>
          <ul>
            <ul><Link to="/">Home</Link></ul>
              <ul><Link to="/friends">Friends</Link></ul>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute path="/friends" component={Friends}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
    );
};

export default App;
