import { Meta } from '../entity';

export default {
  create: (option, factory) => {
    if (factory) {
      return factory(option);
    }

    return new Meta(option);
  }
};
