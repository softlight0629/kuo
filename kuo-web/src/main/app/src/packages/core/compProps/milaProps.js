import * as _ from 'lodash';
import componentPropsBuilder from './propsBuilder/componentPropsBuilder';
import computedPropsBuilder from './propsBuilder/computedPropsBuilder';
import propsBuilderUtil from './propsBuilder/propsBuilderUtil';
import propsFetcher from './fetchers/propsFetcher';
import milaTypesUtils from './utils/milaTypesUtils';
import propsSelectorsUtils from './utils/propsSerlectorsUtils';

export default {
  componentPropsBuilder,
  computedPropsBuilder,
  propsBuilderUtil,
  milaTypesUtils,
  createMilaType: propsSelectorsUtils.createComponentMilaType,
  createGlobalMilaType: propsSelectorsUtils.createGlobalMilaType,
  fetchers: {
    get: siteAPI => propsFetcher(siteAPI)
  },
}
