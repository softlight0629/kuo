import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

@withRouter
@inject('workSpaceStore', 'sketchBoardStore')
@observer
class SiteStructure extends Component {

  refPageResource(pageResource) {
    this.props.sketchBoardStore.refPageResource(pageResource);
  }

  render() {
    const { site = {} } = this.props.workSpaceStore;
    const { pageResources = [] } = site;

    return (
      <div className="code-site-structure">
        <div className="code-ide-tree">
          <h2 className="title">Site Structure</h2>
          <div className="code-page-tree">
          <Menu
            mode="inline"
            defaultOpenKeys={['1']}
            style={{ height: '100%' }}
          >
            <Menu.SubMenu key="sub_1" title={<span>Pages</span>}>
            {
              pageResources.map((pageResource, i) => <Menu.Item key={i}><span className="code-page-menu-item" onClick={() => this.refPageResource(pageResource)}>{pageResource.name}</span></Menu.Item>)
            }
            </Menu.SubMenu>
            <Menu.SubMenu key="sub_2" title={<span>Public</span>}>
              <Menu.Item key="1">Add a new file</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub_3" title={<span>Backend</span>}>
              <Menu.Item key="1">Add a new Web Module</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub_4" title={<span>Database</span>}>
            <Menu.Item key="1">Add new collection</Menu.Item>
            </Menu.SubMenu>
          </Menu>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteStructure;
