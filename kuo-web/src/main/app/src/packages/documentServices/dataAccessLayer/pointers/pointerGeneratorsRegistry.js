
const types = {};

const pointersGenerators = {};

export default {
  registerPointerType: (name, findItemFunction) => {
    types[name] = {
      findItemFunction,
    };
  },

  // 挂载dal 对象上
  registerDataAccessPointersGenerator(name, pointerGeneratorFunctions) {
    pointersGenerators[name] = pointerGeneratorFunctions;
  },

  getPointersGenerators() {
    return pointersGenerators;
  },

  getAllTypes() {
    return types;
  }
}
