import * as _ from 'lodash';

function swap(arr, i, j) {
  const itemI = _.get(arr, i);
  const itemJ = _.get(arr, j);

  if (!_.isArray(arr) || _.isUndefined(itemI) || _.isUndefined(itemJ)) {
      throw new Error('Invalid arguments');
  }
  return _.map(arr, (val, index) => {
      if (index === i) {
          return itemJ;
      }
      if (index === j) {
          return itemI;
      }
      return val;
  });
}

const asArray = items => {
  if (!items) {
      return [];
  }

  if (items.length || items.length === 0) {
      return _.compact(items);
  }

  return [items];
};

/**
* Applies action on all components in compRefs, using _.forEach
* @param action
* @param compRefs
* @returns {*}
*/
const applyForAll = _.curry((action, compRefs) => {
  const compsArr = asArray(compRefs);
  _.forEach(compsArr, action);
});

/**
* Applies action on the first component in compRefs
* @param action
* @param compRefs
* @returns {*}
*/
const applyForFirst = _.curry((action, compRefs) => {
  const compsArr = asArray(compRefs);
  return action(_.head(compsArr));
});

/**
* Throws if compRefs is multi-component
* Will apply action on the first comp in compRefs, only if compRefs is a single comp.
* @param {string} actionName
* @param {function} action
* @param compRefs
* @returns {*}
*/
const applyForFirstAndThrowIfMulti = _.curry((actionName, action, compRefs) => {
  const compsArr = asArray(compRefs);
  if (compsArr.length > 1) {
      throw new Error(`${actionName} not supported for multiselect`);
  }
  return action(_.head(compsArr));
});

const isMultiselect = compRefs => {
  const compsArr = asArray(compRefs);
  return compsArr.length > 1;
};

/**
* Check predicate is truthy for all compRefs
* @param predicate
* @param compRefs
*/
const validateForAll = (predicate, compRefs) => {
  const compsArr = asArray(compRefs);
  return _.every(compsArr, predicate);
};

/**
* Check predicate is truthy for some of compRefs
* @param predicate
* @param compRefs
*/
const validateForSome = (predicate, compRefs) => {
  const compsArr = asArray(compRefs);
  return _.some(compsArr, predicate);
};

/**
* Check that compRefs only contain a single item, and validate predicate on that comp.
* Returns false if compRefs is multicomponents
* @param predicate
* @param compRefs
* @returns {boolean|*}
*/
const checkSingleAndValidate = (predicate, compRefs) => {
  const compsArr = asArray(compRefs);
  return compsArr.length === 1 && predicate(_.head(compsArr));
};

export default {
  swap,
  asArray,
  isMultiselect,
  applyForAll,
  applyForFirst,
  applyForFirstAndThrowIfMulti,
  validateForAll,
  validateForSome,
  checkSingleAndValidate,
}
