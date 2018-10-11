import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class PagesContainer extends Component {

  render() {
    return (
      <div>pagesContainer</div>
    )
  }
}

compRegistrar.register('mila.components.core.PagesContainer', PagesContainer);

export default PagesContainer;
