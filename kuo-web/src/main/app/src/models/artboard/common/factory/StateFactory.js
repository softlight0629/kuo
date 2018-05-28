
export default {

  create: (factory, option) => {
    const keys = Object.keys(option);
    const o = {};
    for (const k of keys) {
      o[k] = factory[k](option[k]);
    }
    return o;
  }
}
