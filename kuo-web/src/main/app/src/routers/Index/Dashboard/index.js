import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { withRouter, Route, Router, Link } from 'react-router';
import { Menu } from 'antd';
import Domain from './Domain';

import './index.less';
import { observer, inject } from 'mobx-react';

@withRouter
@inject('dashboardStore', 'routing')
@observer
class Dashboard extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.dashboardStore.fetch(match.params.guid);
  }

  render() {
    const { site } = this.props.dashboardStore;
    const { push } = this.props.routing;

    return (
    <div className="dashboard">
      <div className="sitebar-container">
        <nav className="sitebar-menu">
          <Menu
            mode="inline"
            defaultOpenKeys={['1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1">Overview</Menu.Item>
            <Menu.Item key="2">Premium Plan</Menu.Item>
            <Menu.Item key="3">Domains</Menu.Item>
            <Menu.Item key="4">Mailboxes</Menu.Item>
            <Menu.Item key="5">SEO</Menu.Item>
            <Menu.Item key="6">Favicon</Menu.Item>
            <Menu.Item key="7">Social</Menu.Item>
            <Menu.Item key="8">Tracking & Analytics</Menu.Item>
          </Menu>
        </nav>
      </div>
      <div className="site-content">
        <div className="settings-container">
          <div className="settings-main">
            <div className="settings-header">
              <div className="row">
                <div className="site-name">{site.name}</div>
                <div className="settings-buttons">
                  <Button onClick={() => push(`/workspace/${site.guid}`)}>Edit Site</Button>
                </div>
              </div>
              <h1 className="row overview-title">Site Actions</h1>
              <div className="row">
                <section className="settings-section overview-section">
                  <div className="quick-actions-container">
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Preview Site</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Connect Domain</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Rename Site</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Duplicate Site</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Transfer Site Ownership</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Delete Site</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="quick-action-wrapper">
                      <div className="quick-action-button">
                        <a className="quick-action">
                          <div className="tooltip-wrapper">
                            <div className="button-icon">
                              <Icon type="dashboard" />
                            </div>
                            <div className="button-text-wrapper">
                              <span className="quick-action-text">Site History</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <h1 className="row overview-title" style={{ marginTop: 0 }}>Site Basics</h1>
            <div className="settings-section overview-section">
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Site Name</div>
                  <div className="item-content">{site.name}</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Rename</span>
                  </div>
                </a>
              </div>
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Site Address</div>
                  <div className="item-content">Site is unpublished</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="settings-section overview-section">
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Plan</div>
                  <div className="item-content">{site.plan}</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">View our plans</span>
                  </div>
                </a>
              </div>
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Domain</div>
                  <div className="item-content">{site.domain}</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Manage</span>
                  </div>
                </a>
              </div>
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Publish Status</div>
                  <div className="item-content">Site is unpublished</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="settings-section overview-section">
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Search Engines</div>
                  <div className="item-content">Get found on search engines</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Manage</span>
                  </div>
                </a>
              </div>
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Social</div>
                  <div className="item-content">Set your sharing preferences</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Manage</span>
                  </div>
                </a>
              </div>
              <div className="overview-item">
                <a className="row-action">
                  <div className="item-name">Analytics</div>
                  <div className="item-content">Update your analytics settings</div>
                  <div className="item-flag"></div>
                  <div className="item-action">
                    <span className="action-text">Manage</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>)
  }
}

export default Dashboard;
