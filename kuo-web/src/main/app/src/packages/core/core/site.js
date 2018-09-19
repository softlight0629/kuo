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

function renderSiteWithData(siteData, props) {

  return siteReact(_.assign({}, props, {
    siteData,
    rootId: 'masterPage',
  }));
}

function getSiteContainer() {
  return window;
}

function renderSite(siteData, props) {
  return renderSiteWithData(siteData, props);
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
  const fullSiteData = new FullSiteData(siteModel);
  const siteDataWrapper = SiteDataAPI.createSiteDataAndDal(fullSiteData, props);
  const siteDataAPI = siteDataWrapper.siteDataAPI;

  const viewerPrivateServices = {
    pointers: siteDataWrapper.pointers,
    dal: siteDataWrapper.dal,
    siteDataAPI,
  }

  return {
    fullSiteData,
    siteDataWrapper,
    viewerPrivateServices,
    siteDataAPI,
    siteModel,
  }
}

export default {
  createSitePrivates,
  renderSite,
}
