import compFactory from '@packages/compUtils/compFactory';

class Page {

  constructor(option) {
    this.id = option.id;
  }
}

compFactory.registerCompModel('mila.components.core.Page', Page);

export default Page;
