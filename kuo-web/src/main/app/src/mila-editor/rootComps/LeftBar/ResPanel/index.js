import React, { Component } from 'react';
import { Tabs } from 'antd';
import { inject } from 'mobx-react';
import ScrollBar from '../../../../components/ScrollBar';
import compRegistrar from '@packages/compUtils/compRegistrar';
import skinRegistrar from '@packages/compUtils/skinRegistrar';
import * as _ from 'lodash';
import './index.less';
import buttonStyles from './styles/button';

const TabPane = Tabs.TabPane;

const ListItemWithImage = ({ title, onClick, desc, imageSrc}) => (
  <div className="list-item-with-image" onClick={() => onClick()}>
    <img className="image" src={imageSrc} />
    <div className="content">
      <div className="title ellipsis">{title}</div>
      <div className="desc ellipsis">{desc}</div>
    </div>
    <div className="indicator">
      <div>
        <svg width="27" height="27" viewBox="0 0 27 27" className="symbol symbol-arrow-with-states">
          <circle id="Combined-Shape" cx="13.5" cy="13.5" r="12.5" fill="#CBCBCB" className="st0"></circle>
          <path id="Path-2" fill="#3899EC" d="M15.331 13.5l-3.705 4.168.748.664 4.295-4.832-4.295-4.832-.748.664z" className="st1"></path>
        </svg>
      </div>
    </div>
  </div>
)

@inject('astThemeUiStore', 'sketchBoardStore', 'mediaLibraryUiStore', 'resGrpUiStore', 'workSpaceUiStore')
class ResPanel extends Component {

  handleClick(ast) {
    this.props.sketchBoardStore.appendAst(ast);
    this.props.resGrpUiStore.closeResPanel();
  }

  handle(kind, theme) {
    const ast = this.props.astThemeUiStore.getTheme(kind, theme);
    this.handleClick(ast);
  }

  appendCompToSkecthBoard(skinOfJson) {
    this.props.sketchBoardStore.appendComp(skinOfJson);
    this.props.resGrpUiStore.closeResPanel();
  }
  
  renderSkinWrapper(comp, buttonStyle) {
    const CompModelClazz = compRegistrar.getComp(`mila.components.model.${comp}`);
    const CompView = compRegistrar.getComp(`mila.components.view.${comp}`);
    const defaultOption = {
      kind: 'Button',
      store: {
        text: 'Button',
      },
    }
    const template = _.merge({}, defaultOption, buttonStyle.template);
    const astm = new CompModelClazz(template);

    return (
      <div 
        className="skin-wrapper"
        data-skin={`${buttonStyle.template.skin}`}
        onClick={() => this.appendCompToSkecthBoard(template)} style={{ top: buttonStyle.y, left: buttonStyle.x }}>
        <CompView astm={astm}></CompView>
      </div>
    )
  }

  renderButtonResPanel() {
    const { sketchBoardStore } = this.props;

    return (
      <div className="content-wrapper">
        <div className="sections">
          <div className="section-wrapper" style={{ height: '200px' }}>
            <div className="section-header">
              <div className="title-line">
                <div className="title">My Buttons</div>
              </div>
            </div>
            <div className="section-live-site-wrapper">
              <div className="section-preview-container">
                {
                  _.values(buttonStyles).map(buttonStyle => this.renderSkinWrapper('Button', buttonStyle ))
                }
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
                {/* {themesOfMenu.map(
                  themeOfMenu => <ThemeButton
                    ast={themeOfMenu}
                    loc={this.props.astThemeUiStore.locOfTheme(themeOfMenu.meta.theme)}
                    onClick={ast => this.handleClick(ast)}
                  />)} */}
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
                <div className="preset-item" style={{ left: 0, top: '220px', width: '324px', height: '62px' }} onClick={() => this.handle('Menu', 'horizontal_menu_comp4')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderGalleryResPanel() {
    const { sketchBoardStore } = this.props;
    const themesOfGallery = this.props.astThemeUiStore.themesOfKind('Gallery');

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
                {/* {themesOfGallery.map(
                  themeOfGallery => <ThemeButton
                    ast={themeOfGallery}
                    loc={this.props.astThemeUiStore.locOfTheme(themeOfGallery.meta.theme)}
                    onClick={ast => this.handleClick(ast)}
                  />)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  openMediaLibrary() {
    this.props.mediaLibraryUiStore.openWithPane('frees');
    this.props.resGrpUiStore.closeResPanel();
  }

  renderImageResPanel() {
    return (
      <ScrollBar>
        <div className="content-wrapper">
          <div className="sections">
            <div className="section-wrapper" style={{ height: '159px' }}>
              <div className="section-header">
                <div className="title-line">
                  <div className="title">My Uploads</div>
                </div>
              </div>
              <div className="items">
                <ListItemWithImage 
                  title="My Image Uploads" 
                  desc="Upload and add your own images to your site." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/imageUploader.v3.png" 
                  onClick={() => this.openMediaLibrary()}
                />
              </div>
            </div>
            <div className="section-wrapper">
              <div className="section-header">
                <div className="title-line">
                  <div className="title">Image Collections</div>
                </div>
              </div>
              <div className="items">
                <ListItemWithImage 
                  title="Free Wix Images" 
                  desc="Beautiful free images to use on your site." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/wixFreeImages.v3.png" 
                  onClick={() => this.openMediaLibrary()}
                />
                <ListItemWithImage 
                  title="Free Wix Illustrations" 
                  desc="Stunning illustrations designed for your site." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/freeWixIllustrations.v2.png" 
                  onClick={() => this.openMediaLibrary()}
                />
                <ListItemWithImage 
                  title="Stock Images" 
                  desc="High quality images to purchase and down." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/bigStockImages.v3.png" 
                  onClick={() => this.openMediaLibrary()}
                />
              </div>
            </div>
            <div className="section-wrapper">
              <div className="section-header">
                <div className="title-line">
                  <div className="title">Image Collections</div>
                </div>
              </div>
              <div className="items">
                <ListItemWithImage 
                  title="Free Wix Images" 
                  desc="Beautiful free images to use on your site." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/wixFreeImages.v3.png" 
                  onClick={() => this.openMediaLibrary()}
                />
                <ListItemWithImage 
                  title="Free Wix Illustrations" 
                  desc="Stunning illustrations designed for your site." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/freeWixIllustrations.v2.png" 
                  onClick={() => this.openMediaLibrary()}
                />
                <ListItemWithImage 
                  title="Stock Images" 
                  desc="High quality images to purchase and down." 
                  imageSrc="https://static.parastorage.com/services/santa-resources/resources/editor/addPanelData/sections/imageSection/bigStockImages.v3.png" 
                  onClick={() => this.openMediaLibrary()}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollBar>
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
              {/* {this.renderImageResPanel()} */}
            </TabPane>
            <TabPane tab={<span className="category-name-wrapper">Button</span>} key="5">
              {this.renderButtonResPanel()}
            </TabPane>
            <TabPane tab={<span className="category-name-wrapper">Menu</span>} key="6">
              {/* {this.renderMenuResPanel()} */}
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
