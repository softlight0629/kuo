import * as _ from 'lodash';
import pointerGeneratorsRegistry from './pointerGeneratorsRegistry';

function addPointerGeneratorFunctions(namespace, getWrappedGetterFunction) {
  const pointersGenerators = pointerGeneratorsRegistry.getPointersGenerators();
  _.forEach(pointersGenerators, (functions, name) => {
    namespace[name] = _.mapValues(functions, func => {
      return getWrappedGetterFunction(func, functions);
    });
  });
}

function displayedJson(pointersCache) {
  const boundCache = pointersCache.getBoundCacheInstance();

  const getWrappedGetterFunction = function (func, functions) {
    return function () {
      const args = _.toArray(arguments);
      const concatedArgs = [pointers.getItemInPath, boundCache].concat(args);
      const result = func.apply(functions, concatedArgs);
      return result;
    }
  }
}

class DataAccessPointers {

  constructor(pointersCache) {
    if (pointersCache) {
      displayedJson.call(this, pointersCache);
    }
  }

  isSamePointer(p1, p2) {
    return p1 && p2 && p1.type === p2.type && p1.id === p2.id;
  }

  getPointerType(pointer) {
    switch (pointer.type) {
      case 'DESKTOP':
      case 'MOBILE':
        return 'component';
      default:
        return pointer.type;
    }
  }
}

export default DataAccessPointers;
