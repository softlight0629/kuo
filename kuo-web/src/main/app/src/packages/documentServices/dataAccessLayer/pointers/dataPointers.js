import * as _ from 'lodash';
import constants from '@packages/documentServices/constants/constants';
import pointerGeneratorsRegistry from './pointerGeneratorsRegistry';

const masterPageId = 'masterPage';
const types = constants.DATA_TYPES;

function findDataItem(type, currentRootIds, getItemInPath, dataPointer) {
  const typeKey = getTypeKey(type);
  const pagesData = getItemInPath(['pagesData']);

  return _.reduce(pagesData, (currentPath, page, pageId) => {
    const newPath = getPageDataPath(type, pageId, typeKey).concat(dataPointer.id);
    if (!currentPath && getItemInPath(newPath)) {
      return newPath;
    }
    return currentPath;
  }, null);
}

function getTypeKey(type) {
  const typeKey = constants.PAGE_DATA_DATA_TYPES[type];
  if (typeKey) {
    return typeKey;
  }

  throw new Error(`there is no such data type ${type}`);
}

function getPageDataPath(type, pageId, typeKey) {
  return ['pagesData', pageId, 'data', typeKey || getTypeKey(type)];
}

_.forEach(DATA_TYPES, type => {
  pointerGeneratorsRegistry.registerPointerType(type, findDataItem.bind(null, type));
});

const getterFunctions = {

  getDataItem(getItemAtPath, cache, dataItemId, pageId) {
    return this.getItem(cache, types.data, dataItemId, pageId);
  },

  getDataItemWithPredicate(getItemAtPath, cache, predicate, pageId) {
    return _.head(this.getDataItemsWithPredicate(getItemAtPath, cache, predicate, pageId));
  },
  
  getDataItemsWithPredicate(getItemAtPath, cache, predicate, pageId) {
    const pid = pageId || 'masterPage';
    const path = getPageDataPath(types.data, pid);
    const items = getItemAtPath(path);

    return _.map(_.filter(items, predicate), item => {
      return this.getDataItem(getItemAtPath, cache, item.id, pid);
    });
  },

  getDesignItem(getItemAtPath, cache, designItemId, pageId) {
    return this.getItem(getItemAtPath, cahe, types.design, designItemId, pageId);
  },

  getDesignItemsWithPredicate(getItemAtPath, cache, predicate, pageId) {
    const pid = pageId || 'masterPage';
    const path = getPageDataPath(types.design, pid);
    const items = getItemAtPath(path);

    return _.map(_.filter(items, predicate), item => {
      return this.getDesignItem(getItemAtPath, cache, item.id, pid);
    });
  },

  getPropertyItem(getItemAtPath, cache, propertyItemId, pageId) {
    return this.getItem(getItemAtPath, cache, types.prop, propertyItemId, pageId);
  },

  getItem(getItemAtPath, cache, type, id, pageId) {
    const path = getPageDataPath(type, pageId);
    path.push(id);
    return cache.getPointer(id, type, path);
  },

  getDataItemFromMaster(getItemAtPath, cache, id) {
    return this.getDataItem(getItemAtPath, cache, id, masterPageId);
  },
}

pointerGeneratorsRegistry.registerDataAccessPointersGenerator('data', getterFunctions);
