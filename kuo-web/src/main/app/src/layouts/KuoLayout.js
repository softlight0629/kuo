import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout , Menu, Breadcrumb } from 'antd';
import KuoHeader from './KuoHeader';
import Templates from '../components/Templates';
import Verticals from '../components/Verticals';
import Editor from '../components/Editor';
import Dashboard from '../components/Dashboard';

const { Content } = Layout;


class KuoLayout extends React.Component {

  render() {

    return (
      <Layout className="layout k-layout">
        <KuoHeader />
        <Content className="k-layout-content">
          <Route path="/templates" component={Templates} />
          <Route path="/verticals" component={Verticals} />
          <Route path="/editor" component={Editor} />
          <Route path="/dashboard" component={Dashboard} />
        </Content>
      </Layout>
    )
  }
}

export default KuoLayout;
