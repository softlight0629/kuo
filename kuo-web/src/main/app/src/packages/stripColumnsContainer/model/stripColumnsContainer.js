import BaseContainerComp from '@packages/components/core/baseContainerComp';
import Spec from '@packages/components/core/spec';
import compRegistrar from '@packages/compUtils/compRegistrar';
import PropQuery from './propQuery';
import DataQuery from './dataQuery';

class StripColumnsContainer extends BaseContainerComp {

  constructor(option) {
    super(option);

    const { spec, dataQuery = {}, propQuery = {} } = option;
    this.kind = 'StripColumnsContainer';
    this.type = 'Container';
    this.componentType = 'mila.components.StripColumnsContainer';
    this.spec = new Spec(spec);
    this.dataQuery = new DataQuery(dataQuery);
    this.propQuery = new PropQuery(propQuery);
  }
}

compRegistrar.register('mila.components.model.StripColumnsContainer', StripColumnsContainer);

export default StripColumnsContainer;
