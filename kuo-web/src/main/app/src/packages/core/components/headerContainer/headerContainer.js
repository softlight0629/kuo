import React, { Component } from 'react';
import compFactory from '@packages/compUtils/compFactory';

class HeaderContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  isScreenWidth() {
    return true;
  }

  render() {
    const { isMobileView, isMobileDevice, structure } = this.props;

    return (
      <header className="header_container">
        <div className="hc_screen_bg"></div>
        <div className="hc_centered_content">
          <div className="hc_bg"></div>
          <div className="hc_inline_content"></div>
        </div>
      </header>
    )
  }
}

HeaderContainer.propTypes = {
}

compFactory.register('mila.components.core.HeaderContainer', HeaderContainer);

export default HeaderContainer;
