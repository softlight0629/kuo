import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MasterPage from './MasterPage';

import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import { SketchPicker } from 'react-color';
import AssetBox from '../AssetBox';

@withRouter
@inject('workSpaceStore', 'sketchBoardStore')
@observer
class ArtBoard extends Component {

  componentDidMount() {

  }

  render() {
    const { pageResource } = this.props.sketchBoardStore;

    return (
      <div className="artboard-container">
        <div className="SITE_CONTAINER">
          <div className="SITE_BACKGROUND"></div>
          <div className="SITE_ROOT">
            <div className="SITE_MATER_PAGE">
              <header className="SITE_HEADER"></header>
              <div className="PAGES_CONTAINER">
                <div className="PAGES_CONTAIER_SCREEN_BG"></div>
                <div className="PAGES_CONTAINER_CONTENT">
                  <div className="SITE_PAGES">
                    <div id="mainPage">
                      {/* <div className="mainPageBg">{ pageResource.template }</div> */}
                      <div className="mainPageBgContent">
                      {
                        pageResource && pageResource.astms.map((astm, i) => <AssetBox key={i} astm={astm} />)
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="SITE_FOOTER"></footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtBoard;
