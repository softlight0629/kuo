import { Spec } from '../entity';

export default {
  create: (option, factory) => {
    if (factory) {
      return factory(option);
    }

    return new Spec(option);
  }
};
