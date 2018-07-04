import Meta from '../Meta';

export default {
  create: (option, factory) => {
    if (factory) {
      return factory(option);
    }

    return new Meta(option);
  }
};
