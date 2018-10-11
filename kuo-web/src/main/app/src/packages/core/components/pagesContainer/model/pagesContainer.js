import compFactory from '@packages/compUtils/compFactory';

class PagesContainer {
  constructor(option) {
    Object.assign(this, option);
  }
}

compFactory.registerCompModel('mila.components.core.PagesContainer', PagesContainer);

export default PagesContainer;
