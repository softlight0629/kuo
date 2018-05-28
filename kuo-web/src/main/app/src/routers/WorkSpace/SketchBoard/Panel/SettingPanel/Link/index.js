import React, { Component } from 'react';
import { Icon, Input, Tabs, Dropdown, Menu } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

const TabPane = Tabs.TabPane;

@withRouter
@inject('designPanelUiStore')
@observer
class LinkPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeLinkPanel();
  }

  renderMenu() {
    return (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )
  }


  render() {

    return (
      <PanelWrapper title="What do you want to link to?" width={560} onClose={this.close.bind(this)}>
        <div className="linked-panel">
          <Tabs
            tabPosition="left"
            style={{ height: 297 }}
          >
            <TabPane tab={<span>None</span>} key="1">
              this is 1
            </TabPane>
            <TabPane tab={<span>Page</span>} key="2">
              <div className="panel-section">
                <div className="panel-section-label">
                  <span>Which page?</span>
                </div>
                <div className="panel-section-input">
                  <Dropdown overlay={this.renderMenu()} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                      Click me <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>Anchor</span>} key="3">
              this is 3
            </TabPane>
            <TabPane tab={<span>Web Address</span>} key="4">
              <div className="panel-section">
                <div className="panel-section-label">
                  <span>What's the web address?</span>
                </div>
                <div className="panel-section-input">
                  <Input />
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>Email</span>} key="5">
              <div className="panel-section">
                <div className="panel-section-label">
                  <span>What's the email address?</span>
                </div>
                <div className="panel-section-input">
                  <Input />
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span>Phone Number</span>} key="6">
              <div className="panel-section">
                <div className="panel-section-label">
                  <span>What's the your number?</span>
                </div>
                <div className="panel-section-input">
                  <Input />
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </PanelWrapper>
    )
  }
}

export default LinkPanel;
