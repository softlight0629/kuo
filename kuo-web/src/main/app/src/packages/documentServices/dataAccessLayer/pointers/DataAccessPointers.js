import * as _ from 'lodash';
import pointerGeneratorsRegistry from '../pointers/pointerGeneratorsRegistry';

function addFunctionsToNameSpace(pointersCache, boundedCache) {
  const pointersGenerators =  pointerGeneratorsRegistry.getPointersGenerators();

  _.forEach(pointersGenerators, (functions, name) => {
    this[name] = _.mapValues(functions, func => {
      return func.bind(functions, pointersCache.getItemInPath, boundedCache);
    });
  });

}

// 将所有的Pointes都挂在这里
class DataAccessPointers {

  constructor(pointersCache) {
    const boundedCache = pointersCache.getBoundCacheInstance(false);
    addFunctionsToNameSpace.call(this, pointersCache, boundedCache);
  }
}

export default DataAccessPointers;
