import * as _ from 'lodash';
import constants from '@packages/documentServices/constants/constants';
import pointerGeneratorsRegistry from './pointerGeneratorsRegistry';

function getFlatPagePath(pageId, viewMode) {
  return getFlatComponentPath(pageId, viewMode, pageId);
}

function getFlatComponentPath(pageId, viewMode, compId) {
  return ['pagesData', pageId, 'structure', viewMode, compId];
}

function getPagePath(pageId) {
  return ['pagesData', pageId, 'structure'];
}

function findCompInPage(getItemAtPath, pointer, pageId) {}

function findComponent(currentRootIds, getItemAtPath, pointer) {}

pointerGeneratorsRegistry.registerPointerType(constants.VIEW_MODES.DESKTOP, findComponent);
pointerGeneratorsRegistry.registerPointerType(constants.VIEW_MODES.MOBILE, findComponent);

const getterFunctions = {
  getMobilePointer() {},

  getDesktopPointer() {},

  isMobile() {},

  isPage() {},

  isPagesContainer() {},

  isMasterPage() {},

  isInMasterPage() {},

  getViewMode() {},

  getChildrenContainer() {},

  getChildren() {},

  getChildrenRecurisively() {},

  getParent() {},

  getSiblings() {},

  getComponent() {},

  getMasterPage() {},

  getPage() {},

  getNewPage() {},

  getLandingPageComponents() {},

  getPagesContainer() {},

  getFooter() {},

  getHeader() {},

  getUnattached() {},

  getPageOfComponent() {},

  isDescendant() {},

  getAllDisplayedOnlyComponents() {},

  registerDisplatedOnlyComponent() {},

  clearDisplayedOnlyComponents() {},

  getAncestorByPredicate() {},
}

pointerGeneratorsRegistry.registerDataAccessPointersGenerator('components', getterFunctions, true);
