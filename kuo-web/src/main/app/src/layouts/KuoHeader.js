import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import SiteSavePanel from '../components/SiteSavePanel';
import './KuoHeader.css';

const { Header, Content, Footer } = Layout;

const UserNav = (props) => (
  <div className="user-nav">
    <div className="user-avatar">
      softlighto629
    </div>
  </div>
)

const EditorAction = (props) => (
  <div className="editor-actions">
    <div className="editor-action">
      <Button>Save</Button>
    </div>
  </div>
)

class KuoHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  handleVisible() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <Header className="k-layout-header">
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '32px' }}
        >
          <Menu.Item key="1">My Sites</Menu.Item>
          <Menu.Item key="2">Features</Menu.Item>
          <Menu.Item key="3">Explore</Menu.Item>
          <Menu.Item key="4">Template</Menu.Item>
          <Menu.Item key="5">Support</Menu.Item>
        </Menu>
        <div className="editor-actions">
          <div className="editor-action">
            <Button onClick={() => this.handleVisible() }>Save</Button>
          </div>
        </div>
        <SiteSavePanel visible={this.state.visible} />
        {/* <Route path="/editor" component={EditorAction} /> */}
        {/* <UserNav /> */}
      </Header>
    )
  }
};


export default KuoHeader;
