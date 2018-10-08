import React from 'react';
import * as _ from 'lodash';
import SiteReactClass from '@packages/core/siteRender/SiteReact';
import FullSiteData from '@packages/core/siteData/fullSiteData';
import SiteDataAPI from '@packages/core/core/SiteDataAPI';

const siteReact = React.createFactory(SiteReactClass);
const hookTypes = {
  PAGE_LOADED_FIRST_RENDER: 'page_loaded_first_render',
  PAGE_LOADED: 'page_loaded',
};

function renderSiteWithData(documentServices, siteData, viewerPrivateServices, props) {

  return siteReact(_.assign({}, props, {
    siteData,
    ps: viewerPrivateServices,
    ds: documentServices,
    rootId: 'masterPage',
    navigateMethod: navigateTo,
    updateHeadMethod,
    getSiteContainer,
  }));
}

function updateHeadMethod() {
}

function updatePageHeadTags() {}

function navigateTo() {}


function getSiteContainer() {
  return window;
}

function renderSite(documentServices, siteData, props) {
  return renderSiteWithData(documentServices, siteData, props);
}

function createSitePrivates(siteModel, props) {
  let renderOptions = {};
  if (siteModel.isMilaEditor) {
    renderOptions = _.assign(renderOptions, {
      componentViewMode: 'editor',
    });
  }

  if (siteModel.rendererModel.previewMode) {
    renderOptions = _.assign(renderOptions, {
      isSocialInteractionAllowed: false,
      isPlayingAllowed: false,
    });
  }

  siteModel.renderFlags = _.assign({}, siteModel.renderFlags, renderOptions);
  // 创建 dalCache 实例, 初始化 dalCache 可以拿到  site 快照数据
  const fullSiteData = new FullSiteData(siteModel);
  const siteDataWrapper = SiteDataAPI.createSiteDataAndDal(fullSiteData, props);
  const siteDataAPI = siteDataWrapper.siteDataAPI;

  const privateServices = {
    pointers: siteDataWrapper.pointers,
    dalCache: siteDataWrapper.dalCache,
    siteDataAPI,
  }

  return {
    fullSiteData,
    siteDataWrapper,
    ps: privateServices,
    siteDataAPI,
    siteData: siteDataAPI.siteData,
    siteModel,
  }
}

export default {
  createSitePrivates,
  renderSite,
}
