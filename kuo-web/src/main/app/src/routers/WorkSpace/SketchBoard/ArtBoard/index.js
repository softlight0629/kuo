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
    this.props.sketchBoardStore.addAst({
      astm: 'Text',
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 660,
          height: 80,
          x: 20,
          y: 100,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#ffffff',
          opacity: 100,
        },
        border: {
          color: '#fdf5fc',
          width: 1,
          opacity: 82,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 12,
          color: '#000',
        },
        corner: {
          leftTop: 0,
          rightTop: 0,
          leftBottom: 0,
          rightBottom: 0,
        },
        theme: 'h3',
      },
      store: {
        text: 'DESIGN22222',
      },
    });

    this.props.sketchBoardStore.addAst({
      astm: 'Menu',
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 660,
          height: 50,
          x: 20,
          y: 100,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#fdf5fc',
          opacity: 82,
        },
        border: {
          color: '#fdf5fc',
          width: 1,
          opacity: 82,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 12,
          color: '#000',
        },
        corner: {
          leftTop: 0,
          rightTop: 0,
          leftBottom: 0,
          rightBottom: 0,
        },
      },
      state: {
        hover: {
          fill: {
            color: '#d3d3d3',
          },
        },
        clicked: {
          fill: {
            color: '#9c9c9c',
          },
        },
      },
      store: {
        menuItems: [
          {
            text: 'HOME',
          },
          {
            text: 'BLOG',
          },
          {
            text: 'ABOUT',
          }
        ],
      }
    });

    this.props.sketchBoardStore.addAst({
      astm: 'Button',
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 260,
          height: 50,
          x: 20,
          y: 100,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#fdf5fc',
          opacity: 82,
        },
        border: {
          color: '#fdf5fc',
          width: 1,
          opacity: 82,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 12,
          color: '#000',
        },
        corner: {
          leftTop: 0,
          rightTop: 0,
          leftBottom: 0,
          rightBottom: 0,
        },
      },
      store: {
        text: 'Button',
      }
    });
  }

  render() {
    const { pageResource = {} } = this.props.workSpaceStore;
    const { astms = [] } = this.props.sketchBoardStore;

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
                      <div className="mainPageBg">{ pageResource.template }</div>
                      <div className="mainPageBgContent">
                      {
                        astms.map((astm, i) => <AssetBox key={i} astm={astm} />)
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
