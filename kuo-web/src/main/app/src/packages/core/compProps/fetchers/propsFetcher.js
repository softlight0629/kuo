import * as _ from 'lodash';
import propTypesUtil from '../utils/propTypesUtil';
import propsBuilderUtil from '../propsBuilder/propsBuilderUtil';
import propsSelectorsUtils from '../utils/propsSelectorsUtils';

const COMPONENTS_TO_DISPLAY_IN_LANDING_PAGE = [
  'mila.core.components.PageGroup',
  'mila.core.components.PagesContainer',
];

const COMPONENTS_NOT_TO_APPLY_STYLE_OVERRIDES = [
  'wysiwyg.viewer.components.SiteBackground'
];

function create(siteAPI) {
  const siteData = siteAPI.getSiteData();
  const pointers = siteAPI.getPointers();
  const dalCache = siteAPI.getDalCache();

  function isPageComponent(structureType) {
    return _.includes(['Page', 'Document'], structureType);
  }

  function setDimensionsAndPixelSizesForDockedComponents(style, dimensions) {
    if (style.width) {
      style.width = dimensions.width;
    }

    if (style.height) {
      style.height = dimensions.height;
    }
  }

  const isCurrentPageLandingPage = siteData => siteData.isPageLandingPage(siteData.getPrimaryPageId());

  function getStyleOverrides(structure, rootId, siteData, siteAPI) {
    let styleOverrides = {};
    
    if (_.includes(COMPONENTS_NOT_TO_APPLY_STYLE_OVERRIDES, structure.componentType)) {
      return styleOverrides;
    }

    if (structure.id === rootId) {
      if (isPageComponent(structure.type)) {
        styleOverrides.width = '100%';
      }
    } else {
      const isLandingPage = rootId === 'masterPage' && isCurrentPageLandingPage(siteData);
      const componentShouldNotRender = isLandingPage && !_.includes(COMPONENTS_TO_DISPLAY_IN_LANDING_PAGE, structure.componentType);
      if (componentShouldNotRender) {
        styleOverrides = { display: 'none' };
      } else if (structure.componentType === 'mila.core.components.PagesContainer') {
        styleOverrides = { top: 0 };
      }
    }

    return styleOverrides;
  }

  function isDockedComponent(compStructure) {
    return !!(_.get(compStructure, 'layout.docked') && compStructure.dimensions); 
  }

  function getColumnsContainerChildInfo(siteAPI, rootId, childPointer) {
    const dalCache = siteAPI.getDalcache();
    const pointers = siteAPI.getPointers();

    const layout = dalCache.get(pointers.getInnerPointer(childPointer, ['layout']));
    const propertyQuery = dalCache.get(pointers.getInnerPointer(childPointer, ['propertyQuery']));
    const alignment = dalCache.get(pointers.getInnerPointer(pointers.data.getPropertyItem(propertyQuery, rootId), ['alignment']));
    const style = propsBuilderUtil.getStyle(layout, siteAPI, childPointer.id);
    return {
      id: childPointer.id,
      width: layout.width,
      heigt: style.height,
      alignment,
    }
  }

  const getInnerStructureProperty = (compId, pageId, propertyName, viewMode) => {
    const pagePointer = pointers.components.getPage(pageId, viewMode);
    const compPointer = pagePointer && pointers.components.getComponent(compId, pagePointer);
    const innerPointer = compPointer && pointers.getInnerPointer(compPointer, propertyName);

    return innerPointer ? dalCache.get(innerPointer) : undefined;
  }

  const getStyleIdFromStructure = props =>  
    _.get(props.structure, 'styleId') || getInnerStructureProperty(props.id, props.rootId, 'styleId', siteData.getViewMode());

  return {
    isMobileView: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.isMobileView(), 'isMobileView'),
    currentUrl: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.currentUrl, 'currentUrl'),
    siteWidth: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.getSiteWidth(), 'siteWidth'),
    animations: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.animations, 'animations'),
    isPreviewMode: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.viewMode === 'preview', 'isPreviewMode'),
    isCurrentPageLandingPage: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => isCurrentPageLandingPage(siteData), 'isCurrentPageLandingPage'),
    currentUrlPageId: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.getCurrentUrlPageId(), 'currentUrlPageId'),
    Fonts: {
      fontsMap: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => siteData.getFontsMap(), 'fontsMap'),
    },
    Container: {
      defaultContentArea: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => ({ alignment: 0.5, width: siteData.getSiteWidth() }), 'defaultContentArea'),
      defaultBackgroundStyle: propsSelectorsUtils.createGlobalMilaTypeFetcher(() => {
        const siteWidth = siteData.getSiteWidth();
        return siteData.isMobileView() ? {} : { marginLeft: `calc((100% - ${siteWidth}px) / 2)`, width: siteWidth};
      }),
    },
    Component: {
      id: propsSelectorsUtils.createPropTypeFetcher(props => _.get(props, 'structure.id')),
      pageId: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => props.rootId),
      rootId: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => props.rootId),
      styleId: propsSelectorsUtils.createPropTypeFetcher((state, props) => {
        const styleIdFromStructure = getStyleIdFromStructure(props);
        const skinName = state.fetchMilaType(santaTypesDefinitions.Component.skin, state, props);

        return propsBuilderUtil.getStyleId(styleIdFromStructure, skinName);
      }),
      structure: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => props.structure)
      skin: propsSelectorsUtils.createPropTypeFetcher((state, props) => {

        const styleIdFromStructure = getStyleIdFromStructure(props);
        const skinName = _.get(props.structure, 'skin') || getInnerStructureProperty(props.id, props.rootId, 'skin', siteData.getViewMode()) ;
        return propsBuilderUtil.getSkin(styleIdFromStructure, skinName);
      }, 'skin'),
      compProp: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        if (props.compProp) {
          return props.compProp;
        }

        const propertyQuery = _.get(props.structure, 'propertyQuery');
        return propsBuilderUtil.getCompProp(siteAPI, propertyQuery, props.rootId);
      }),
      compData: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        if (props.compData) {
          return props.compData;
        }

        let dataQuery = _.get(props.structure, 'dataQuery') || getInnerStructureProperty(props.id, props.rootId, 'dataQuery', siteData.getViewMode());
        if (!dataQuery && props.id === 'masterPage') {
          dataQuery = 'masterPage';
        }

        return propsBuilderUtil.getCompData(siteAPI, dataQuery, props.rootId);
      }),
      compDesign: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        if (props.compDesign) {
          return props.compDesign;
        }

        const designQuery = _.get(props.structure, 'designQuery');
        return propsBuilderUtil.getCompDesign(siteAPI, designQuery, props.rootId);
      }),
      layout: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => getInnerStructureProperty(props.id, props.rootId, 'layout', siteData.getViewMode())),
      style: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        const styleOverrides = getStyleOverrides(props.structure, props.rootId, siteData, siteAPI);

        const layout = _.get(props.structure, 'layout');
        const compStyle = propsBuilderUtil.getStyle(layout, siteAPI, porps.structure.id);
        const dimensions = _.get(props, 'structure.dimensions');

        if (isDockedComponent(props.structure)) {
          setDimensionsAndPixelSizesForDockedComponents(compStyle, dimensions);
        }

        return _.merge(compStyle, styleOverrides);
      }),
      rotationInDegrees: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => _.get(props.structure, 'layout.rotationInDegrees')),
      scale: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => _.get(props.structure, 'layout.scale')),
      currentUrlPageTitle: propsSelectorsUtils.createGlobalMilaTypeFetcher((state, props) => siteData.getCurrentUrlPageTitle(), 'currentUrlPageTitle'),
      dimensions: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => _.get(props, 'structure.dimensions')),
      compBehaviors: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        const propertyQuery = _.get(props.structure, 'propertyQuery');
        const behaviorQuery = _.get(props.structure, 'behaviorQuery');
        return propsBuilderUtil.getCompBehaviors(siteAPI, propertyQuery, behaviorQuery, props.rootId, props.id);
      }),
      childrenLayout: propsSelectorsUtils.createComponentMilaTypeFetcher((state, props) => {
        const pagePointer = pointers.components.getPage(props.rootId, siteData.getViewMode());
        return _.chain(props.structure.components).map(childId => {
          const childPointer = pointers.components.getComponent(childId, pagePointer);
          const layout = dalCache.get(pointers.getInnerPointer(childPointer, ['layout']));
          return {[childId]: layout};
        }).reduce(_.assign);
      }, true)
    },
  }
}


export default create;

