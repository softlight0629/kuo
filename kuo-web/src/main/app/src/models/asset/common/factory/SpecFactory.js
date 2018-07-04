import Spec from '../Spec';

export default {
  create: (option, factory) => {
    if (factory) {
      return factory(option);
    }

    return new Spec(option);
  }
};
