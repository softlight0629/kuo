define([
  'lodash',
  'utils',
  'coreUtils',
  'santa-components',
  'animations',
  'santaProps/utils/propsSelectorsUtils',
  'santaProps/propsBuilder/propsBuilderUtil',
  'santaProps/fetchers/multilingual',
  'santaProps/fetchers/nativeComponentSantaTypesFactory',
  'experiment',
  'coreUtilsLib'
], function (_,
           utils,
           coreUtils,
           santaComponents,
           animations,
           propsSelectorsUtils,
           propsBuilderUtil,
           multilingualFetchers,
           nativeComponentSantaTypesFactory,
           experiment,
           coreUtilsLib) {
  'use strict';

  const {siteDataUtils} = coreUtils;

  const COMPONENTS_TO_DISPLAY_IN_LANDING_PAGE = [
      'wysiwyg.viewer.components.PageGroup',
      'wysiwyg.viewer.components.PagesContainer',
      'wysiwyg.viewer.components.QuickActionBar'
  ];

  const COMPONENTS_NOT_TO_APPLY_STYLE_OVERRIDES = [
      'wysiwyg.viewer.components.SiteBackground'
  ];

  function shouldBeRendered(rootIdsWhichShouldBeRendered, rootId) {
      return _.includes(rootIdsWhichShouldBeRendered, rootId) || rootId === 'masterPage';
  }

  function shouldRenderRootId(siteAPI, rootId) {
      const rootIdsWhichShouldBeRendered = siteAPI.getRootIdsWhichShouldBeRendered();
      return shouldBeRendered(rootIdsWhichShouldBeRendered, rootId);
  }

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

  function getStyleOverrides(structure, rootId, siteData, siteAPI) { // eslint-disable-line complexity
      let styleOverrides = {};
      const customSignupPageId = siteAPI.getSiteAspect('siteMembers').getCustomSignupPageId();

      if (_.includes(COMPONENTS_NOT_TO_APPLY_STYLE_OVERRIDES, structure.componentType)) {
          return styleOverrides;
      }

      if (structure.id === rootId) {
          if (siteAPI.getLayoutMechanism() === utils.constants.LAYOUT_MECHANISMS.ANCHORS && rootId !== customSignupPageId && !(siteAPI.isExperimentOpen('sv_SsrRenderVisiblePageForSeo') && siteAPI.getSiteData().isGoogleBot())) {
              styleOverrides.visibility = 'hidden';
          }

          if (isPageComponent(structure.type)) {
              styleOverrides.width = '100%';

              if (!shouldRenderRootId(siteAPI, rootId) && rootId !== customSignupPageId) {
                  styleOverrides.display = 'none';
              }
          }
      } else {
          const isLandingPage = rootId === 'masterPage' && isCurrentPageLandingPage(siteData);
          const componentShouldNotRender = isLandingPage && !_.includes(COMPONENTS_TO_DISPLAY_IN_LANDING_PAGE, structure.componentType);
          if (componentShouldNotRender) {
              styleOverrides = {display: 'none'};
          } else if (structure.componentType === 'wysiwyg.viewer.components.PagesContainer') {
              styleOverrides = {top: 0};
          }
      }

      return styleOverrides;
  }

  function isDockedComponent(compStructure) {
      return !!(_.get(compStructure, 'layout.docked') && compStructure.dimensions);
  }

  function createBooleanRenderFlagFetcher(siteAPI, flag) {
      return propsSelectorsUtils.createGlobalSantaTypesFetcher(() => !!siteAPI.getRenderFlag(flag), `renderFlag_${flag}`);
  }

  function createRenderFlagFetcher(siteAPI, flag) {
      return propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getRenderFlag(flag), `renderFlag_${flag}`);
  }

  function getColumnsContainerChildInfo(siteAPI, rootId, childPointer) {
      const displayedDAL = siteAPI.getDisplayedDAL();
      const pointers = siteAPI.getPointers();

      const layout = displayedDAL.get(pointers.getInnerPointer(childPointer, ['layout']));
      const propertyQuery = displayedDAL.get(pointers.getInnerPointer(childPointer, ['propertyQuery']));
      const alignment = displayedDAL.get(pointers.getInnerPointer(pointers.data.getPropertyItem(propertyQuery, rootId), ['alignment']));
      const style = propsBuilderUtil.getStyle(layout, siteAPI, childPointer.id);
      return {
          id: childPointer.id,
          width: layout.width,
          height: style.height,
          alignment
      };
  }

  function isHiddenOnStart(siteAPI, state, props) {
      const compBehaviors = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compBehaviors, state, props);
      if (_.isEmpty(compBehaviors)) {
          return false;
      }
      const animationProperties = state.fetchSantaType(santaComponents.santaTypesDefinitions.Animations.animationProperties, state, props);

      return _.some(compBehaviors, compBehavior => {
          const behaviorsAspect = siteAPI.getSiteAspect('behaviorsAspect');
          const isScreenInAction = compBehavior.action === 'screenIn';
          const isBehaviorEnabled = behaviorsAspect.isBehaviorEnabled(compBehavior);
          return isScreenInAction && isBehaviorEnabled && _.get(animationProperties, [compBehavior.name, 'hideOnStart'], false);
      });
  }

  function shouldHideAnimatable(siteAPI, siteData, state, props) {
      if (siteData.isInSeo()) {
          return false;
      }

      if (siteData.isInSSR() || siteData.isFirstRenderAfterSSR()) {
          return isHiddenOnStart(siteAPI, state, props);
      }

      return false;
  }

  function getChildrenMeshLayout(siteAPI, props) {
      const POSITION_ABSOLUTE_IN_MESH = {
          'platform.components.AppController': true,
          'wysiwyg.viewer.components.Popover': true
      };
      const siteData = siteAPI.getSiteData();
      const pointers = siteAPI.getPointers();
      const displayedDAL = siteAPI.getDisplayedDAL();

      const pagePointer = pointers.components.getPage(props.rootId, siteData.getViewMode());
      return _.map(props.structure.components, childId => {
          const childPointer = pointers.components.getComponent(childId, pagePointer);
          const layout = displayedDAL.get(pointers.getInnerPointer(childPointer, ['layout']));
          const compType = displayedDAL.get(pointers.getInnerPointer(childPointer, ['componentType']));
          return _.assign({
              id: childId,
              left: layout.x,
              top: layout.y,
              width: layout.width,
              height: layout.height,
              docked: layout.docked,
              isFixed: !!layout.fixedPosition,
              rotationInDegrees: layout.rotationInDegrees
          }, POSITION_ABSOLUTE_IN_MESH[compType] ? {absolute: true} : {});
      });
  }

  const globalRuntimeDalFetcher = (siteAPI, funcName) => propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getRuntimeDal()[funcName], funcName);

  return siteAPI => {
      const siteData = siteAPI.getSiteData();
      const pointers = siteAPI.getPointers();
      const displayedDAL = siteAPI.getDisplayedDAL();

      const getInnerStructureProperty = (compId, pageId, propertyName, viewMode) => {
          const pagePointer = pointers.components.getPage(pageId, viewMode);
          const compPointer = pagePointer && pointers.components.getComponent(compId, pagePointer);
          const innerPointer = compPointer && pointers.getInnerPointer(compPointer, propertyName);

          return innerPointer ? displayedDAL.get(innerPointer) : undefined;
      };

      const getStyleIdFromStructure = props =>
          _.get(props.structure, 'styleId') ||
          utils.santaTypes.shortenStyleId(_.get(props.structure, 'skin')) ||
          getInnerStructureProperty(props.id, props.rootId, 'styleId', siteData.getViewMode());

      const NativeComponentSantaTypes = nativeComponentSantaTypesFactory(siteAPI);

      return {
          NativeComponentSantaTypes,
          isMobileView: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.isMobileView(), 'isMobileView'),
          isDebugMode: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.isDebugMode(), 'isDebugMode'),
          isQAMode: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.isQaMode(), 'isQAMode'),
          hideComponentsListForQa: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getHideComponentsQAList(), 'hideComponentsListForQa'),
          getRootIdsWhichShouldBeRendered: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getRootIdsWhichShouldBeRendered, 'getRootIdsWhichShouldBeRendered'),
          isExperimentOpen: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.isExperimentOpen, 'isExperimentOpen'),
          setCustomClickOccurred: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.setCustomClickOccurred, 'setCustomClickOccurred'),
          reportBI: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.reportBI, 'reportBI'),
          currentUrl: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.currentUrl, 'currentUrl'),
          siteWidth: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getSiteWidth(), 'siteWidth'),
          animations: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.animations, 'animations'),
          isSiteBusy: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.isSiteBusy, 'isSiteBusy'),
          isPreviewMode: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.viewMode === 'preview', 'isPreviewMode'),
          isCurrentPageLandingPage: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => isCurrentPageLandingPage(siteData), 'isCurrentPageLandingPage'),
          santaBase: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
              const displayedJsonDal = siteAPI.getDisplayedDAL();
              return displayedJsonDal.getByPath(['santaBase']);
          }, 'santaBase'),
          RendererModel: {
              multilingual: multilingualFetchers
          },
          currentUrlPageId: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getCurrentUrlPageId(), 'currentUrlPageId'),
          RawSvg: {
              getRawSVG: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const data = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compData, state, props);
                  const svgId = _.get(data, ['svgId'], '');
                  return siteDataUtils.getSvgString(state.siteData, svgId);
              })
          },
          Modes: {
              getActiveModes: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getActiveModes, 'getActiveModes'),
              activateModeById: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.activateModeById, 'activateModeById'),
              deactivateModeById: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.deactivateModeById, 'deactivateModeById'),
              switchModesByIds: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.switchModesByIds, 'switchModesByIds')
          },
          SiteAspects: {
              windowScrollEvent: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('windowScrollEvent'), 'windowScrollEvent'),
              windowResizeEvent: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('windowResizeEvent'), 'windowResizeEvent'),
              actionsAspect: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('actionsAspect'), 'actionsAspect')
          },
          Fonts: {
              fontsMap: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getFontsMap(), 'fontsMap')
          },
          Popover: {
              open: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.openPopover.bind(popoverAspect, compId);
              }),
              close: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.closePopover.bind(popoverAspect, compId);
              }),
              rootContentStyle: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const rootContentId = _.head(props.structure.components);

                  if (rootContentId) {
                      const pagePointer = pointers.components.getPage(props.rootId, siteData.getViewMode());
                      const rootContentPointer = pointers.components.getComponent(rootContentId, pagePointer);
                      const rootContentStructure = displayedDAL.get(rootContentPointer);
                      const rootContentProps = _.defaults({structure: rootContentStructure, id: rootContentStructure.id}, props);
                      return _.defaults({position: 'relative'}, state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.style, state, rootContentProps));
                  }
                  return null;
              }, true),
              onPopoverMouseIn: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.onPopoverMouseIn.bind(popoverAspect, compId);
              }),
              onPopoverMouseOut: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.onPopoverMouseOut.bind(popoverAspect, compId);
              }),
              onTargetMouseIn: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.onTargetMouseIn.bind(popoverAspect, compId);
              }),
              onTargetMouseOut: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const compId = _.get(props.structure, 'id');
                  return popoverAspect.onTargetMouseOut.bind(popoverAspect, compId);
              }),
              targetBounds: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  const popoverId = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.id, state, props);
                  return popoverAspect.getTargetBounds(popoverId);
              }),
              targetPortal: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
                  const popoverAspect = siteAPI.getSiteAspect('popoverAspect');
                  return popoverAspect.getTargetPortal();
              }, 'targetPopoverPortal')
          },
          Container: {
              defaultContentArea: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => ({alignment: 0.5, width: siteData.getSiteWidth()}), 'defaultContentArea'),
              defaultBackgroundStyle: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
                  const siteWidth = siteData.getSiteWidth();
                  return siteData.isMobileView() ? {} : {marginLeft: `calc((100% - ${siteWidth}px) / 2)`, width: siteWidth};
              }, 'defaultBackgroundStyle')
          },
          Component: {
              isCollapsed: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const componentViewMode = siteAPI.getRenderFlag('componentViewMode');
                  const isComponentCollapsed = _.get(state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compProp, state, props), 'isCollapsed');
                  return !!(isComponentCollapsed && componentViewMode !== 'editor');
              }),
              isHorizontallyDocked: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const docked = _.get(props.structure, ['layout', 'docked']);
                  return !!(docked && docked.right && docked.left);
              }),
              id: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.get(props, 'structure.id')),
              refInParent: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.get(props, 'structure.id')),
              rootId: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => props.rootId),
              pageId: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => props.rootId),
              compActions: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const propertyQuery = _.get(props.structure, 'propertyQuery');
                  const behaviorQuery = _.get(props.structure, 'behaviorQuery');
                  const compId = _.get(props.structure, 'id');
                  return propsBuilderUtil.getCompActions(siteAPI, propertyQuery, behaviorQuery, compId, props.rootId);
              }),
              structure: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => props.structure, true),
              styleParam: {
                  textAlignment: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                      const themeDataItem = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.theme, state, props);
                      return _.get(themeDataItem, ['style', 'properties', 'textAlignment']);
                  }),
                  colorScheme: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                      const themeDataItem = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.theme, state, props);
                      return _.get(themeDataItem, ['style', 'properties', 'colorScheme']);
                  })
              },
              rootNavigationInfo: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => siteData.getExistingRootNavigationInfo(props.rootId) || props.rootNavigationInfo),
              currentUrlPageId: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getCurrentUrlPageId(), 'currentUrlPage'),
              styleId: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const styleIdFromStructure = getStyleIdFromStructure(props);
                  const skinName = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.skin, state, props);

                  return propsBuilderUtil.getStyleId(styleIdFromStructure, skinName);
              }),
              skin: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (props.hardcodedSkin) {
                      return props.hardcodedSkin;
                  }

                  const styleIdFromStructure = getStyleIdFromStructure(props);
                  const skinName = _.get(props.structure, 'skin') || getInnerStructureProperty(props.id, props.rootId, 'skin', siteData.getViewMode());
                  return propsBuilderUtil.getSkin(styleIdFromStructure, skinName, id => displayedDAL.get(pointers.data.getThemeItem(id, 'masterPage')));
              }),
              getStyleData: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => (styleId, fallbackSkin) => {
                  const styleData = siteData.getDataByQuery(styleId, props.rootId, siteData.dataTypes.THEME) || {};

                  return styleData.skin ?
                      styleData :
                      _.defaults({skin: fallbackSkin || state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.skin, state, props)}, styleData);
              }),
              compProp: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (props.compProp) {
                      return props.compProp;
                  }
                  const propertyQuery = _.get(props.structure, 'propertyQuery');
                  return propsBuilderUtil.getCompProp(siteAPI, propertyQuery, props.rootId);
              }),
              compData: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (props.compData) {
                      return props.compData;
                  }
                  let dataQuery = _.get(props.structure, 'dataQuery') || getInnerStructureProperty(props.id, props.rootId, 'dataQuery', siteData.getViewMode());
                  if (!dataQuery && props.id === 'masterPage') {
                      dataQuery = 'masterPage';
                  }
                  return propsBuilderUtil.getCompData(siteAPI, dataQuery, props.rootId);
              }),
              compDesign: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (props.compDesign) {
                      return props.compDesign;
                  }
                  const designQuery = _.get(props.structure, 'designQuery');
                  return propsBuilderUtil.getCompDesign(siteAPI, designQuery, props.rootId);
              }),
              pageStub: propsSelectorsUtils.createComponentSantaTypeFetcher((state, {rootId}) => !shouldRenderRootId(siteAPI, rootId)),
              renderFixedPosition: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const fixedPosition = _.get(props.structure, 'layout.fixedPosition');
                  const renderFixedPositionContainers = siteAPI.getRenderFlag('renderFixedPositionContainers');
                  return fixedPosition && renderFixedPositionContainers;
              }),
              layout: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => getInnerStructureProperty(props.id, props.rootId, 'layout', siteData.getViewMode())),
              style: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const styleOverrides = getStyleOverrides(props.structure, props.rootId, siteData, siteAPI);

                  const layout = _.get(props.structure, 'layout');
                  const compStyle = propsBuilderUtil.getStyle(layout, siteAPI, props.structure.id);
                  const dimensions = _.get(props, 'structure.dimensions');

                  if (isDockedComponent(props.structure)) {
                      setDimensionsAndPixelSizesForDockedComponents(compStyle, dimensions);
                  }

                  return _.merge(compStyle, styleOverrides);
              }),
              meshParams: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const isMeshLayoutMechanism = state.fetchSantaType(santaComponents.santaTypesDefinitions.Layout.isMeshLayoutMechanism, state, props);

                  if (!isMeshLayoutMechanism) {
                      return {};
                  }

                  const layout = _.get(props.structure, 'layout');

                  const id = props.id;
                  const childrenMeshLayout = getChildrenMeshLayout(siteAPI, props);
                  const adjustingComp = siteData.layoutAdjustment.id;
                  const isAdjusting = adjustingComp && _.includes(props.structure.components, adjustingComp);
                  return {
                      width: layout.width || 0,
                      height: layout.height,
                      rotationInDegrees: layout.rotationInDegrees,
                      id,
                      adjustingComp: isAdjusting ? adjustingComp : null,
                      components: _.filter(childrenMeshLayout, ({top}) => _.isNumber(top))
                  };
              }, true),
              rotationInDegrees: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.get(props.structure, 'layout.rotationInDegrees')),
              scale: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.get(props.structure, 'layout.scale')),
              currentUrlPageTitle: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getCurrentUrlPageTitle(), 'currentUrlPageTitle'),
              dimensions: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.get(props, 'structure.dimensions')),
              compStaticBehaviors: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const behaviorsQuery = _.get(props.structure, 'behaviorQuery');
                  return _.get(siteData.getDataByQuery(behaviorsQuery, props.rootId, siteData.dataTypes.BEHAVIORS), 'items');
              }),
              theme: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const styleIdFromStructure = getStyleIdFromStructure(props);
                  return siteData.getDataByQuery(styleIdFromStructure, props.rootId, siteData.dataTypes.THEME);
              }),
              compBehaviors: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const propertyQuery = _.get(props.structure, 'propertyQuery');
                  const behaviorQuery = _.get(props.structure, 'behaviorQuery');
                  return propsBuilderUtil.getCompBehaviors(siteAPI, propertyQuery, behaviorQuery, props.rootId, props.id);
              }),
              childrenLayout: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const pagePointer = pointers.components.getPage(props.rootId, siteData.getViewMode());
                  return _(props.structure.components).map(childId => {
                      const childPointer = pointers.components.getComponent(childId, pagePointer);
                      const layout = displayedDAL.get(pointers.getInnerPointer(childPointer, ['layout']));
                      return {[childId]: layout};
                  }).reduce(_.assign);
              }, true),
              fixedChildrenIDs: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const childrenLayout = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.childrenLayout, state, props) || {};
                  return _(childrenLayout).pickBy('fixedPosition').keys().value();
              }, true),
              trackBehaviorsToExecute: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const compId = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.id, state, props);
                  const behaviorsAspect = siteAPI.getSiteAspect('behaviorsAspect');
                  return behaviorsAspect.trackBehaviorsToExecute.bind(behaviorsAspect, compId);
              }),
              isHiddenOnStart: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => isHiddenOnStart(siteAPI, state, props)),
              shouldHideAnimatable: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => shouldHideAnimatable(siteAPI, siteData, state, props))
          },
          ColumnsContainer: {
              childrenData: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const pagePointer = pointers.components.getPage(props.rootId, siteData.getViewMode());

                  return _.reduce(props.structure.components, (acc, childId) => {
                      const childPointer = pointers.components.getComponent(childId, pagePointer);
                      return _.set(acc, childId, getColumnsContainerChildInfo(siteAPI, props.rootId, childPointer));
                  }, {});
              }, true)
          },
          Behaviors: {
              handleAction: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('behaviorsAspect').handleAction, 'handleAction'),
              registerBehaviors: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('actionsAspect').registerBehaviors, 'registerBehaviors'),
              setBehaviorsForActions: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('behaviorsAspect').setBehaviorsForActions, 'setBehaviorsForActions'),
              convertBehaviors: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getSiteAspect('behaviorsAspect').convertBehaviors, 'convertBehaviors')
          },
          Layout: {
              reLayoutIfPending: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.reLayoutIfPending, 'reLayoutIfPending'),
              registerReLayoutPending: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.registerReLayoutPending, 'registerReLayoutPending'),
              isMeshLayoutMechanism: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getLayoutMechanism() === utils.constants.LAYOUT_MECHANISMS.MESH, 'isMeshLayoutMechanism'),
              registerLayoutFunc: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.registerLayoutFunc, 'registerLayoutFunc')
          },
          DAL: {
              setCompState: globalRuntimeDalFetcher(siteAPI, 'setCompState'),
              setCompData: globalRuntimeDalFetcher(siteAPI, 'setCompData'),
              setCompProps: globalRuntimeDalFetcher(siteAPI, 'setCompProps'),
              removeCompState: globalRuntimeDalFetcher(siteAPI, 'removeCompState')
          },
          Utils: {
              logging: {
                  performance: {
                      now: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => coreUtils.loggingUtils.performance.now, 'now')
                  }
              },
              logger: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => utils.log, 'logger')
          },
          Device: {
              isTouchDevice: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.isTouchDevice(), 'isTouchDevice'),
              isMobileDevice: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.isMobileDevice(), 'isMobileDevice'),
              devicePixelRatio: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.getDevicePixelRatio(), 'devicePixelRatio')
          },
          Mobile: {
              cannotHideIframeWithinRoundedCorners: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.cannotHideIframeWithinRoundedCorners(), 'cannotHideIframeWithinRoundedCorners'),
              siteZoomRatio: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.getSiteZoomRatio(), 'siteZoomRatio'),
              invertedZoomRatio: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.getInvertedZoomRatio(), 'invertedZoomRatio'),
              orientationZoomFix: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.getOrientationZoomFixRation(), 'orientationZoomFix'),
              mobileZoom: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.mobile.getMobileZoomByScreenProperties(), 'mobileZoom')
          },
          RenderFlags: {
              componentPreviewState: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const displayedDal = siteAPI.getDisplayedDAL();
                  return displayedDal.getByPath(['renderFlags', 'componentPreviewStates', props.structure.id]);
              }),
              isPlayingAllowed: createBooleanRenderFlagFetcher(siteAPI, 'isPlayingAllowed'),
              shouldResetComponent: createBooleanRenderFlagFetcher(siteAPI, 'shouldResetComponent'),
              componentViewMode: createRenderFlagFetcher(siteAPI, 'componentViewMode'),
              renderFixedPositionContainers: createBooleanRenderFlagFetcher(siteAPI, 'renderFixedPositionContainers')
          },
          RenderRealtimeConfig: {
              previewTooltipCallback: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteAPI.getRenderRealtimeConfigItem('previewTooltipCallback'), 'previewTooltipCallback'),
              shouldHideTextComponent: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (!_.isNil(props.structure.id)) {
                      return _.isEqual(siteAPI.getRenderRealtimeConfigItem('hideTextComponent'), props.structure.id);
                  }
                  return false;
              }),
              shouldHideComponent: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const isPreviewMode = state.fetchSantaType(santaComponents.santaTypesDefinitions.RenderFlags.componentViewMode, state, props) === 'preview';
                  if (isPreviewMode) {
                      return false;
                  }
                  const compId = props.structure.id;

                  const viewMode = siteData.getViewMode();
                  const isHidden = displayedDAL.get(pointers.general.getIsCompHiddenPointer(compId, viewMode));

                  const deprecatedCompIdToHide = siteAPI.getRenderRealtimeConfigItem('compsToHide_deprecated');
                  return isHidden || deprecatedCompIdToHide === compId;
              }),
              shouldShowComponentOnTop: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => _.includes(siteAPI.getRenderRealtimeConfigItem('compsToShowOnTop'), props.structure.id)),
              componentOpacity: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const compsToShowWithOpacityObj = siteAPI.getRenderRealtimeConfigItem('compsToShowWithOpacity') || {};
                  return _.includes(compsToShowWithOpacityObj.compIds, props.structure.id) ? compsToShowWithOpacityObj.opacity : null;
              })
          },
          Repeater: {
              templateLayout: propsSelectorsUtils.createComponentSantaTypeFetcher((state, {structure, rootId}) => {
                  const pagePointer = pointers.components.getPage(rootId, siteData.getViewMode());
                  const {components} = structure;
                  const repeaterWidth = _.get(structure, 'layout.width');
                  if (_.isEmpty(components)) {
                      return {itemCount: 0, templateWidth: 0, docked: null, repeaterWidth};
                  }
                  const childPointer = pointers.components.getComponent(components[0], pagePointer);
                  const firstChildLayout = displayedDAL.get(pointers.getInnerPointer(childPointer, ['layout']));
                  return {itemCount: _.size(components), templateWidth: firstChildLayout.width, repeaterWidth, docked: _.get(structure, 'layout.docked')};
              }, true)
          },
          DocumentClickEvent: {
              registerToDocumentClickEvent: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
                  const windowClickEventAspect = siteAPI.getSiteAspect('windowClickEventAspect');
                  return windowClickEventAspect.registerToDocumentClickEvent.bind(windowClickEventAspect);
              }, 'registerToDocumentClickEvent'),
              unRegisterToDocumentClickEvent: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
                  const windowClickEventAspect = siteAPI.getSiteAspect('windowClickEventAspect');
                  return windowClickEventAspect.unRegisterToDocumentClickEvent.bind(windowClickEventAspect);
              }, 'unRegisterToDocumentClickEvent')
          },
          Animations: {
              animationProperties: propsSelectorsUtils.createComponentSantaTypeFetcher(() => animations.animationProperties)
          },
          ServiceTopology: {
              scriptsDomainUrl: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getScriptsDomainUrl(), 'scriptsDomainUrl'),
              staticMediaUrl: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getStaticMediaUrl(), 'staticMediaUrl'),
              scriptsLocationMap: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.serviceTopology.scriptsLocationMap, 'scriptsLocationMap'),
              getMediaFullStaticUrl: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getMediaFullStaticUrl, 'getMediaFullStaticUrl')
          },
          BrowserFlags: {
              cssFiltersSupported: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteDataUtils.getBrowserFlag(siteData, 'cssFiltersSupported'), 'cssFiltersSupported')
          },
          Images: {
              onImageUnmount: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.onImageUnmount, 'onImageUnmount')
          },
          __DangerousSantaTypes: {
              getRenderedMasterPageHeight: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => () => _.get(siteData.measureMap, ['height', 'masterPage']) || _.get(siteData.measureMap, ['height', 'SITE_PAGES']), 'getRenderedMasterPageHeight'),
              getWindowSize: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => () => ({
                  width: _.get(siteData.measureMap, ['width', 'screen']),
                  height: _.get(siteData.measureMap, ['height', 'screen'])
              }), 'getWindowSize')
          },
          PageGroup: {
              stubifyPage: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => coreUtils.stubPageUtil.stubifyPage.bind(
                  null,
                  siteAPI.getActionQueue(),
                  siteAPI.getDisplayedDAL(),
                  siteAPI.getPointers(),
                  siteData.getViewMode()
              ), 'stubifyPage'),
              pagesToRender: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => {
                  const allPagesToRender = _.union(siteData.getPrefetchPages(), siteData.getVisitedPages(), [siteData.getCurrentUrlPageId()]);
                  const displayedJsonDal = siteAPI.getDisplayedDAL();
                  const resolvedDataMapsPointer = pointers.page.getResolvedDataMapsPointer();
                  const existingPagesIds = displayedJsonDal.getKeys(resolvedDataMapsPointer);
                  return _.intersection(allPagesToRender, existingPagesIds);
              }, 'pagesToRender'),
              createPageProps: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => (pageClass, pageId, isFirstPage) => {
                  if (!pointers.page.isExists(pageId)) {
                      return null;
                  }

                  const pageProps = propsBuilderUtil.getRootProps(pageClass, pageId, siteAPI);
                  if (pageProps.rootNavigationInfo && pageProps.rootNavigationInfo.routerDefinition) {
                      pageProps.key = pageProps.rootId + pageProps.rootNavigationInfo.routersRendererIndex;
                  }
                  pageProps.firstPage = isFirstPage;
                  // This is ugly and will be removed when mobxObserverWrapperProps will be moved to context
                  pageProps.mobxObserverWrapperProps = siteAPI._site.mobxObserverWrapperProps;
                  pageProps.onRendered = _.once(() => {
                      const widgetAspect = siteAPI.getSiteAspect('WidgetAspect');
                      widgetAspect.getWidgetHandler().handleEvent(pageProps.rootId, 'onRendered');
                  });

                  return pageProps;
              }, 'createPage')
          },
          Theme: {
              all: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getAllStylesFromPossiblyRenderedRoots(), 'allTheme'),
              colors: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getColorsMap(), 'themeColor'),
              colorsMap: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getColorsMap(), 'colorsMap'),
              THEME_DATA: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getGeneralTheme(), 'THEME_DATA')
          },
          SiteButton: {
              link: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const compData = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compData, state, props);
                  if (!_.get(compData, 'link')) {
                      return null;
                  }
                  const linkRenderInfo = state.fetchSantaType(santaComponents.santaTypesDefinitions.Link.renderInfo, state, props);
                  const rootNavigationInfo = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.rootNavigationInfo, state, props);
                  return coreUtils.linkRenderer.renderLink(compData.link, linkRenderInfo, rootNavigationInfo);
              }),
              impliedLink: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  if (siteData.isInSSR() || props.noAutoLinkGeneration) {
                      return;
                  }

                  const compData = props.compData || state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compData, state, props);
                  if (!compData) {
                      return;
                  }
                  const isMobileView = state.fetchSantaType(santaComponents.santaTypesDefinitions.isMobileView, state, props);

                  const includedPatterns = coreUtilsLib.anchorTagsGenerator.getIncludedPatterns(experiment, isMobileView);
                  return _.head(coreUtilsLib.anchorTagsGenerator.findDataForAnchors(coreUtilsLib.xssUtils.filterHtmlString(compData.label), includedPatterns));
              })
          },
          WRichText: {
              Links: propsSelectorsUtils.createComponentSantaTypeFetcher((state, props) => {
                  const compData = props.compData || state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.compData, state, props);

                  if (_.get(compData, ['linkList'], []).length === 0) {
                      return null;
                  }

                  const linkRenderInfo = state.fetchSantaType(santaComponents.santaTypesDefinitions.Link.renderInfo, state, props);
                  const rootNavigationInfo = state.fetchSantaType(santaComponents.santaTypesDefinitions.Component.rootNavigationInfo, state, props);
                  return _.transform(compData.linkList, function (acc, linkData) {
                      acc[`#${linkData.id}`] = coreUtils.linkRenderer.renderLink(linkData, linkRenderInfo, rootNavigationInfo);
                  }, {});
              }, true)
          },
          Link: {
              renderInfo: state => coreUtils.wixUrlParser.utils.getResolvedSiteData(state.siteData)
          },
          WixAds: {
              wixTopAdsHeight: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getWixTopAdHeight(), 'wixTopAdsHeight')
          },
          WixUserSantaTypes: {
              userLanguage: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => coreUtils.wixUserApi.getLanguageFromSiteData(siteData), 'userLanguage')
          },
          JsonLd: {
              renderer: propsSelectorsUtils.createGlobalSantaTypesFetcher(siteAPI.setPageJsonldImmediate, 'jsonLd')
          },
          Browser: {
              browser: propsSelectorsUtils.createGlobalSantaTypesFetcher(() => siteData.getBrowser(), 'browser')
          }
      };
  };
});
