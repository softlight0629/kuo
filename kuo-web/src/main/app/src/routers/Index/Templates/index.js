import React, { Component } from 'react';
import { Input, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

const { Search } = Input;

@withRouter
@inject('authStore')
@observer
class Templates extends Component {

  render() {
    const { auth } = this.props.authStore;

    return (
      <div className="templates">
        <div className="sidebar">
          <nav className="categories">
            <Search className="search" placeholder="E.g music, photograpy" />
            <h2 className="categories-title">Categories</h2>
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
              <Menu.Item key="7">Events</Menu.Item>
              <Menu.Item key="8">Blog</Menu.Item>
              <Menu.Item key="8">Health & Wellness</Menu.Item>
            </Menu>
          </nav>
        </div>
        <div className="templates-section">
          <h1 className="title">
            <span>Pick the Design</span>
            <br/>
            <span>website template you love</span>
          </h1>
          <ul className="templates-list">
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <Link to="/workspace">
                    <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                  </Link>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
            <li className="template">
              <div className="template-inner">
                <div className="preview-container">
                  <img src="//static.wixstatic.com/media/ff32a9c27134179f4656cf879726bc688e031e64d536c0e96d052bfe9eae98fd.jpg" className="preview-img"/>
                </div>
              </div>
              <span className="template-title">Graphic Design Portfolio</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Templates;
