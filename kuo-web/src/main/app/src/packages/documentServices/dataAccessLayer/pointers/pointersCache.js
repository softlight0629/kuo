import * as _ from 'lodash';
import pointerGeneratorsRegistry from './pointerGeneratorsRegistry';
// 全局 pointers 实例，所有的实例都会挂在这个实例树上
// 可以基于此数据，能够做多个 getter 来查找到特性类型的实例对象 

// 指针维护一份全局的结构树, 快速指向 cache 实例
// 维护全局 cache 关系树

function getItemInPath(cacheJson, path) {
  let obj = cacheJson;
  _.forEach(path, pathPart => {
    if (_.isUndefined(obj)) {
      return false;
    }

    obj = obj[pathPart];
  });

  return obj;
}

function isEqualPath(a, b) {
  if (!a) {
      return !b;
  }
  if (!b || b.length !== a.length) {
      return false;
  }
  for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
          return false;
      }
  }
  return true;
}

function _getPath(pointer) {
  const typeCache = this.cache[pointer.type];
  if (!typeCache) {
    return null;
  }

  let path = typeCache[pointer.id];

  return path;
}

class PointersCache {

  constructor(cacheJson) {
    this.cache = {};
    this.itemFinders = {};
    this.getItemInPath = getItemInPath.bind(null, cacheJson);

    const types = pointerGeneratorsRegistry.getAllTypes();

    _.forOwn(types, (typeDesc, typeName) => {
      this.cache[typeName] = {};
      this.itemFinders[typeName] = typeDesc.findItemFunction;
    });
  }

  setPath(pointer, path) {
    if (path) {
      this.cache[pointer.type][this.resolveId(pointer.id, pointer.type)] = path;
    }
  }

  getBoundCacheInstance() {
    return {
      getAllPointers: this.getAllPointers.bind(this),
      getPath: this.getPath.bind(this),
      getPointer: this.getPointer.bind(this),
      setPath: this.setPath.bind(this),
      resolveId: this.resolveId.bind(this),
    }
  }

  getPath(pointer) {
    if (!pointer) {
      return;
    }

    const p = {
      type: pointer.type,
      id: this.resolveId(pointer.id, pointer.type),
    }

    return _getPath.call(this, p);
  }

  getPointer(id, type, path) {
    const typeCache = this.cache[type];
    const pointer = {
      id,
      type,
    };

    if (path) {
      if (!isEqualPath(typeCache[id], path)) {
        typeCache[id] = path;
      }
    }

    return typeCache[id] ? pointer : null;
  }

  getAllPointers() {}

  resolveId(id, type) {
    return id;
  }
}

export default PointersCache;
