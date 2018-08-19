import BaseContainerComp from '@packages/components/core/baseContainerComp';
import Spec from '@packages/components/core/spec';
import compRegistrar from '@packages/compUtils/compRegistrar';

class Column extends BaseContainerComp {

  constructor(option) {
    super(option);

    const { spec, dataQuery, propQuery } = option;
    this.id = this.uniqId('comp-');
    this.kind = 'Column';
    this.type = 'Container';
    this.componentType = 'mila.components.Column';
    this.spec = new Spec(spec);
    this.dataQuery = {};
    this.propQuery = {};
  }
}

compRegistrar.register('mila.components.model.Column', Column);

export default Column;
