
function getRootProps(compClass, rootId, siteAPI) {
  const siteData = siteAPI.getSiteData();

  // const pagePointer = 

  const structure = {};
  
  const rootProps = {
    componentType: structure.componentType,
    siteData,
    siteAPI,
    id: rootId,
    key: `${rootId}_${siteData.getViewMode()}`,
    ref: rootId,
    pageId: rootId,
    rootId,
    style: {
      width: '100%',
      height: '100%',
    },
    compProp:{},
  }

  return rootProps;
}

function getCompProps() {}


export default {
  getCompProps,
  getRootProps,
}
