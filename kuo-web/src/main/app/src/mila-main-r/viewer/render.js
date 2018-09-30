// import urlUtils from '@packages/warmupUtils/urlUtils';
import site from '@packages/core/core/site';
import Site from '@packages/documentServices/site/Site';
import documentServices from '@packages/documentServices/documentServices';

export default (window) => {
  
  function render(isServerSide, isPreview, isExternalPreivew, queryUtil, siteModel, mobileView) {

    // 下一步， 构造  siteAsJson, render 实例化到  dal
    siteModel.requestModel = {
      userAgent: window.navigator.userAgent,
      cookie: document.cookie,
    };

    function renderServerSide() {
    }

    function buildRenderedSite() {
    }

    function getConfig() {
      return documentServices.configs.fullFunctionality.getConfig();
    }

    // siteModel 包含了 site 渲染的所有配置数据
    // 根据 siteModel, 创建 siteData, siteDataAPI, 渲染 site, 返沪 site react dom
    function renderClientSide(props) {
      // 底层数据初始化
      const siteDataWrapper = site.createSitePrivates(window.siteModel, props);
      const config = getConfig();
      // 构造 dal 层
      // 构造 documentServices -> 需要能拿到 dal 层的数据
      window.documentServices = new Site(config, siteDataWrapper, siteModel, buildRenderedSite);

      // 这边应该是哪到底层的数据去渲染整个SITE，因为 siteData 应该已经 mobx, React 这边要对这些数据做出反应
      return site.renderSite(siteDataWrapper.siteData);
    }
   
    function callRender() {
      return renderClientSide();

    }

    return callRender();
  }


  return render;
}
