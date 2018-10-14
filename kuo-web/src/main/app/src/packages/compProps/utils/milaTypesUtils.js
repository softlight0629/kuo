import * as _ from 'lodash';

function isMilaTypeProps(propType) {
  return propType.id || _.isFunction(propsType.fetch);
}

const getMilaTypesFromPropTypes = _.memoize(propTypes => _.pickBy(propTypes, isMilaTypeProps));

const getMilaPropsSelectorForReactClass = _.memoize(compClass => {
  const milaTypes = compClass.propTypes && getMilaTypesFromPropTypes(compClass.propTypes);

  return (state, props) => {
    return _.mapValues(milaTypes, propType => {
      if (propType.fetch) {
        return propType.fetch(state, props);
      }

      return state.fetch(propType, state, props);
    });
  }
});

export default {
  getMilaTypesFromPropTypes,
  getMilaPropsSelectorForReactClass,
}
