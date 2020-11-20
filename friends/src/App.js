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
        <header className="appHeader">
              <Link className="header" to="/login">Login</Link>
              <Link className="header" to="/friends">Friends</Link>
        </header>
        <h1>FRIENDS</h1>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends}/>

          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
    );
};

export default App;
