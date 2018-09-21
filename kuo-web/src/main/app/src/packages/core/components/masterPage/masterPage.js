import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compFactory from '@packages/compUtils/compFactory';

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


compFactory.register('mila.components.core.MasterPage', MasterPage);

export default MasterPage;
