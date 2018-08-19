import { observable } from 'mobx';
import Spec from '@packages/components/core/spec';

class ButtonSpec extends Spec {

  @observable arrow;

  @observable liftShadow;

  constructor({ 
    arrow,
    liftShadow,
    ...rest,
  }) {
    super(rest);

    this.arrow = arrow;
    this.liftShadow = liftShadow;
  }

  serialize() {
    return {
      ...(super.serialize()),
      arrow: this.arrow,
    }
  }
}

export default ButtonSpec;
