import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compFactory from '@packages/compUtils/compFactory';
// import RootComponent from '@packages/components/RootComponent';

import './masterPage.less';



class MasterPage extends Component {

  render() {
    const SiteHeader = compFactory.getCompReactClass('mila.components.core.HeaderContainer');
    return (
      <div id="masterPage" rootId="masterPage" style={{ top: 0, width: '100%', position: 'static', height: '1443px' }}>
        <SiteHeader skin="mila.viewer.skins.screenwidthcontainer.DefaultScreen" id="SITE_HEADER" styleId="styleId-xxasa"/>
        {/* <header id="SITE_HEADER">
          <div id="SITE_HEADERscreenWidthBackground"></div>
          <div id="SITE_HEADERcenteredContent">
            <div id="SITE_HEADERbg">
              <div id="SITE_HEADERinlineContent"></div>
            </div>
          </div>
        </header> */}
        <div id="PAGES_CONTAINER"></div>
        <footer id="SITE_FOOTER"></footer>
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
