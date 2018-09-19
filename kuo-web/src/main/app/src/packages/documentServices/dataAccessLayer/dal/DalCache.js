import * as _ from 'lodash';

function isPathExist() {}

function removeValueInPath() {}

// 全局实例存储, 各种 type 的 cache 实例都在这里
class DalCache {

  constructor(pointersCache) {
    this.cacheJson = {};
    this.pointersCache = pointersCache;
  }

  get(pointer) {
    const path = this.pointersCache.getPath(pointer);
    return this.getByPath(path);
  }

  // ['']
  getByPath(path) {
    if (path) {
      return _.get(this.cacheJson, path);
    }
  }

  set(pointer, data) {
    const path = this.pointersCache.getPath(pointer, true);
    this.setByPath(path, data);
  }
  
  // ['pagesData', 'domkj', 'data', 'doucment_data', 'dataItem-xxxxx'], value
  // ['pagesData', 'structure', 'DESKTOP', 'domkj'] 组件实例都在这里
  setByPath(path, data) {
    if (!_.isArray(path)) {
      throw new Error(`path type is not an array - ${path}`);
    }

    _.set(this.cacheJson, path, data);
  }

  isExist(pointer) {
    const path = this.pointersCache.getPath(pointer);
    return !!path;
  }

  isPathExist(path) {
    return isPathExist(this.cacheJson, path);
  }

  remove(pointer) {
    const path = this.pointersCache.getPath(pointer);
    if (path) {
      const isComponentPointer = pointer.type === 'DESKTOP' || pointer.type === 'MOBILE';
      if (isComponentPointer) {
        const parentId = this.getByPath(path.concat('parent'));
        if (parentId) {
          const parentComponentsPath = path.slice(0, 4).concat(parentId, 'components');
          const siblings = this.getByPath(parentComponentsPath);
        } else {
          const compsMap = path.slice(0, 4);
          this.setByPath(compsMap, {});
        }
      }
      this.removeByPath(path);
    } else {
      throw new Error(`${pointer} pointer does not exist`);
    }
  }

  removeByPath(path) {
    if (!path) {
      throw new Error('path is not valid');
    }

    removeValueInPath(this.cacheJson, path);
  }
}

export default DalCache;
