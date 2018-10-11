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

const masterPageId = 'masterPage';

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

  getMasterPage(getItemAtPath, cache) {
    return this.getPage(getItemAtPath, cache, masterPageId);
  },

  getPage(getItemAtPath, cache, id, viewMode) {
    let pointer = cache.getPointer(id, viewMode);
    if (!pointer) {
      const path = getPagePath(id, viewMode);
      const page = getItemAtPath(path);
      if (!page) {
        return null;
      }
      pointer = cache.getPointer(id, viewMode, path);
    }
    return pointer;
  },

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
