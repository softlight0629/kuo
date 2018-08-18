import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

@inject('workSpaceStore', 'sketchBoardStore')
@observer
class SiteStructure extends Component {

  activatePage(pageRes) {
    this.props.sketchBoardStore.activatePage(pageRes);
  }

  render() {
    const { site = {} } = this.props.workSpaceStore;
    const { pageResList = [] } = site;

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
              pageResList.map((pageRes, i) => <Menu.Item key={i}><span className="code-page-menu-item" onClick={() => this.activatePage(pageRes)}>{pageRes.name}</span></Menu.Item>)
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
