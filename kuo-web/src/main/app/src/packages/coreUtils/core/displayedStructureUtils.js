import * as _ from 'lodash';

const DELIMITER = '__'
const getUniqueDisplayedId = (originalId, itemId) => originalId + DELIMITER + itemId
const updateCompIdInPointersMap = ({id}, itemId, updatePointerMap) => updatePointerMap(id, getUniqueDisplayedId(id, itemId))
const isDisplayedComponent = compId => !!getItemId(compId)
const getItemId = uniqueItemId => _.isString(uniqueItemId) ? uniqueItemId.split(DELIMITER)[1] : undefined
const getOriginalId = uniqueItemId => _.isString(uniqueItemId) ? uniqueItemId.split(DELIMITER)[0] : undefined

const uniquePropertyMapperFunctions = {
  dataQuery: getUniqueDisplayedId,
  designQuery: getUniqueDisplayedId,
  id: getUniqueDisplayedId,
  parent: getUniqueDisplayedId,
  layout: value => _.cloneDeep(value),
  components: (value, itemId, updatePointerMap) => {
    return _.map(value, child => _.isString(child) ? getUniqueDisplayedId(child, itemId) : getUniqueStructure(child, itemId, updatePointerMap));
  }
}


function getUniqueFlatStructureMap(compsMap, itemId, updatePointerMap = _.noop) {
  return _.chain(compsMap)
    .map(comp => getUniqueStructure(comp, itemId, updatePointerMap))
    .keyBy('id')
    .value();
}

function getUniqueStructure(structure, itemId, updatePointerMap = _.noop) {
  updateCompIdInPointersMap(structure, itemId, updatePointerMap)
  return _.mapValues(structure, (value, property) => _.invoke(uniquePropertyMapperFunctions, property, value, itemId, updatePointerMap))
}

function getOriginalStructure(itemStructure) {
  return _(itemStructure)
      .omit('parent')
      .mapValues((value, property) => _.invoke(originalPropertyMapperFunctions, property, value) || value)
      .value()
}


const originalPropertyMapperFunctions = {
  dataQuery: getOriginalId,
  designQuery: getOriginalId,
  id: getOriginalId,
  layout: value => _.cloneDeep(value),
  components: value => _.map(value, child => child.id ? getOriginalStructure(child) : getOriginalId(child))
}



export default {
  getUniqueFlatStructureMap,
  getUniqueStructure,
  getOriginalStructure,
  isDisplayedComponent,
  getIemId,
  getUniqueDisplayedId,
  getOriginalId,
}
