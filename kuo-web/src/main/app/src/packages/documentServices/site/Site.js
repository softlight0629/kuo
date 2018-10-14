import * as _ from 'lodash';
import PrivateServices from '@packages/documentServices/privateServices/privateServices';

function getConfigurationMethods(config) {
  const methods = {};
  const modules = _.values(config.modules);

  const modulesMethods = _.map(modules, 'methods');
  modulesMethods.unshift(methods);
  _.merge.apply(_, modulesMethods);

  return methods;
}

function initModulesPublicAPI(ps, config, documentServices) {
  const methods = getConfigurationMethods(config);

  _.forEach(methods, (value, key) => {
    documentServices[key] = value;
  });
}

class Site {
 
  constructor(config, siteDataWrapper, siteModel, buildRenderedSite) {
    this.ps = new PrivateServices(config, siteDataWrapper);
    initModulesPublicAPI(ps, config, this);
  }

  init(renderedSite) {
    this.ps.initiateSiteAPI(renderedSite);
  }
}

export default Site;
