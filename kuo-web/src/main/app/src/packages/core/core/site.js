import React from 'react';
import * as _ from 'lodash';
import SiteReactClass from '@packages/core/siteRender/SiteReact';
import SiteData from '@packages/core/siteData/siteData';
import SiteDataAPI from '@packages/core/core/SiteDataAPI';

const siteReact = React.createFactory(SiteReactClass);
const hookTypes = {
  PAGE_LOADED_FIRST_RENDER: 'page_loaded_first_render',
  PAGE_LOADED: 'page_loaded',
};

function renderSiteWithData(siteData, props) {

  return siteReact(_.assign({}, props, {
    siteData,
    rootId: 'masterPage',
    // navigateMethod: navigateTo,
    // updateHeadMethod,
    // getSiteContainer,
  }));
}

function getSiteContainer() {
  return window;
}

function renderSite(siteData, props) {
  return renderSiteWithData(siteData, props);
}

function createSiteService(siteModel, props) {
  let renderOptions = {};
  if (siteModel.isMilaEditor) {
    renderOptions = _.assign(renderOptions, {
      componentViewMode: 'editor',
    });
  }

  if (siteModel.rendererModel.previewMode) {
    renderOptions = _.assign(renderOptions, {
      isPlayingAllowed: false,
    });
  }

  siteModel.renderFlags = _.assign({}, siteModel.renderFlags, renderOptions);
  const siteData = new SiteData(siteModel);
  const siteDataWrapper = SiteDataAPI.create(siteData, props);
  const siteDataAPI = siteDataWrapper.siteData;

  return {
    siteData,
    siteDataWrapper,
    siteDataAPI,
    siteModel,
  }
}

export default {
  createSiteService,
  renderSite,
}
