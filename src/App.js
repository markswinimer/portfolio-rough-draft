import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Draft from './Draft';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">

          <HashRouter basename="/">
          <Switch>
            {/* <Navbar /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/draft" component={Draft} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}
}

export default App;
