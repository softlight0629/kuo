import compFactory from '@packages/compUtils/compFactory';

export default {

  register(name, componentClass) {
    compFactory.register(name, componentClass);
    return this;
  },

  getComp(name) {
    return compFactory.getCompReactClass(name);
  },
};
