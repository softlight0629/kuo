
class Opts {}

const OptsFactory = {

  create: (opt, factory) => {
    if (factory) {
      return factory(opt);
    }

    return new Option(opt);
  }
}

export default OptsFactory;
