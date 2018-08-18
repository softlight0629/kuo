import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, Route, Link, Switch } from 'react-router';
import Index from './routers/Index';
// import WorkSpace from './routers/WorkSpace';
import './App.less';

@withRouter
@inject('workSpaceStore',  'authStore')
@observer
class App extends Component {

  componentWillMount() {
    this.props.authStore.authenticate();
  }

  render() {

    return (
      <div className="app">
        <Switch>
          {/* <Route path="/workspace/:guid" component={WorkSpace} /> */}
          <Route path="/" component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
