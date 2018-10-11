import React, { Component } from 'react';
import * as _ from 'lodash';
import compFactory from '@packages/compUtils/compFactory';
import skinBasedComp from '@packages/mixin/skinBasedComp';
import skinsJson from '@packages/core/components/screenWidthContainer/screenWithSkins/skins.json.js';

const headerSkins = _.pick(skinsJson, [
  'mila.viewer.skins.screenwidthcontainer.DefaultScreen',
]);

class HeaderContainer extends Component {

  constructor(props) {
    super(props);

    skinBasedComp(headerSkins, this);

    this.state = {};
  }

  isScreenWidth() {
    return true;
  }

  getSkinProperties() {
    
    return {
      '': {
        tagName: 'header',
        style: _.defaults(
          { position: 'absolute' },
        ),
      },
      screenWidthBackground: {
        style: {
          left: 0,
          width: '100%',
        },
      },
      bg: {
        style: this.props.defaultBackgroundStyle,
      },
      inlineContent: {
        // children: this.getChildenRenderer({ contentArea: this.props.defaultContentArea})
      }
    }
  }

}

HeaderContainer.propTypes = {
}

compFactory.register('mila.components.core.HeaderContainer', HeaderContainer);

export default HeaderContainer;
