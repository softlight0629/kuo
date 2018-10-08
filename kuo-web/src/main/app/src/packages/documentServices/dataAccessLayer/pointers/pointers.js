
import * as _ from 'lodash';
import constants from '../../constants/constants';

const { DATA_MAPS } = constants.pointers.data;
const { PROPERTY_TYPES } = constants.pointers.components;

const COMPONENT_POINTER_TYPE = 'COMPONENT';
const THEME_DATA_POINTER_TYPE = 'THEME_DATA';

const DATA_POINTTER_TYPES = _.mapValues(DATA_MAPS, (v, type) => type);
const createTypedPointer = type => id => ({ id: id.replace('#', ''), type});

export default {
  getPath: ({id, type}) => {
    if (type === COMPONENT_POINTER_TYPE) {
      return ['structure', id];
    }
  }
}
