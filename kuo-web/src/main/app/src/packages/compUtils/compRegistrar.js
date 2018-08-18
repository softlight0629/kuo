
const comps = {};

export default {

  register(name, compClass) {
    comps[name] = compClass;
  },

  getComp(name) {
    return comps[name];
  }
};
