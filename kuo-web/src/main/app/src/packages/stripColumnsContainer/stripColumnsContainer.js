import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class StripColumnsContainer extends Component {

  render() {
    const { astm } = this.props;
    return (
      <div id={astm.id}>
        hellowr
      </div>
    )
  }
}

compRegistrar.register('mila.components.view.StripColumnsContainer', StripColumnsContainer);

export default StripColumnsContainer;
