import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class PagesContainer extends Component {

  render() {
    const isMobile = !!(this.porps.isMobileView || this.props.isMobileDevice);
    const { childrenToRender, siteWidth } = this.props;

    return (
      <div className="pages_container">
        <div className="pcs_screen_bg"></div>
        <div className="pcs_centered_content">
          <div className="pcs_bg"></div>
          <div className="pcs_inline_content">
            <div id="site_pages">
              <div data-ismobile={isMobile} data-site-width={siteWidth} class="p2" id="domkj">
                <div id="domkjbg" class="p2_bg"></div>
                <div className="p2_inline_content">
                  { childrenToRender }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

compRegistrar.register('mila.components.core.PagesContainer', PagesContainer);

export default PagesContainer;
