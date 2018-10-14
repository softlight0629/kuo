import compFactory from '@packages/compUtils/compFactory';

class HeaderContainer {
  constructor(option) {
    Object.assign(this, option);
  }
}


compFactory.registerCompModel('mila.components.core.HeaderContainer', HeaderContainer);

export default HeaderContainer;
