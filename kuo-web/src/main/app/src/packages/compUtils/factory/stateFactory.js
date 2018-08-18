class State {
  constructor() {
    this.state = {};
  }

  push(k, v) {
    this.state[k] = v;

    Object.defineProperty(this, k, {
      configurable:  true,
      get() {
        return this.state[k];
      },
    });
  }

  serialize() {
    const keys = Object.keys(this.state);
    const o = {};

    for (const k of keys) {
      o[k] = this.state[k].serialize();
    }
    return o;
  }
}

const StateFactory = {

  create: (factory, option) => {
    const state = new State();
    if (!factory || !option) {
      return state;
    }
    
    const keys = Object.keys(option);
    for (const k of keys) {
      state.push(k, factory[k](option[k]));
    }

    return state;
  }
}

export default StateFactory;
