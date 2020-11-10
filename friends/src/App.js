import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Friends</h1>
        <header className="appHeader">
              <Link to="/login">Login</Link>
              <Link to="/protected">Friends</Link>
        </header>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends}/>

          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
    );
};

export default App;
