// import urlUtils from '@packages/warmupUtils/urlUtils';
import site from '@packages/core/core/site';
import Site from '@packages/documentServices/site/Site';

export default (window) => {
  
  function render(isServerSide, isPreview, isExternalPreivew, queryUtil, siteModel, mobileView) {

    // 下一步， 构造  siteAsJson, render 实例化到  dal
    siteModel.requestModel = {
      userAgent: window.navigator.userAgent,
      cookie: document.cookie,
    };

    function renderServerSide() {
    }


    // siteModel 包含了 site 渲染的所有配置数据
    // 根据 siteModel, 创建 siteData, siteDataAPI, 渲染 site, 返沪 site react dom
    function renderClientSide() {
      // 底层数据初始化
      const siteSvr = site.createSiteSvr(window.siteModel);
      const config = {};

      // 构造 dal 层
      // 构造 documentServices -> 需要能拿到 dal 层的数据
      window.documentServices = new Site({}, siteSvr.siteDataAPI, siteModel);

      return site.renderSite(siteSvr.siteData);
    }
   
    function callRender() {
      return renderClientSide();

    }

    return callRender();
  }


  return render;
}
