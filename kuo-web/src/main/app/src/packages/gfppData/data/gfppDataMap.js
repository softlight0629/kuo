import * as _ from 'lodash';
import componentsgfppMap from './components/componentsGfppMap';

const compsInfo = _.assign({}, componentsgfppMap);

export default {
  registerComponent(componentType, data) {
    compsInfo[componentType] = data;
  },

  getComponentData(componentType) {
    return compsInfo[componentType];
  }
}
