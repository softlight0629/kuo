define(['lodash'], function (_) {
  'use strict';

  const ROUTER_PREFIX_TYPE = 'router';
  const DYNAMIC_PAGE_PREFIX_TYPE = 'dynamicPages';
  const TEMPLATE_PAGE_TYPE = 'template';
  const STATIC_PAGE_TYPE = 'static';
  const APP_PAGE_TYPE = 'app';

  function getApps(clientSpecMap) {
      return _.map(getClientSpecMapAppEntries(clientSpecMap), function (val) {
          return {
              name: val.appDefinitionName,
              applicationId: val.appDefinitionId
          };
      });
  }

  function getAppPrefixes(pageStructures) {
      const appPages = _.filter(pageStructures, 'applicationId');
      return _.map(appPages, function (appPage) {
          return {
              name: appPage.name,
              type: APP_PAGE_TYPE,
              prefix: appPage.url,
              applicationId: appPage.applicationId
          };
      });
  }

  function getRouterPrefixes(routers) {
      const pagesPrefixesMap = getPagesPrefixesMap(routers);
      return getPrefixStructures(pagesPrefixesMap);
  }

  function getLightboxes(pageList, getDataByQuery) {
      const allPagesData = getPagesData(pageList, getDataByQuery);
      const pagesData = _.filter(allPagesData, {isPopup: true});
      return _.map(pagesData, function (page) {
          return {
              name: page.title,
              id: page.id
          };
      });
  }

  function getPages(pagesDataItems, isPopup, mainPageId, routers, clientSpecMap) {
      const nonPopupPagesDataItems = _.filter(pagesDataItems, function (pageData) {
          return !isPopup(pageData.id);
      });
      const pagesPrefixesMap = getPagesPrefixesMap(routers, clientSpecMap);
      const pages = _.map(nonPopupPagesDataItems, function (page) {
          return getPageStructure(page, mainPageId, pagesPrefixesMap[page.id], clientSpecMap);
      });
      return _.compact(pages);
  }

  function getPagesData(pageList, getDataByQuery) {
      const pageIds = _.map(pageList.pages, 'pageId');
      return _.map(pageIds, function (pageId) {
          return getDataByQuery(pageId);
      });
  }

  function getPageStructure(page, mainPageId, prefix, clientSpecMap) { // eslint-disable-line complexity
      const pageUriSEO = page.pageUriSEO;
      const applicationId = page.tpaApplicationId || page.appInnerID;

      const data = {
          name: page.title,
          id: page.id,
          type: STATIC_PAGE_TYPE
      };

      if (pageUriSEO && !_.startsWith(pageUriSEO, 'blank')) {
          data.url = `/${page.pageUriSEO}`;
      }

      if (applicationId) {
          data.type = TEMPLATE_PAGE_TYPE;
          const appData = clientSpecMap[applicationId];
          data.applicationId = _.get(appData, 'appDefinitionId');
          if (page.tpaApplicationId && !hasMainSection(appData)) {
              return null;
          }
          data.tpaPageId = page.tpaPageId;
      }

      if (prefix) {
          data.type = TEMPLATE_PAGE_TYPE;
          data.prefix = prefix.value;
      }

      if (data.id === mainPageId) {
          data.isMainPage = true;
      }

      return data;
  }

  function getPagesPrefixesMap(routers) {
      const routersPrefixes = _.reduce(routers.configMap, function (res, val, key) {
          const pageIds = _.values(val.pages);
          _.forEach(pageIds, function (page) {
              res[page] = {
                  value: val.prefix,
                  id: key,
                  type: getPrefixType(val)
              };
          });
          return res;
      }, {});
      return !routers ? {} : routersPrefixes;
  }

  function getPrefixStructures(pagesPrefixesMap) {
      return _.map(pagesPrefixesMap, function (prefix) {
          return {
              name: prefix.value,
              type: prefix.type,
              id: prefix.id,
              prefix: `/${prefix.value}`
          };
      });
  }

  function getPrefixType(router) {
      return router.appDefinitionId === 'wix-code' ? ROUTER_PREFIX_TYPE : DYNAMIC_PAGE_PREFIX_TYPE;
  }

  function getAppSections(appData) {
      let widgets = appData && appData.widgets;
      widgets = _.filter(widgets, function (widget) {
          return !_.isNil(widget.appPage);
      });
      return _.filter(widgets, isWidgetPublished);
  }

  function isWidgetPublished(widget) {
      const isPublishedInNewAndOldEditor = widget.published;
      const isPublishedOnlyInNewEditor = widget.santaEditorPublished;
      return isPublishedInNewAndOldEditor || isPublishedOnlyInNewEditor;
  }

  function hasMainSection(appData) {
      const sections = getAppSections(appData);
      return _.some(sections, function (app) {
          return !app.appPage.hidden;
      });
  }

  function getClientSpecMapAppEntries(clientSpecMap) {
      return _.filter(clientSpecMap, function (entry) {
          return entry.type === 'public' || entry.type === 'wixapps';
      });
  }

  function getPageList(publicModel, pagesData) {
      let pageList;
      if (publicModel) {
          pageList = _.get(publicModel, ['pageList']);
      } else {
          pageList = {
              pages: _.reject(_.map(pagesData, function (pageData, id) {
                  return {pageId: id};
              }), {pageId: 'masterPage'})
          };
      }
      return pageList;
  }

  function getMainPageId(publicModel, masterPageData) {
      return _.get(publicModel, ['pageList', 'mainPageId']) ||
          _.get(masterPageData, ['mainPage', 'id']) ||
          _.get(masterPageData, 'mainPageId') ||
          'mainPage';
  }

  return {
      getPageList,
      getPages,
      getApps,
      getRouterPrefixes,
      getAppPrefixes,
      getLightboxes,
      getMainPageId,
      clientSpecMap: {
          hasMainSection
      }
  };
});
