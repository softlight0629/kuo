import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compRegistrar from '@packages/compUtils/compRegistrar';

class MasterPage extends Component {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

MasterPage.propTypes = {
  isMobileView: PropTypes.bool,
  style: PropTypes.object,
}


compRegistrar.register('mila.component.core.MasterPage', MasterPage);

export default MasterPage;
