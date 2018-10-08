import * as _ from 'lodash';
import pointerGeneratorsRegistry from '../pointers/pointerGeneratorsRegistry';

function addFunctionsToNameSpace(pointersCache) {
  const pointersGenerators =  pointerGeneratorsRegistry.getPointersGenerators();

  _.forEach(pointersGenerators, (functions, name) => {
    this[name] = _.mapValues(functions, func => {
      return func.bind(functions, pointersCache.getItemInPath);
    });
  });

}

// 将所有的Pointes都挂在这里
class DataAccessPointers {

  constructor(pointersCache) {
    addFunctionsToNameSpace.call(this, pointersCache);
  }
}

export default DataAccessPointers;
