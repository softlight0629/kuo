import propsBuilderUtil from './propsBuilderUtil';

function getRootProps(compClass, rootId, siteAPI) {
  const siteData = siteAPI.getSiteData();
  const pointers = siteAPI.getPointers();

  const dalCache = siteAPI.getDalCache();
  const pagePointer = pointers.components.getPage(rootId, siteData.getViewMode());

  const structure = dalCache.get(pagePointer);
  const pageComponentType = structure.componentType || 'mila.core.components.MasterPage';

  const { propertyQuery, styleId, skin, dataQuery, components } = structure;
  const rootProps = {
    componentType: pageComponentType,
    siteData,
    siteAPI,
    id: rootId,
    key: `${rootId}`,
    pageId: rootId,
    styleId: propsBuilderUtil.getStyleId(styleId, skin),
    skin: propsBuilderUtil.getSkin(styleId, skin),
    style: {
      width: '100%',
      height: '100%',
    },
    components,
    compProp: propsBuilderUtil.getCompProp(siteAPI, propertyQuery, rootId),
  }

  if (dataQuery) {
    rootProps.compData = propsBuilderUtil.getCompData(siteAPI, dataQuery, rootId);
  }

  return rootProps;
}

function getCompProps(compClass, compStructure, siteAPI, pageId, ps, propsFromParent) {
  // const siteData = siteAPI.getSiteData();
}


export default {
  getCompProps,
  getRootProps,
}
