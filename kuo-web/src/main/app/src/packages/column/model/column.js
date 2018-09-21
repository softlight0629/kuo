import BaseContainerComp from '@packages/components/core/baseContainerComp';
import Spec from '@packages/components/core/spec';
import compFactory from '@packages/compUtils/compFactory';

class Column extends BaseContainerComp {

  constructor(option) {
    super(option);

    const { spec, dataQuery, propQuery, designQuery } = option;
    this.id = this.uniqId('comp-');
    this.kind = 'Column';
    this.type = 'Container';
    this.componentType = 'mila.components.Column';
    this.dataQuery = dataQuery;
    this.designQuery = designQuery;
    this.propQuery = propQuery;
  }
}

compFactory.registerCompModel('mila.components.view.Column', Column);

export default Column;
