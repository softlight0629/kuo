import { Spec } from '../../../common';
import { observable } from 'mobx';

class MenuSpec extends Spec {

  @observable gap;

  constructor({ gap, ...rest }) {
    super(rest);

    this.gap = gap;
  }

  serialize() {
    return {
      ...(super.serialize()),
      gap: this.gap,
    }
  }
}

export default MenuSpec;
