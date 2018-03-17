import React, { Component } from 'react';
import { Layout , Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Templates.css';

const { Content, Sider } = Layout;

class Templates extends React.Component {

  render() {
    return (
      <div className='templates'>
        <Sider>
          <Menu
            mode="inline"
            defaultOpenKeys={['1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1">Business</Menu.Item>
            <Menu.Item key="2">Online Store</Menu.Item>
            <Menu.Item key="3">Photography</Menu.Item>
            <Menu.Item key="4">Video</Menu.Item>
            <Menu.Item key="5">Music</Menu.Item>
            <Menu.Item key="6">Design</Menu.Item>
            <Menu.Item key="7">Restaurants & Food</Menu.Item>
            <Menu.Item key="8">Accommodation</Menu.Item>
          </Menu>
        </Sider>
        <Content className="template-content">
          <h1>Pick the Services & Maintenance website template you love</h1>
          <ul className="template-list">
            <li className="template-list-item">
              <div className="template-inner">
                <div className="template-snapshot">
                  <img src="/image/1.png" />
                </div>
              </div>
            </li>
            <li className="template-list-item">
              <div className="template-inner">
                <div className="template-snapshot">
                  <img src="/image/1.png" />
                </div>
              </div>
            </li>
            <li className="template-list-item">
              <div className="template-inner">
                <div className="template-snapshot">
                  <img src="/image/1.png" />
                </div>
              </div>
            </li>
            <li className="template-list-item">
              <div className="template-inner">
                <div className="template-snapshot">
                  <img src="/image/1.png" />
                </div>
              </div>
            </li>
          </ul>
        </Content>
      </div>
    )
  }
}

export default Templates;
