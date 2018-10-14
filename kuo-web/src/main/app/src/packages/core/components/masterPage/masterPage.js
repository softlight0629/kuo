import React, { Component } from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import compFactory from '@packages/compUtils/compFactory';
import Renderer from '@packages/components/Renderer';
import constants from '@packages/documentServices/constants/constants';
import './masterPage.less';

const viewModes = constants.VIEW_MODES;

function getStructureProperty(ps, id, property) {

  return function _getStructureProperty(id, property) {
    const pointer = ps.pointersCache.getPointer(id, viewModes.DESKTOP);
    const structure = ps.dalCache.get(pointer);
  
    return _.get(structure, property);
  }
}

function getStructure(ps, id) {
  return function _getStructure(id, property) {
    const pointer = ps.pointersCache.getPointer(id, viewModes.DESKTOP);
    return ps.dalCache.get(pointer);
  }
}

function getCompClass(compType) {
  return compFactory.getCompReactClass(compType);
}

class MasterPage extends Component {

  render() {
    // const SiteHeader = compFactory.getCompReactClass('mila.components.core.HeaderContainer');
    const { components, ps } = this.props;
    return (
      <div id="masterPage" rootId="masterPage" style={{ top: 0, width: '100%', position: 'static', height: '1443px' }}>
        <Renderer rootCompsIds={components} getStructureProperty={getStructureProperty(ps)} getStructure={getStructure(ps)} getCompClass={getCompClass} ps={ps} />
        {/* <SiteHeader skin="mila.viewer.skins.screenwidthcontainer.DefaultScreen" id="SITE_HEADER" styleId="styleId-xxasa"/> */}
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
