import * as _ from 'lodash';
import mobx from 'mobx';
import SiteData from './siteData';
import DALFactory from '@packages/documentServices/dataAccessLayer/dal/DALFactory';
import DALCacheGenerator from '@packages/documentServices/dataAccessLayer/DALCacheGenerator';

// 开始做构造 数据实例化， mobx化. 拿到实例树
// 接下来要做， SiteDataAPI 构造，实例化 FullSiteData
class FullSiteData extends SiteData{
  
  constructor(siteModel) {
    super(siteModel);

    if (!siteModel) {
      return;
    }

    const dalCache = DALFactory.getInstance(this, { pagesData: siteModel.pagesData || {} });
    // json -> mobx model 实例

    _.forEach(this.pagesData, pageData => {
      const pageDataSchema = DALCacheGenerator.generate({
        dalCache,
        pointersCache: dalCache.pointersCache,
      }, pageData);
    });
  }

  getCurrentPageTitleBase() {
  }

  getCurrentPageName() {}

  getCurrentPageTitle() {}

  getCurrentPageMetaTags() {}
}

export default FullSiteData;
