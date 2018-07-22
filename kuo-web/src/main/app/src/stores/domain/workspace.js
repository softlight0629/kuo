import { observable, autorun, action, reaction } from 'mobx';
import Site from '../../models/domain/site/entity/Site';

class WorkSpaceStore {

  @observable.ref site = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
          this.store.sketchBoardStore.activatePage(this.site.getFirstPageResource());
          this.store.sketchBoardStore.appendAst({
            kind: 'Input',
            meta: {},
            spec: {
              rect: {
                width: 304,
                height: 43,
                x: 200,
                y: 200,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
            store: {
              placeholderText: 'this is placehoder',
              initialText: 'this is initial',
            },
            opts: {
              type: 'Password',
              required: true,
              readOnly: false,
              showTextOnLoad: 'PlaceholderText',
              enableLimitLength: true,
              enableMaximumValue: false,
              enableMinimumValue: false,
              enablePatternValidation: false,
            },
          });
          this.store.sketchBoardStore.appendAst({
            kind: 'Select',
            meta: {},
            spec: {
              rect: {
                width: 304,
                height: 43,
                x: 300,
                y: 400,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {
            },
            store: {
              items: [
                {
                  label: 'Prince',
                  value: 'Prince',
                },
                {
                  label: 'Kanye',
                  value: 'Kanye',
                },
              ],
            },
          });
          this.store.sketchBoardStore.appendAst({
            kind: 'Table',
            meta: {},
            spec: {
              rect: {
                width: 809,
                height: 180,
                x: 100,
                y: 100,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
          });
          // this.store.sketchBoardStore.appendAst({
          //   kind: 'Checkbox',
          //   meta: {},
          //   spec: {
          //     rect: {
          //       width: 304,
          //       height: 35,
          //       x: 350,
          //       y: 400,
          //     },
          //     fill: {
          //       opacity: 0,
          //     },
          //     border: {
          //       width: 0,
          //     },
          //   },
          //   state: {},
          // });
          this.store.sketchBoardStore.appendAst({
            kind: 'Pagination',
            meta: {},
            spec: {
              rect: {
                width: 324,
                height: 40,
                x: 50,
                y: 400,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
          });
          this.store.sketchBoardStore.appendAst({
            kind: 'Switch',
            meta: {},
            spec: {
              rect: {
                width: 48,
                height: 24,
                x: 150,
                y: 50,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
          });
          this.store.sketchBoardStore.appendAst({
            kind: 'TextArea',
            meta: {},
            spec: {
              rect: {
                width: 304,
                height: 70,
                x: 50,
                y: 400,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
          });
          this.store.sketchBoardStore.appendAst({
            kind: 'Radio',
            meta: {},
            spec: {
              rect: {
                width: 304,
                height: 90,
                x: 150,
                y: 400,
              },
              fill: {
                opacity: 0,
              },
              border: {
                width: 0,
              },
            },
            state: {},
            store: {
              radioBtns: [
                {
                  label: 'Maybe, we\'ll see',
                  value: 'Radio Button',
                },
                {
                  label: 'Yep, I\'ll come',
                  value: 'Radio Button',
                },
              ],
            },
          });
          // this.store.sketchBoardStore.appendAst({
          //   kind: 'Gallery',
          //   meta: {
          //   },
          //   spec: {
          //     rect: {
          //       width: 568,
          //       height: 539,
          //       x: 200,
          //       y: 200,
          //     }
          //   },
          //   state: {
          //   },
          //   store: {
          //     medias: [
          //       {
          //         mediaType: 'picture',
          //         width: 96,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_800,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 180,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 180,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_b76bb0b2ef974b3eab1d101dde877fb3~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_b76bb0b2ef974b3eab1d101dde877fb3~mv2_d_3000_2000_s_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 180,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 180,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_45eb52a582ec45c385f8168b6229e8a0~mv2_d_3000_1946_s_2.jpg/v1/fill/w_1000,h_649,al_c,q_90,usm_0.66_1.00_0.01/002cd4_45eb52a582ec45c385f8168b6229e8a0~mv2_d_3000_1946_s_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 120,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_d4c8265530534ff2aef9f9229ceec6ee~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_d4c8265530534ff2aef9f9229ceec6ee~mv2_d_3000_3000_s_4_2.webp',
          //       },
          //       {
          //         mediaType: 'picture',
          //         width: 96,
          //         height: 120,
          //         fileUrl: 'https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_800,h_1000,al_c,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp',
          //       },
          //     ],
          //   }
          // });
        }
      }))
      .catch(e => {
        console.log(e);
      })
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
