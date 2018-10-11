import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import compFactory from '@packages/compUtils/compFactory';

function getReactConstructor(componentType) {
  return componentType && compFactory.getCompClass(componentType);
}

class PageReact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allContextsReady: false,
    }
  }

  componentWillMount() {
    this.childrenAniamtions = {};
    this.transitioningChildrenPrevLayout = {};
    this.compRefs = {};

    // const siteData = this.props.siteAPI.getSiteData();
    // this.props.siteAPI.setComponentRenderStart(`PageReact_${this.porps.rootId}`);
  }

  addComponentRef(componentValue, componentId) {
    if (componentValue) {
      this.compRefs[componentId] = componentValue;
    } else {
      delete this.compRefs[componentId];
    }
  }

  render() {
    const reactConstrcutor = getReactConstructor(this.props.componentType);
    this.renderedPage = reactConstrcutor(_.assign({
      id: this.props.rootId,
      key: this.props.rootId,
      rootId: this.props.rootId,
    }, this.props));

    return this.renderedPage;
  }
}

PageReact.propTypes = {
  siteAPI: PropTypes.shape({
    getSiteData: PropTypes.func,
  }),
  componentType: PropTypes.string.isRequired,
  structure: PropTypes.object,
  rootId: PropTypes.string,
  onRendered: PropTypes.func,
}


export default PageReact;
