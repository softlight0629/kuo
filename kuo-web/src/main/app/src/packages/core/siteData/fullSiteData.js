import mobx from 'mobx';
import SiteData from './siteData';
import DALFactory from '@packages/documentServices/dataAccessLayer/dal/DALFactory';
import PageDataGenerator from '@packages'

// 开始做构造 数据实例化， mobx化. 拿到实例树
class FullSiteData extends SiteData{
  
  constructor(siteModel) {
    super(siteModel);

    if (!siteModel) {
      return;
    }

    const dalCache = DALFactory.get(this, { pagesData: siteModel.pagesData || {} });
    // json -> mobx model 实例

    _.forEach(this.pagesData, pageData => {
      const pageDataSchema = PageDataGenerator.generate(pageData);
    });
  }

  getCurrentPageTitleBase() {
  }

  getCurrentPageName() {}

  getCurrentPageTitle() {}

  getCurrentPageMetaTags() {}
}

export default FullSiteData;
