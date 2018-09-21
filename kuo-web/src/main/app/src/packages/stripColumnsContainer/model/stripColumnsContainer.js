import BaseContainerComp from '@packages/components/core/baseContainerComp';
import Spec from '@packages/components/core/spec';
import compFactory from '@packages/compUtils/compFactory';
import PropQuery from './propQuery';
import DataQuery from './dataQuery';

class StripColumnsContainer extends BaseContainerComp {

  constructor(option) {
    super(option);

    const { spec, dataQuery, propQuery, designQuery } = option;
    this.kind = 'StripColumnsContainer';
    this.type = 'Container';
    this.componentType = 'mila.components.StripColumnsContainer';
    this.dataQuery = dataQuery;
    this.designQuery = designQuery;
    this.propQuery = propQuery;
  }
}

compFactory.registerCompModel('mila.components.view.StripColumnsContainer', StripColumnsContainer);

export default StripColumnsContainer;
