import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class PageGroup extends Component {

  render() {
    return (
      <div>PageGroup</div>
    )
  }
}

compRegistrar.register('mila.components.core.PageGroup', PageGroup);

export default PageGroup;
