import BaseContainerComp from '@packages/components/core/baseContainerComp';
import Spec from '@packages/components/core/spec';
import compRegistrar from '@packages/compUtils/compRegistrar';

class StripColumnsContainer extends BaseContainerComp {

  constructor(option) {
    super(option);

    const { spec, dataQuery, propQuery } = option;
    this.kind = 'StripColumnsContainer';
    this.type = 'Container';
    this.spec = new Spec(spec);
    this.dataQuery = {};
    this.propQuery = {};
  }

}

compRegistrar.register('mila.components.model.StripColumnsContainer', StripColumnsContainer);

export default StripColumnsContainer;
