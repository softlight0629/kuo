
const skins = {};

export default {

  register(name, skinOfJson) {
    skins[name] = skinOfJson;
  },

  getSkin(name) {
    return skins[name];
  }
}
