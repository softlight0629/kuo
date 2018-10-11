import compFactory from '@packages/compUtils/compFactory';

class FooterContainer {

  constructor(option) {
    Object.assign(this, option);
  }
}


compFactory.registerCompModel('mila.components.core.FooterContainer', FooterContainer);

export default FooterContainer;
