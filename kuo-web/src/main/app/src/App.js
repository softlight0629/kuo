import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import logo from './logo.svg';
import './App.css';
import client from './utils/client';
import KuoLayout from './layouts/KuoLayout';

class App extends Component {

  async componentDidMount() {
    const { siteStore } = this.props;

    const res = await siteStore.load(1);

    console.log(res);
  }

  render() {
    // const { siteStore } = this.props;

    return (
      <div className="app">
        <KuoLayout />
      </div>
    );
  }
}

export default withRouter(inject('siteStore')(observer(App)));
