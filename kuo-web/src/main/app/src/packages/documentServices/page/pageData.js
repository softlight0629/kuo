import * as _ from 'lodash';
import dataModel from '@packages/documentServices/dataModel/dataModel';

function updatePageBackgrounds(ps, pageId, data) {}

function addPageData(ps, pageId, data) {}


const pageDataModule = {

  getPageList: (ps, incudeMasterPage) => {
  },

  getNumberOfPages: (ps) => {
    return pageDataModule.getPagesList(ps, false).length;
  },

  addPageData: (ps, pageId, data, shouldAddMenuItem =  true) => {
    addPageData(ps, pageId, data);
  }
}

// page 数据层的 API 操作接口
export default pageDataModule;
