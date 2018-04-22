import React, { PropTypes, PureComponent } from 'react';
import { Menu, Icon, Row, Col } from 'antd';

import './index.less';

class TopNav extends PureComponent {

  render() {

    return (
      <nav className="top-nav">
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
      </nav>
    )
  }
}

class Layout extends PureComponent {

  render() {
    return (
      <div className="layout layout-default">
        <header className="layout-header" id="header">
          <a className="logo" href="/" alt="">
            <img width="150" height="28" src="https://gw.alipayobjects.com/zos/rmsportal/sZBLXQeqmJQYxjiAUgwH.svg" alt="Basement" />
          </a>
          <TopNav />
        </header>
        <section className="layout-body">
          <article className="layout-main center">
            { this.props.children }
          </article>
        </section>
      </div>
    )
  }
}

export default Layout;
