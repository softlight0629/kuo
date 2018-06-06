import { observable, autorun, action, reaction } from 'mobx';
import Site from '../../models/site/Site';

class WorkSpaceStore {

  @observable site = {};

  @observable.ref pageResource = {};

  @observable name = '';

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
          this.pageResource = this.site.getFirstPageResource();
          this.name = this.pageResource.name;

          this.store.sketchBoardStore.refPageResource(this.pageResource)

          // this.init();
        }
      }))
      .catch(e => {
        console.log(e);
      })
  }

  init() {
    this.store.sketchBoardStore.addAst({
      kind: 'Text',
      spec: {
        layout: {
          align: 'center',
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
        text: 'WHAT LIFE YOU LIKE',
      },
    });
    this.store.sketchBoardStore.addAst({
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
    this.store.sketchBoardStore.addAst({
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
    this.store.sketchBoardStore.addAst({
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
  }

  save() {
    if (!this.site.guid) {
      this.store.workSpaceUiStore.openSavePanel();
      return;
    }

    this.service.siteService.updateSiteToServer(this.site.serialize())
      .then(res => {
        console.log(res);
      });
  }

  createSite(option) {
    this.service.siteService.addSiteToServer(option)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
        }

        this.store.workSpaceUiStore.closeSavePanel();
      }));
  }

  addPageResource(option) {
    this.site.addPageResource(option);
  }

  @action activatePageResource(pageResource) {
    this.pageResource = pageResource;
    this.name = pageResource.name;
  }
}

export default WorkSpaceStore;
