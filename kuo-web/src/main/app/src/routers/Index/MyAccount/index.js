import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';


@withRouter
@inject('accountStore', 'routing')
@observer
class MyAccount extends Component {

  componentDidMount() {
    this.props.accountStore.fetch();
  }

  render() {
    const { mysites } = this.props.accountStore;
    const { push } = this.props.routing;
    const menu = (
      <Menu>
        {
          mysites.map(site => (
            <Menu.Item key="0">
              <a href="javascript:void(0)" onClick={() => push(`/dashboard/${site.guid}`)}>{site.name}</a>
            </Menu.Item>))
        }
      </Menu>
    );

    return (
      <div className="my-account">
        <div className="site-section-container">
          <div className="site-section">
            <div className="site-name k-font-h2">
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  Click me <Icon type="down" />
                </a>
              </Dropdown>
            </div>
            <div className="site-role">
              <span className="role-label">Roles:</span>
              <div className="role-name">Owner</div>
            </div>
            <div className="site-graphics-container">
              <a className="site-graphics">
                <div className="site-thumbnail">
                  <div className="browser-navbar"></div>
                  <div className="graphics-wrapper"></div>
                </div>

                <div className="button-wrapper">
                  <Button className="site-graphics-button">Manage & Edit Site</Button>
                </div>
              </a>
            </div>
            <div className="site-info">
              <section className="domain">
                <div className="info-section-text">
                  <div className="label">Domain:</div>
                  <div className="data">Publish your site to see its address</div>
                </div>
                <a className="info-section-link">
                  Manage Domain
                </a>
              </section>
              <section className="plan">
                <div className="info-section-text">
                  <div className="label">Your Plan:</div>
                  <div className="data">Free</div>
                </div>
                <a className="info-section-link">
                  Upgrade to Premium
                </a>
              </section>
              <section className="mailbox">
                <div className="info-section-text">
                  <div className="label">Mailbox:</div>
                  <div className="data">Not Connected</div>
                </div>
                <a className="info-section-link">
                  Get a Mailbox
                </a>
              </section>
            </div>
          </div>
        </div>
        <div className="apps-section">
          <div className="adaptive-content-wrapper">
            <div className="adaptive-content">
              <section className="my-apps">
                <header className="my-apps-header">
                  <h2 className="section-title">My Apps</h2>
                  <div className="right">
                    <Button>Add App</Button>
                  </div>
                </header>
                <article className="my-apps-article">
                  <div className="app-boxes-container">
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                    <div className="app-box">
                      <a className="item">
                        <div className="icon"></div>
                        <div className="name">Wix Blog</div>
                        <div className="description">
                          Create a stunning blog & grow your communinty
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyAccount;
