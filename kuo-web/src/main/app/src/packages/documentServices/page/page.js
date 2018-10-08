import * as _ from 'lodash';

function initializePage(ps) {}


// 先把 config 组装完，在做细节。 把 骨架 搭好
function addPage(ps, pageComponentPointer, pageTitle, serializedPage) {
  // const newPageId = pageComponentPointer.id;
  // let page;
  // if (serializedPage) {
  //   page = _.clone(serializedPage);
  // }

  // page = page || blankPageStructure.getBlankPageStructure(ps, newPageId, serializedPage);
  // page.data.title = pageTitle || page.data.title;

  // const pageDataItem = page.data;
  // pageDataItem.id = newPageId;
  // pageData.addPageData(ps, newPageId, pageDataItem);

  // const pageObject = getPageStructure(ps, page.data.title, page.data.pageUriSEO);
  // const pagePointer = ps.pointers.page.getNewPagePointer(newPageId);

  // ps.dalCache.set(pagePointer, pageObject);
  // const originalToNewCompIdMap = page.mobileComponents && {};
}


// page 业务逻辑层的 API
export default {
  initialize: initializePage,

  add: addPage,
}
