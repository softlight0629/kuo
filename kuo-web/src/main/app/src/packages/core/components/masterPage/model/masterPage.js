import compFactory from '@packages/compUtils/compFactory';

class MasterPage {

  constructor(option) {
    Object.assign(this, option);    
  }
}

compFactory.registerCompModel('mila.components.core.MasterPage', MasterPage);

export default MasterPage;
