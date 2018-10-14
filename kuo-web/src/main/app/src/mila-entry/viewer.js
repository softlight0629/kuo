import getQueryUtils from '@app/mila-main-r/common/getQueryUtils';
import mobile from '@app/mila-main-r/viewer/mobile';
import storageUtil from '@app/mila-main-r/common/storageUtil';
import _convertSiteModel from '@app/mila-main-r/viewer/convertSiteModel';
import _render from '@app/mila-main-r/viewer/render';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { AppContainer } from 'react-hot-loader';
import '../packages';
import { stores } from '../mila-editor/mEditor';
import ContextProvider from '../provider/contextProvider';
import registerServiceWorker from '../registerServiceWorker';
import create from '@packages/editor/editorAPI';
import RuntimeCtx from '@packages/runtime/runtimeCtx';

window.siteAsJson = {
  masterPage: {
    structure: {
      id:'masterPage',
      type: 'Document',
      componentType: 'mila.components.core.MasterPage',
      children: [
        {
          type: 'Container',
          id: 'SITE_HEADER',
          components: [
          ],
          skin: 'mila.viewer.skins.screenwidthcontainer.DefaultScreen',
          layout: {
            width: 980,
            height: 356,
            x: 0,
            y: 0,
            scale: 1.0,
            rotationInDegrees: 0.0,
            fixedPosition: false,
          },
          componentType: 'mila.components.core.HeaderContainer',
        },
        {
          type: 'Container',
          id: 'PAGES_CONTAINER',
          components: [
          ],
          skin: 'mila.viewer.skins.screentwidthcontainer.BlankScreen',
          layout: {
            width: 980,
            height: 856,
            x: 0,
            y: 356,
            scale: 1.0,
            rotationInDegrees: 0.0,
            fixedPosition: false,
          },
          componentType: 'mila.components.core.PagesContainer',
        },
        {
          type: 'Container',
          id: 'SITE_FOOTER',
          components: [],
          skin: 'mila.viewer.skins.screenwidthcontainer.TransparentScreen',
          layout: {
            width: 980,
            height: 231,
            x: 0,
            y: 1212,
            scale: 1.0,
            rotationInDegrees: 0.0,
            fixedPosition: false,
          },
          componentType: 'mila.components.core.FooterContainer',
        },
      ],
      layout: {
        y: 0,
        rotationInDegrees: 0.0,
        anchors: [
          {
            distance: 0,
            type: 'BOTTOM_TOP',
            locked: false,
            targetComponent: 'PAGES_CONTAINER',
          }
        ],
      }
    },
    data: {
      document_data: {},
      design_data: {},
      component_properties: {},
    },
  },
  pages: [
    {
      structure: {
        type: 'Page',
        id: 'domkj',
        components: [
          {
            type: 'Container',
            id: 'comp-jl0et3m7',
            components: [
              {
                type: 'Container',
                id: 'comp-jl0et3nf',
                components: [],
                layout: {
                  width: 490,
                  height: 650,
                  x: -115,
                  y: 0,
                  scale: 1.0,
                  rotationInDegrees: 0.0,
                  fixedPosition: false,
                },
                componentType: 'mila.components.view.Column',
              },
              {
                type: 'Container',
                id: 'comp-jl0et3nz',
                components: [],
                layout: {
                  width: 490,
                  height: 650,
                  x: 605,
                  y: 0,
                  scale: 1.0,
                  rotationInDegrees: 0.0,
                  fixedPosition: false,
                },
                componentType: 'mila.components.view.Column',
              },
            ],
            layout: {
              width: 980,
              height: 650,
              x: 0,
              y: 0,
              scale: 1.0,
              rotationInDegrees: 0.0,
              fixedPosition: false,
            },
            componentType: 'mila.components.view.StripColumnsContainer',
          }
        ],
        skin: 'mila.skins.core.InlineSkin',
        layout: {
          width: 1440,
          height: 856,
          x: 0,
          y: 0,
          scale: 1.0,
          rotationInDegrees: 0.0,
          fixedPosition: false,
        },
        componentType: 'mila.components.core.Page',
      },
      data: {
        document_data: {},
        design_data: {},
        component_properties: {},
      },
      title: 'HOME',
      pageUriSEO: 'home',
    },
  ],
}

window.rendererModel = {
  metaSiteId: 'd49c34e2-8e52-400a-a52a-f01a61df3022',
  siteInfo: {
    siteId: 'b60524e0-8896-413a-bf6a-88f9fe6aa491',
  },
  premiumFeatures: [],
  geo: 'CHN',
  locale: 'zh-CN',
  previewMode: true,
  userId: 'f31ce25f-4a58-4d9f-85f0-671eea442110',
  siteMetaData: {
    preload: {},
    contactInfo: {}
  },
}

const { rendererModel, publicModel, serviceTopology = {} } = window;
window.persistent = storageUtil(window);
const queryUtil = getQueryUtils(window);
window.queryUtil = queryUtil;

const render = _render(window);
const isServerSide = window.isStreaming
const convertSiteModel = _convertSiteModel(window, queryUtil);

window.siteModel = convertSiteModel(rendererModel, publicModel);

const { siteModel } = window;
const { premiumFeatures } = rendererModel;
const isPremium = !!premiumFeatures && premiumFeatures.indexOf('HasDomain') !== -1

// const pageInfo = publicModel && getPageInfo(window, publicModel.pageList, isPremium);
window.isPreview = queryUtil.isParameterTrue.bind(null, 'isEdited');
const isExternalPreview = rendererModel.previewMode
// const mobileView = mobile.isMobileView(window, siteModel, queryUtil)
const isPreview = false;
const mobileView = false;

useStrict(true);

const editorAPI = create(stores);
stores.editorAPI = editorAPI;

const runtimeCtx = RuntimeCtx.create(editorAPI);
stores.runtimeCtx = runtimeCtx;

ReactDOM.render(
  <AppContainer>
    <Provider {...stores}>
      <ContextProvider editorAPI={editorAPI}>
        {
          render(
            isServerSide,
            isPreview,
            isExternalPreview,
            queryUtil,
            siteModel,
            mobileView,
          )
        }
      </ContextProvider>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
registerServiceWorker();
