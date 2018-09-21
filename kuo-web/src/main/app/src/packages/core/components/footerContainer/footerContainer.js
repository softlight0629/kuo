import React, { Component } from 'react';
import compFactory from '@packages/compUtils/compFactory';

class FooterContainer extends Component {

  render() {
    const isMobile = this.props.isMobileView || this.props.isMobileDevice;
    const { childrenToRender } = this.props;
    return (
      <footer class="footer_container">
        <div className="fc_screen_bg"></div>
        <div className="fc_centered_content">
          <div className="fc_bg"></div>
          <div className="fc_inline_cnontent"></div>
        </div>
      </footer>
    )
  }
}

compFactory.register('mila.components.core.FooterContainer', FooterContainer);


export default FooterContainer;
