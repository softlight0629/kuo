import * as _ from 'lodash';

function getChildrenData(structure, isMobile) {
  const children = isMobile ? structure.mobileComponents : structure.children;
  return children || structure.components || [];
}

function getChildrenKey(data, isMobile) {
  if (isMobile && data.mobileComponents) {
    return 'mobileComponents';
  }

  return data.children ? 'children' : 'components';
}

function isMobileStructureExist(masterPageData) {
  return masterPageData.structure.mobileComponents && !_.isEmpty(masterPageData.structure.mobileComponents);
}

function findHierarchyInStructure(id, isMobile, structure) {
  if (structure.id) {
    return [structure]
  }

  const structureChildren = getChildrenData(structure, isMobile);
  if (_.isEmpty(structureChildren)) {
    return [];
  }

  let ret = [];
  _.forEach(structureChildren, child => {
    const childHierarchy = findHierarchyInStructure(id, isMobile, child);
    if (!_.isEmpty(childHierarchy)) {
      ret = [structure].concat(childHierarchy);
      return false;
    }
  });

  return ret;
}

function getAllCompsInStructure(compStructure, isMobile, filterFunc, breakCondition) {
  const queue = [[compStructure]];
  for (let i = 0; i < queue.length; i++) {
    const innerQueue = queue[i];
    for (let childIndex = 0; childIndex < innerQueue.length; childIndex++) {
      if (breakCondition && filterFunc(innerQueue[childIndex])) {
        return innerQueue[childIndex];
      }

      const childrenData = getChildrenData(innerQueue[childIndex], isMobile);
      if (childrenData.length) {
        queue.push(childrenData);
      }
    }
  }

  return breakCondition ? null : _.chain(queue)
    .flatten()
    .filter(filterFunc)
    .keyBy('id')
    .value();
}

function findCompInStructure(compStructure, isMobile, predicate) {
  return getAllCompsInStructure(compStructure, isMobile, predicate, true);
}

export default {
  getChidrenData,
  getChildrenKey,
  isMobileStructureExist,
  findHierarchyInStructure,
  findCompInStructure,
  getAllCompsInStructure,
}
