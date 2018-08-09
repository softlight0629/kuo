import { State } from '../entity'

export default {

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
