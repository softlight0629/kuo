import React from 'react';
import { withRouter, Route, Router, Link, Switch} from 'react-router';
import Layout from '../../layouts/Default';
import MyAccount from './MyAccount';
import Dashboard from './Dashboard';
import Verticals from './Verticals';
import Templates from './Templates';

class Index extends React.Component {

  render() {
    return (
      <Layout>
        <Route path="/my-account" component={MyAccount} />
        <Route path="/dashboard/:guid" component={Dashboard} />
        <Route path="/verticals" component={Verticals} />
        <Route path="/templates" component={Templates} />
      </Layout>
    )
  }
}

export default Index;
