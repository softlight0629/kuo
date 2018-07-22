import Opts from '../Opts';

export default {

  create: (opt, factory) => {
    if (factory) {
      return factory(opt);
    }

    return new Option(opt);
  }
}
