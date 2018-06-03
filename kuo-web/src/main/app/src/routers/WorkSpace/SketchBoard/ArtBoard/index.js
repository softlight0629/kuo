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
      kind: 'Text',
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 660,
          height: 80,
          x: 20,
          y: 500,
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
          leftTop: '0',
          rightTop: '0',
          leftBottom: '0',
          rightBottom: '0',
        },
        theme: 'h3',
      },
      store: {
        text: 'DESIGN22222',
      },
    });

    this.props.sketchBoardStore.addAst({
      kind: 'Menu',
      spec: {
        layout: {
          align: 'center',
          margin: 0,
        },
        rect: {
          width: 719,
          height: 50,
          x: 20,
          y: 100,
        },
        animation: {
        },
        fill: {
          color: '#ffffff',
          opacity: 100,
        },
        border: {
          color: '#383838',
          width: 1,
          opacity: 100,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 12,
          color: '#000',
        },
        corner: {
          leftTop: '80',
          rightTop: '80',
          leftBottom: '80',
          rightBottom: '80',
        },
        gap: 5,
      },
      state: {
        hover: {
          fill: {
            color: '#ffde5f',
            opacity: 100,
          },
          border: {
            width: 1,
            color: 'ffde5f',
            opacity: 100,
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

    // this.props.sketchBoardStore.addAst({
    //   kind: 'Menu',
    //   spec: {
    //     layout: {
    //       align: 'center',
    //       margin: 0,
    //     },
    //     rect: {
    //       width: 719,
    //       height: 50,
    //       x: 20,
    //       y: 200,
    //     },
    //     animation: {
    //     },
    //     fill: {
    //       color: 'transparent',
    //       opacity: 100,
    //     },
    //     border: {
    //       color: '#383838',
    //       width: 0,
    //       opacity: 100,
    //     },
    //     shadow: {
    //       angle: 0,
    //       size: 0,
    //       blur: 0,
    //       distance: 4,
    //       color: '#000000',
    //     },
    //     font: {
    //       fontFamily: 'Arial',
    //       fontSize: 12,
    //       color: '#000',
    //       bold: true,
    //       italic: true,
    //       fontSize: 16,
    //     },
    //     corner: {
    //       leftTop: 0,
    //       rightTop: 0,
    //       leftBottom: 0,
    //       rightBottom: 0,
    //     },
    //     gap: 0,
    //   },
    //   state: {
    //     hover: {
    //       fill: {
    //         color: '#ffd9e4',
    //         opacity: 100,
    //       },
    //       border: {
    //         width: 1,
    //         color: 'ffde5f',
    //         opacity: 100,
    //       },
    //       font: {
    //         color: '#E33292',
    //       },
    //     },
    //     clicked: {
    //       fill: {
    //         color: '#9c9c9c',
    //       },
    //     },
    //   },
    //   store: {
    //     menuItems: [
    //       {
    //         text: 'HOME',
    //       },
    //       {
    //         text: 'BLOG',
    //       },
    //       {
    //         text: 'ABOUT',
    //       }
    //     ],
    //   }
    // });

    // this.props.sketchBoardStore.addAst({
    //   kind: 'Menu',
    //   spec: {
    //     layout: {
    //       align: 'center',
    //       margin: 0,
    //     },
    //     rect: {
    //       width: 719,
    //       height: 50,
    //       x: 20,
    //       y: 300,
    //     },
    //     animation: {
    //     },
    //     fill: {
    //       color: 'transparent',
    //       opacity: 100,
    //       separator: '#db8de2',
    //     },
    //     border: {
    //       color: '#383838',
    //       width: 0,
    //       opacity: 100,
    //     },
    //     shadow: {
    //       angle: 0,
    //       size: 0,
    //       blur: 0,
    //       distance: 0,
    //       color: '#000000',
    //     },
    //     font: {
    //       fontFamily: 'Arial',
    //       fontSize: 12,
    //       color: '#b45ad3',
    //       bold: true,
    //       italic: true,
    //       fontSize: 16,
    //     },
    //     corner: {
    //       leftTop: 0,
    //       rightTop: 0,
    //       leftBottom: 0,
    //       rightBottom: 0,
    //     },
    //     gap: 0,
    //   },
    //   state: {
    //     hover: {
    //       fill: {
    //         color: 'transparent',
    //         opacity: 100,
    //       },
    //       border: {
    //         width: 1,
    //         color: 'ffde5f',
    //         opacity: 100,
    //       },
    //       font: {
    //         color: '#532563',
    //       },
    //     },
    //     clicked: {
    //       fill: {
    //         color: '#9c9c9c',
    //       },
    //     },
    //   },
    //   store: {
    //     menuItems: [
    //       {
    //         text: 'HOME',
    //       },
    //       {
    //         text: 'BLOG',
    //       },
    //       {
    //         text: 'ABOUT',
    //       }
    //     ],
    //   }
    // });

    this.props.sketchBoardStore.addAst({
      kind: 'Button',
      meta: {
        skin: 'skin_button_02',
      },
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 260,
          height: 50,
          x: 20,
          y: 300,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#000000',
          opacity: 100,
        },
        border: {
          color: '#000000',
          width: 1,
          opacity: 100,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff',
        },
        corner: {
          leftTop: '0',
          rightTop: '0',
          leftBottom: '0',
          rightBottom: '0',
        },
      },
      store: {
        text: 'All Posts',
      }
    });

    this.props.sketchBoardStore.addAst({
      kind: 'Image',
      spec: {
        layout: {
          align: 'left',
          margin: 0,
        },
        rect: {
          width: 247,
          height: 244,
          x: 20,
          y: 300,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#000000',
          opacity: 100,
        },
        border: {
          color: '#c9c9c9',
          width: 6,
          opacity: 100,
        },
        shadow: {
          angle: 0,
          size: 0,
          blur: 14,
          distance: 0,
          color: '#000000',
          opacity: 62,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff',
        },
        corner: {
          leftTop: '50%',
          rightTop: '50%',
          leftBottom: '50%',
          rightBottom: '50%',
        },
      },
      store: {
        src: 'https://static.wixstatic.com/media/5a6a58201a2e97b6b7c39b880738af97.jpg/v1/fill/w_470,h_464,al_c,q_80,usm_0.66_1.00_0.01/5a6a58201a2e97b6b7c39b880738af97.webp',

        alt: 'thisisalt',
      }
    });

    this.props.sketchBoardStore.addAst({
      kind: 'Image',
      spec: {
        layout: {
          align: 'center',
          margin: 5,
        },
        rect: {
          width: 237,
          height: 234,
          x: 520,
          y: 300,
        },
        animation: {
          // animate: 'rubberBand',
        },
        fill: {
          color: '#000000',
          opacity: 100,
        },
        border: {
          color: '#000000',
          width: 2,
          opacity: 100,
        },
        shadow: {
          angle: 0,
          size: 0,
          blur: 14,
          distance: 0,
          color: '#000000',
          opacity: 62,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff',
        },
        corner: {
          leftTop: '0',
          rightTop: '0',
          leftBottom: '0',
          rightBottom: '0',
        },
      },
      store: {
        src: 'https://static.wixstatic.com/media/5a6a58201a2e97b6b7c39b880738af97.jpg/v1/fill/w_470,h_464,al_c,q_80,usm_0.66_1.00_0.01/5a6a58201a2e97b6b7c39b880738af97.webp',

        alt: 'thisisalt',
      }
    });

    // this.props.sketchBoardStore.addAst({
    //   kind: 'Button',
    //   spec: {
    //     layout: {
    //       align: 'left',
    //       margin: 0,
    //     },
    //     rect: {
    //       width: 221,
    //       height: 50,
    //       x: 20,
    //       y: 200,
    //     },
    //     animation: {
    //       // animate: 'rubberBand',
    //     },
    //     fill: {
    //       color: '#566fb8',
    //       opacity: 100,
    //     },
    //     border: {
    //       color: '#2b689c',
    //       width: 1,
    //       opacity: 100,
    //     },
    //     font: {
    //       fontFamily: 'Arial',
    //       fontSize: 14,
    //       color: '#ffffff',
    //     },
    //     shadow: {
    //       angle: 0,
    //       distance: 3,
    //       blur: 0,
    //       size: 0,
    //       color: '#566fb8',
    //       opacity: 60,
    //     },
    //     corner: {
    //       leftTop: 20,
    //       rightTop: 20,
    //       leftBottom: 20,
    //       rightBottom: 20,
    //     },
    //   },
    //   store: {
    //     text: 'All Posts',
    //   }
    // });

    // this.props.sketchBoardStore.addAst({
    //   kind: 'Button',
    //   spec: {
    //     layout: {
    //       align: 'left',
    //       margin: 0,
    //     },
    //     rect: {
    //       width: 221,
    //       height: 50,
    //       x: 20,
    //       y: 300,
    //     },
    //     animation: {
    //       // animate: 'rubberBand',
    //     },
    //     fill: {
    //       color: 'transparent',
    //       opacity: 100,
    //     },
    //     border: {
    //       color: '#2b689c',
    //       width: 0,
    //       opacity: 100,
    //     },
    //     font: {
    //       fontFamily: 'Arial',
    //       fontSize: 16,
    //       color: '#566fb8',
    //       bold: true,
    //     },
    //     corner: {
    //       leftTop: 20,
    //       rightTop: 20,
    //       leftBottom: 20,
    //       rightBottom: 20,
    //     },
    //   },
    //   store: {
    //     text: 'All Posts',
    //   }
    // });
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
