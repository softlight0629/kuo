import React, { Component } from 'react';
import { Tabs } from 'antd';
import { inject } from 'mobx-react';
import ThemeButton from '../../ThemeButton';
import './index.less';

const TabPane = Tabs.TabPane;

@inject('astThemeUiStore', 'sketchBoardStore', 'resGrpUiStore', 'workSpaceUiStore')
class ResPanel extends Component {

  handleClick(ast) {
    this.props.sketchBoardStore.addAst(ast);
    this.props.resGrpUiStore.closeResPanel();
  }

  handle(kind, theme) {
    const ast = this.props.astThemeUiStore.getTheme(kind, theme);
    this.handleClick(ast);
  }

  renderButtonResPanel() {
    const { sketchBoardStore } = this.props;
    const themesOfButton = this.props.astThemeUiStore.themesOfKind('Button');

    return (
      <div className="content-wrapper">
        <div className="sections">
          <div className="section-wrapper" style={{ height: '159px' }}>
            <div className="section-header">
              <div className="title-line">
                <div className="title">My Buttons</div>
              </div>
            </div>
            <div className="section-live-site-wrapper">
              <div className="section-preview-container">
                {themesOfButton.map(
                  themeOfButton => <ThemeButton
                    ast={themeOfButton}
                    loc={this.props.astThemeUiStore.locOfTheme(themeOfButton.meta.theme)}
                    onClick={ast => this.handleClick(ast)}
                  />)}
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-header">
              <div className="title-line">
                <div className="title">Text Buttons</div>
              </div>
            </div>
            <div className="items-wrapper">
              <div className="items">
                <img src="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/textButtonsSection_en/textButtonsSection_en.v5.png" />
                <div className="preset-item" style={{ left: 0, top: 0, width: '173px', height: '84px' }} onClick={() => this.handle('Button', 'text_button_comp1')}></div>
                <div className="preset-item" style={{ left: '173px', top: 0, width: '173px', height: '84px' }} onClick={() => this.handle('Button', 'text_button_comp2')}></div>
                <div className="preset-item" style={{ left: 0, top: '84px', width: '198px', height: '84px' }} onClick={() => this.handle('Button', 'text_button_comp3')}></div>
                <div className="preset-item" style={{ left: '198px', top: '84px', width: '126px', height: '84px' }} onClick={() => this.handle('Button', 'text_button_comp4')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderMenuResPanel() {
    const { sketchBoardStore } = this.props;
    const themesOfMenu = this.props.astThemeUiStore.themesOfKind('Menu');

    return (
      <div className="content-wrapper">
        <div className="sections">
          <div className="section-wrapper" style={{ height: '210px' }}>
            <div className="section-header">
              <div className="title-line">
                <div className="title">Themed Menus</div>
              </div>
            </div>
            <div className="section-live-site-wrapper">
              <div className="section-preview-container">
                {themesOfMenu.map(
                  themeOfMenu => <ThemeButton
                    ast={themeOfMenu}
                    loc={this.props.astThemeUiStore.locOfTheme(themeOfMenu.meta.theme)}
                    onClick={ast => this.handleClick(ast)}
                  />)}
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="section-header">
              <div className="title-line">
                <div className="title">Horizontal Menus</div>
              </div>
            </div>
            <div className="items-wrapper">
              <div className="items">
                <img src="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/horizontalMenusSection_en/horizontalMenusSection_en.v9.png" />
                <div className="preset-item" style={{ left: 0, top: '20px', width: '324px', height: '62px' }} onClick={() => this.handle('Menu', 'horizontal_menu_comp1')}></div>
                <div className="preset-item" style={{ left: 0, top: '86px', width: '324px', height: '50px' }} onClick={() => this.handle('Menu', 'horizontal_menu_comp2')}></div>
                <div className="preset-item" style={{ left: 0, top: '146px', width: '324px', height: '67px' }} onClick={() => this.handle('Menu', 'horizontal_menu_comp3')}></div>
                <div className="preset-item" style={{ left: 0, top: '220px', width: '324px', height: '62px' }}  onClick={() => this.handle('Menu', 'horizontal_menu_comp4')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  openMediaGallery() {
    this.props.workSpaceUiStore.openMediaGallery()
    this.props.resGrpUiStore.closeResPanel();
  }

  renderImagePanel() {
    return (
      <div className="content-wrapper">
        <div className="sections">
          <div className="section-wrapper" style={{ height: '159px' }}>
            <div className="section-header">
              <div className="title-line">
                <div className="title">My Buttons</div>
              </div>
            </div>
            <div className="section-live-site-wrapper">
              <div className="section-preview-container">
                <div onClick={() => this.openMediaGallery()}>xxx</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="res-panel">
        <div className="res-panel-inner">
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            tabBarStyle={{
              width: 120,
              textAlign: 'left',
              backgroundColor: '#3797ea',
              backgroundImage: 'linear-gradient(360deg, rgba(6,49,85, 0.2), rgba(56,153,236, 0))',
              color: '#fff',
            }}
            style={{ width: 520 }}
          >
            <TabPane tab={<span className="category-name-wrapper">Database</span>} key="1">Content of tab 1</TabPane>
            <TabPane tab={<span className="category-name-wrapper">User Input</span>} key="2">Content of tab 2</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Text</span>} key="3">Content of tab 3</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Image</span>} key="4">
              {this.renderImagePanel()}
            </TabPane>
            <TabPane tab={<span className="category-name-wrapper">Button</span>} key="5">
              {this.renderButtonResPanel()}
            </TabPane>
            <TabPane tab={<span className="category-name-wrapper">Menu</span>} key="6">
              {this.renderMenuResPanel()}
            </TabPane>
            <TabPane tab={<span className="category-name-wrapper">Lists</span>} key="7">Content of tab 7</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Shape</span>} key="8">Content of tab 8</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Store</span>} key="9">Content of tab 8</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Contact</span>} key="10">Content of tab 7</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Blog</span>} key="11">Content of tab 8</TabPane>
            <TabPane tab={<span className="category-name-wrapper">Gallery</span>} key="12">Content of tab 8</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ResPanel;
