import * as _ from 'lodash';


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
    isMobileView: () => siteData.isMobileView(),
    siteWidth: () => siteData.getSiteWidth(),
    isPreviewMode: () => siteData.viewMode === 'preview',
    Fonts: {
      fontsMap: () => siteDate.getFontsMap(),
    },
    Container: {
      defaultContentArea: () => ({ aligentment: 0.5, width: siteData.getSiteWidth() }),
      defaultBackgroundStyle: () => {
        const siteWidth = siteData.getSiteWidth();
        return siteData.isMobileView() ? {} : {marginLeft: `calc((100% - ${siteWidth}px) / 2)`, width: siteWidth},
      },
    },
    Component: {
      id: props => _.get(props, 'structure.id'),
      rootId: props => props.rootId,
      pageId: props => props.rootId,
      structure: props => props.structure,
      styleParam: {
        textAlignment: props => {

        },

        colorSchema: props => {

        }
      },
      styleId: props => {
        const styleIdFromStructure = getStyleIdFromStructure(props);
        const skinName = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.skin, state, props);

        return propsBuilderUtil.getStyleId(styleIdFromStructure, skinName); 
      },
      skin: props => {
        const styleIdFromStructure = getStyleIdFromStructure(props);
        const skinName = _.get(props.structure, 'skin') || getInnerStructureProperty(props.id, props.rootId, 'skin', siteData.getViewMode());
        return propsBuilderUtil.getSkin(styleIdFromStructure, skinName);
      },
      getStyleData: props => {

      },
      compProp: props => {

      },
      compData: props => {
        
      },
      compDesign: props => {

      },
      layout: props => {
      },
      childrenLayout: props => {
      },
    },
    ColumnsContainer: {
      childrenData: props => {},
    },
    Device: {
      isTouchDevice: () => {},
      isMobileDevice: () => {},
      devicePixelRatio: () => {},
    },
    Mobile: {
    },
    PageGroup: {
      pagesToRender: () => {},
      createPageProps: () => {},
    },
    Theme: {
      all: () => {},
      colors: () => {},
      colorsMap: () => {},
      THEME_DATA: () => {},
    },
    
  }
}

export default create;
