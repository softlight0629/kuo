import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import PageReactClass from '@packages/core/siteRender/PageReact';
import backgroundInstantiator from '@packages/core/siteRender/backgroundInstantiator';
import componentPropsBuilder from '@packages/core/siteProps/componentPropsBuilder';
import compRegistrar from '@packages/compUtils/compRegistrar';
import SiteAPI from '@packages/core/siteRender/SiteAPI';

const pageReact = React.createFactory(PageReactClass);

function getRootProps(siteAPI) {
  const props = componentPropsBuilder.getRootProps(PageReactClass, this.props.rootId, siteAPI);
  props.structure = _.merge({}, props.structure, {
    id: 'masterPage',
    layout: { position: this.props.siteRootPosition },
    componentType: 'mila.components.core.MasterPage',
  });
  props.ref = this.props.rootId;
  props.refInParent = props.ref;
  props.className = 'site_root';
  props.firstPage = true;
  props.style = {
    width: '100%',
  }

  return props;
}

function createSiteRoot() {
  return (
    <div className="site_root" id="site_root" style={this.getRootStyle()}>
      { pageReact(getRootProps.call(this, this.siteAPI)) }
    </div>
  )
}

function createSiteBg() {
  // return backgroundInstantiator.getBgComponent();
}

function getDesktopModeSiteChildren(shouldRenderPage, siteData) {
  const siteChildren = [
    shouldRenderPage ? createSiteBg.call(this) : null,
    shouldRenderPage ? createSiteRoot.call(this) : null,
  ]

  return siteChildren;
}


function getMobileModeChildren() {}

function isDesktopMode(siteAPI) {
  return true;
  // return !siteAPI.getSiteData().isMobileView();
}

class SiteReact extends Component {

  constructor(props) {
    super(props);

    // this.onAfterLayout = _.once(this.props.onAfterLayout);
    this.siteAPI = new SiteAPI(this);
    this.siteIsReady = false;
    this.siteIsFullyRendered = false;
    this.compRefs = {};

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    this.dead = true;
    this.siteAPI.onSiteUnmount();
  }

  getPrimaryPage() {
    let page = this.getMasterPage();
    if (this.props.rootId === 'masterPage' && page) {
      const primaryPageId = this.props.siteData.getPrimaryPageId();
      page = this.getPageComponent(page, primaryPageId);
    }
    return page;
  }

  getMasterPage() {
    return this.refs[this.props.rootId];
  }

  getPageById(pageId) {
    const masterPage = this.getMasterPage();
    if (pageId === this.props.rootId) {
      return masterPage;
    }
    if (masterPage && this.getPageComponent(masterPage, pageId)) {
      return this.getPageComponent(masterPage, pageId);
    }
  }

  getPageComponent(page, pageId) {
    return _.get(this.getPageRefs(page), pageId);
  }

  getRootStyle() {
    const style = {
      width: '100%',
      top: 0,
    };

    return style;
  }

  getSiteChildren() {
    const { siteData } = this.props;
    console.log(siteData, 'siteData......');
    const siteChildren = isDesktopMode(this.siteAPI) ?
      getDesktopModeSiteChildren.call(this, siteData) :
      getMobileModeChildren.call(this, siteData);

    return siteChildren;
  }


  render() {
    const siteData = this.props.siteData;
    // const shouldRenderPage = this.siteAPI.isPageAllowed()

    // if (!shouldRenderPage) {
    // }

    const className = this.props.className;

    return (
      <div className={className}>
        renderr.....
        { this.getSiteChildren() }
      </div>
    )
  }
}

SiteReact.defaultProps = {
  onAfterLayout: _.noop,
  siteRootPosition: 'static',
  rootId: 'masterPage',
};

SiteReact.propTypes = {
  rootId: PropTypes.string,
  siteRootPosition: PropTypes.oneOf(['static', 'relative']),
  siteData: PropTypes.object,
  onAfterLayout: PropTypes.func,
  getSiteContainer: PropTypes.func,
  className: PropTypes.string,
};

export default SiteReact;
