import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compFactory from '@packages/compUtils/compFactory';


class MasterPage extends Component {

  render() {
    const {id, isPreviewMode, isMobileView } = this.props;

    return (
      <div id="masterPage" rootId="masterPage" style={{ top: 0, width: '100%' }}>
        { }
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
