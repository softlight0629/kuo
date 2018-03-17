import React, { Component } from 'react';
import { Layout , Menu } from 'antd';
import './Editor.css';

const { Content, Sider } = Layout;

class Editor extends React.Component {

  render() {
    return (
      <div className="editor-content-wrapper">
        <div className="splitter" style={{ display: 'flex'}}>
          <Sider className="splitter-pane" style={{ position: 'relative', width: '100%', height: '100%', minWidth: 296}}>
            <Menu
              mode="inline"
              defaultOpenKeys={['1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1">Pages</Menu.Item>
              <Menu.Item key="2">Public</Menu.Item>
              <Menu.Item key="3">Backend</Menu.Item>
              <Menu.Item key="4">Database</Menu.Item>
            </Menu>
          </Sider>
          <Content className="splitter-pane" style={{ position: 'relative', height: '100%', flex: '1 1 0%'}}>
          </Content>
        </div>
      </div>
    )
  }
}

export default Editor;
