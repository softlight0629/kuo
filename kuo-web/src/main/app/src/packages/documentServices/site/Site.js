import * as _ from 'lodash';
import PrivateServices from '@packages/privateServices/privateServices';

function getConfigurationMethods(config) {
  const methods = {};
  const modulesMethods = _.chain(config.modules)
    .map('methods')
    .clone();
  modulesMethods.unshift(methods);
  _.merge.apply(_, modulesMethods);
  return methods;
}

// 初始化 documentServices init, 可能涉及异步请求
function runDocumentServicesDataFixersAndInitMethods() {
}

function initModulesPublicAPI(ps, config, documentServices) {
  const methods = getConfigurationMethods(config);
  const publicNamespaces = {};

  // function getPublicMethodsByNamespaceWithLazyInit(namespace) {

  // }
}

function onApplyPatchDone(ps, config, documentServices, siteDataWrapper, siteUtils) {

  siteUtils.buildRenderedSite(renderedSiteReact => {
    if (config.shouldRender) {
      ps.initiateSiteAPI(renderedSiteReact);
    }
  });
}
 
class Site {

  // 整个就是 documentServices, editorAPI 将会 merge 这里初始化好的所有APIss
  // config 包涵了所有 documentServices 的公共 Public模块
  // 这些 Public 公共模块是暴露给 editorAPI 来调用 Preview的
  // Preview 还会有 privateServices，可能牵涉到底层的数据层的操作，但是暴露给外部
  // Site 的直接就是完成这些 API 模块的初始

  // 1. 准备 pointersCache
  // buildRenderedSite, 调用回调来构造 SiteReact, 然后传递一个 callback
  constructor(config, siteDataWrapper, buildRenderedSite) {
    const ps = new PrivateServices(config, siteDataWrapper);
    this.ps = ps;

    const siteUtils = {};

    if (buildRenderedSite) {
      siteUtils.buildRenderedSite = buildRenderedSite.bind(this);
    }

    initModulesPublicAPI(ps, config, this);

    onApplyPatchDone(ps, config, this, siteDataWrapper, siteUtils);
  }
}

export default Site;
