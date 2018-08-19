import { observable, autorun, action, reaction } from 'mobx';
import Site from '../../models/site/Site';

const siteData = { "id": null, "guid": "7ff1b5e9-aa01-47ff-b1b5-e9aa0107ffaf", "name": "demo", "domain": "demo.kuo.im", "plan": "vip", "status": "activate", "address": null, "owner": "nicolas", "createAt": 1532219765034, "updateAt": 1532219765034, "pageResList": [{ "id": 1, "name": "HOME", "template": "Home Page", "assets": null }] }

class WorkSpaceStore {

  @observable.ref site = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  @action fetch(guid) {
    this.site = new Site(this.store, siteData);
    this.store.sketchBoardStore.activatePage(this.site.getFirstPageResource());
    // this.store.sketchBoardStore.addComponent({
    //   kind: 'Photo',
    //   type: 'Component',
    //   componentType: 'mila.components.Photo',
    //   layout: {
    //     width: 679,
    //     height: 425,
    //     x: 100,
    //     y: 200,
    //   },
    //   spec: {
    //     fill: {
    //       opacity: 1,
    //       filterEffect: 'kennedy',
    //     },
    //     border: {
    //       width: 0,
    //     },
    //   },
    //   dataQuery: {
    //     src: 'https://static.wixstatic.com/media/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.jpg/v1/fill/w_720,h_404,al_c,lg_1,q_80/f31ce2_51215dc7492f455f81e5e5e443704ad7~mv2.webp',
    //   },
    //   propQuery: {
    //   },
    // });
    // this.store.sketchBoardStore.addComponent({
    //   kind: 'RichText',
    //   type: 'Component',
    //   componentType: 'mila.components.RichText',
    //   layout: {
    //     width: 679,
    //     height: 425,
    //     x: 100,
    //     y: 200,
    //   },
    //   spec: {
    //     theme: 'h2',
    //   },
    //   dataQuery: {
    //     text: 'Heading',
    //   },
    // });
    this.store.sketchBoardStore.addComponent({
      kind: 'Button',
      type: 'Component',
      componentType: 'mila.components.Button',
      skin: 'mila.components.skins.Button.ButtonBasicSkin',
      layout: {
        width: 151,
        height: 40,
        x: 520,
        y: 200,
      },
      spec: {
        layout: {
          align: 'center',
          margin: 0,
        },
        animation: {
        },
        fill: {
          color: '#323232',
          opacity: 100,
        },
        border: {
          color: '#000000',
          width: 0,
          opacity: 100,
        },
        font: {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff',
        },
        corner: {
          leftTop: '0px',
          rightTop: '0px',
          leftBottom: '0px',
          rightBottom: '0px',
        },
      },
      dataQuery: {
        text: 'this is button',
      },
      propQuery: {
      },
    });
    // this.store.sketchBoardStore.addComponent({
    //   kind: 'Gallery',
    //   type: 'Component',
    //   componentType: 'mila.components.Gallery',
    //   layout: {
    //     width: 423,
    //     height: 1248,
    //     x: 200,
    //     y: 200,
    //   },
    //   spec: {
    //   },
    //   propQuery: {
    //   },
    //   dataQuery: {
    //     galleryMedias: [
    //       {
    //         title: 'KKKK',
    //         mediaType: 'picture',
    //         width: 96,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_800,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 180,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 180,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_b76bb0b2ef974b3eab1d101dde877fb3~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_b76bb0b2ef974b3eab1d101dde877fb3~mv2_d_3000_2000_s_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 180,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 180,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_45eb52a582ec45c385f8168b6229e8a0~mv2_d_3000_1946_s_2.jpg/v1/fill/w_1000,h_649,al_c,q_90,usm_0.66_1.00_0.01/002cd4_45eb52a582ec45c385f8168b6229e8a0~mv2_d_3000_1946_s_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 120,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_d4c8265530534ff2aef9f9229ceec6ee~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_d4c8265530534ff2aef9f9229ceec6ee~mv2_d_3000_3000_s_4_2.webp',
    //       },
    //       {
    //         mediaType: 'picture',
    //         width: 96,
    //         height: 120,
    //         cover: 'https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_800,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp',
    //       },
    //     ],
    //   }
    // });

    // this.store.sketchBoardStore.addComponent({
    //   kind: 'StripColumnsContainer',
    //   type: 'Container',
    //   componentType: 'mila.components.StripColumnsContainer',
    //   layout: {
    //     width: 980,
    //     height: 650,
    //     x: 100,
    //     y: 200,
    //   },
    //   spec: {
    //   },
    //   components: [
    //     {
    //       kind: 'Column',
    //       type: 'Container',
    //       componentType: 'mila.components.Column',
    //       layout: {
		// 				width: 490,
		// 				height: 650,
		// 				x: -115,
		// 				y: 0,
		// 				scale: 1.0,
		// 				rotationInDegrees: 0.0,
		// 				fixedPosition: false
    //       },
    //       spec: {},
    //       components: [
    //         {
    //           kind: 'RichText',
    //           type: 'Component',
    //           componentType: 'mila.components.RichText',
    //           layout: {
    //             width: 679,
    //             height: 425,
    //             x: 100,
    //             y: 200,
    //           },
    //           spec: {
    //             theme: 'h2',
    //           },
    //           dataQuery: {
    //             text: 'Heading',
    //           },
    //         },
    //       ],
    //       propQuery: {},
    //       dataQuery: {},
    //     },
    //     {
    //       kind: 'Column',
    //       type: 'Container',
    //       componentType: 'mila.components.Column',
    //       layout: {
		// 				width: 490,
		// 				height: 650,
		// 				x: 605,
		// 				y: 0,
		// 				scale: 1.0,
		// 				rotationInDegrees: 0.0,
		// 				fixedPosition: false
    //       },
    //       spec: {},
    //       components: [],
    //       propQuery: {},
    //       dataQuery: {},
    //     },
    //   ],
    //   dataQuery: {
    //   },
    //   propQuery: {
    //   },
    // });
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
}

export default WorkSpaceStore;
