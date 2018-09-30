import * as _ from 'lodash';
import PrivateServices from '@packages/documentServices/privateServices/privateServices';

// function getConfigurationMethods(config) {
//   const methods = {};
//   const modulesMethods = _.chain(config.modules)
//     .map('methods')
//     .clone();
//   modulesMethods.unshift(methods);
//   _.merge.apply(_, modulesMethods);
//   return methods;
// }
 
class Site {
  
  constructor(config, siteDataWrapper, siteModel, buildRenderedSite) {
    const ps = new PrivateServices(config, siteDataWrapper);
    initModulesPublicAPI(ps, config, this);
  }
}

export default Site;
