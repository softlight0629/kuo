import React, { Component } from 'react';
import { withRouter, Route, Link, Switch } from 'react-router';
import Index from './routes/Index';
import './App.css';

@withRouter
class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
