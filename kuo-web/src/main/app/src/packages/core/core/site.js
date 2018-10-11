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

function renderSiteWithData(documentServices, siteDataWrapper) {

  // site react 通过 siteData 来做整站的渲染
  return siteReact(_.assign({}, {
    // 站点数据快照API
    siteData: siteDataWrapper.siteData,  // 底层全部共享 dal 层. dal 层描述了 整个 site 的数据接口, 数据流动
    // 远程数据加载操作接口
    siteDataAPI: siteDataWrapper.siteDataAPI,
    // Site Render Private 操作
    ps: siteDataWrapper.ps,
    // 给 editor 提供的 API 接口
    // ds: documentServices,
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
