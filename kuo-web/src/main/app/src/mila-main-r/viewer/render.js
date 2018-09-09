// import urlUtils from '@packages/warmupUtils/urlUtils';
import site from '@packages/core/core/site';
import Site from '@packages/documentServices/site/Site';

export default (window) => {
  
  function render(isServerSide, isPreview, isExternalPreivew, queryUtil, siteModel, mobileView) {

    siteModel.requestModel = {
      userAgent: window.navigator.userAgent,
      cookie: document.cookie,
    };

    // siteModel.currentUrl = urlUtils.parseUrl(window.location.href);

    function renderServerSide() {
    }


    // siteModel 包含了 site 渲染的所有配置数据
    // 根据 siteModel, 创建 siteData, siteDataAPI, 渲染 site, 返沪 site react dom
    function renderClientSide() {
      // 初始化 SiteDataAPI
      const ss = site.createSiteService(window.siteModel);
      const config = {};
      window.documentServices = new Site({}, ss.siteDataAPI, siteModel);

      return site.renderSite(ss.siteData);
    }
   
    function callRender() {
      return renderClientSide();

    }

    return callRender();
  }


  return render;
}
