import * as _ from 'lodash';
import propsBuilderUtil from './propsBuilderUtil';
import computedPropsBuilder from './computedPropsBuilder';
import milaTypesUtils from '../utils/milaTypesUtils';

function getRootProps(compClass, rootId, siteAPI, ps) {
  const siteData = siteAPI.getSiteData();
  const dalCache = siteAPI.getDalCache();

  const pointers = siteAPI.getPointers();
  const pagePointer = poiters.components.getPage(rootId, siteData.getViewMode());

  const structure = dalCache.get(pagePointer);
  const pageComponentType = structure.componentType || 'mila.core.components.MasterPage';

  const { propertyQuery, styleId, skin, dataQuery } = structure;
  const rootProps = {
    ps,
    componentType: pageComponentType,
    siteData,
    siteAPI,
    id: rootId,
    refInParent: rootId,
    pageId: rootId,
    styleId: propsBuilderUtil.getStyleId(styleId, skin),
    skin: propsBuilderUtil.getSkin(styleId, skin),
    style: {
      width: '100%',
      heigt: '100%',
    },
    compProp: propsBuilderUtil.getCompProp(siteAPI, propertyQuery, rootId),
  }

  if (dataQuery) {
    rootProps.compData = propsBuilderUtil.getCompData(siteAPI, dataQuery, rootId);
  }

  const milaPropsSelectorForComp = milaTypesUtils.getMilaPropsSelectorForReactClass(compClass);
  const milaTypesProps = milaPropsSelectorForComp({
    fetchMilaType: (milaTypesDefinition, state, props) => siteAPI.getMilaFetcher(milaTypesDefinition)(state, props),
    siteData,
    siteAPI,
  }, {
    structure,
    rootId,
  });

  return _.assign(rootProps, milaTypesProps);
}

function getCompProps(compClass, compStructure, siteAPI, pageId, ps, propsFromParent) {
  const siteData = siteAPI.getSiteData();
  
  const state = {
    fetchMilaType: (milaTypesDefinition, state, props) => siteAPI.getMilaFetcher(milaTypesDefinition)(state, props),
    siteData,
    siteAPI,
  };
  const compProps = _.defaults({
    id: compStructure.id,
    structure: compStructure,
    rootId: pageId,
  }, propsFromParent);

  const computedProps = computedPropsBuilder.getInstance(state, compProps, compClass.propTypes, 'milaTypes', false).getComputedProps(compProps, true);
  return _.assign(computedProps.get(), propsFromParent);
}


export default {
  getRootProps,
  getCompProps,
}
