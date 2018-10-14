import * as _ from 'lodash';
import propTypesUtil from '../utils/propTypesUtil';
import propsBuilderUtil from '../propsBuilder/propsBuilderUtil';

function create(siteAPI) {
  const siteData = siteAPI.getSiteData();
  const pointers = siteAPI.getPointers();
  const dalCache = siteAPI.getDalCache();

  const getInnerStructureProperty = (compId, pageId, propertyName, viewMode) => {
    const pagePointer = pointers.components.getPage(pageId, viewMode);
    const compPointer = pagePointer && pointers.components.getComponent(compId, pagePointer);
    const innerPointer = compPointer && pointers.getInnerPointer(compPointer, propertyName);

    return innerPointer ? dalCache.get(innerPointer) : undefined;
  }

  const getStyleIdFromStructure = props =>  
    _.get(props.structure, 'styleId') || getInnerStructureProperty(props.id, props.rootId, 'styleId', siteData.getViewMode());

  return {
    Component: {
      id: propTypesUtil.createPropTypeFetcher(props => _.get(props, 'structure.id'), 'id'),
      structure: propTypesUtil.createPropTypeFetcher(props => props.struture, 'structure'),
      styleId: propTypesUtil.createPropTypeFetcher(props => {

        // return propsBuilderUtil.getStyleId();
      }, 'styleId'),
      skin: propTypesUtil.createPropTypeFetcher(props => {

        const styleIdFromStructure = getStyleIdFromStructure(props);
        const skinName = _.get(props.structure, 'skin');
        return propsBuilderUtil.getSkin(styleIdFromStructure, skinName);
      }, 'skin'),
      layout: propTypesUtil.createPropTypeFetcher(props => getInnerStructureProperty(props.id, props.rootId, 'layout', siteData.getViewMode()), 'layout'),
    },
  }

}


export default create;
