import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compFactory from '@packages/compUtils/compFactory';

class Page extends Component {

  render() {
    return (
      <div></div>
    )
  }
}

compFactory.register('mila.components.core.Page', Page);

export default Page;
