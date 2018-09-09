import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class SiteBackground extends Component {

  render() {
    return (
      <div></div>
    )
  }
}

compRegistrar.register('mila.components.core.SiteBackground', SiteBackground);

export default SiteBackground;
