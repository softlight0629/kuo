import React, { Component } from 'react';
import { Layout , Menu, Button, Row, Col, Icon } from 'antd';
import './Dashboard.css';

const { Content, Sider } = Layout;
class Dashboard extends React.Component {


  render() {
    return (
      <div className="dashboard">
        <Sider className="sidebar">
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
        </Sider>
        <Content className="overview-content">
          <div className="quick-actions">
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
            <div className="quick-action-wrapper">
              <a className="quick-action">
                <div className="button-icon">
                  <Icon type="dashboard" />
                </div>
                <div className="button-text-wrapper">
                  <span className="quick-action-text">View Site</span>
                </div>
              </a>
            </div>
          </div>

          <section className="settings-section">
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Site Name</div>
                <div className="item-content">website</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Edit</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Site Address</div>
                <div className="item-content">https://softlight0629.wixsite.com/website</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Manage</span>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="settings-section">
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Plan</div>
                <div className="item-content">Free</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>View our plans</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Domain</div>
                <div className="item-content">Connect your site to a domain</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Manage</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Publish Status</div>
                <div className="item-content">Site is published</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Unpublish</span>
                  </div>
                </div>
              </a>
            </div>
          </section>


          <section className="settings-section">
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Search Engines</div>
                <div className="item-content">Get found on search engines</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Manage</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Social</div>
                <div className="item-content">Set your sharing preferences</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Manage</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="overview-item">
              <a className="action-row">
                <div className="item-name">Analytics</div>
                <div className="item-content">Update your analytics settings</div>
                <div className="item-flag"></div>
                <div className="item-action">
                  <div className="action-text">
                    <span>Manage</span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </Content>
      </div>
    )
  }
}

export default Dashboard;
