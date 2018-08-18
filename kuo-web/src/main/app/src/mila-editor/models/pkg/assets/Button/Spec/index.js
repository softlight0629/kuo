import { Spec } from '../../../core/entity';
import { observable } from 'mobx';

class ButtonSpec extends Spec {

  @observable arrow;

  constructor({ arrow, ...rest }) {
    super(rest);

    this.arrow = arrow;
  }

  serialize() {
    return {
      ...(super.serialize()),
      arrow: this.arrow,
    }
  }
}

export default ButtonSpec;
