import compFactory from '@packages/compUtils/compFactory';

class MasterPage {

  constructor(option) {
    this.id = option.id;
  }
}

compFactory.registerCompModel('mila.components.core.MasterPage', MasterPage);

export default MasterPage;
