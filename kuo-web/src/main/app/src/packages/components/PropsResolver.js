import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class PropsResolver extends React.Component {

  constructor(props, context) {
    super(props, context);
    // context.onRenderStart(props.id);
  }


  render() {
    const componentType = this.context.getStructureProperty(this.props.id, 'componentType');
    const CompClass = this.context.getCompClass(componentType);

    if (!CompClass) {
      return (<div id={this.props.id}></div>)
    }

    const structure = this.context.getStructure(this.props.id);

    // 构造组件的 props
    // const nextProps = createCompProps(this.props);

    const nextProps = {
      // layout: structure.layout,
      skin: structure.skin,
      id: this.props.id,
      styleId: structure.styleId,
      // siteWidth
      // style
      // compProp
      // isMobileView
      // isTouchDevice
      // isDebugMode
      // isMobileDevice
      // rootId
      // siteWidth
      // getScreenWidth
      // structure
      // getScrollBarWidth
      // compData
      // compDesign
      // skin
      // styleId
      // id
    }

    this.isReactClass = this.isReactClass || _.hasIn(CompClass, 'prototype.isReactComponent');
    return this.isReactClass ?
    <CompClass ref={this.registerComponent} {...nextProps}>{this.props.children()}</CompClass>:
    <CompClass {...nextProps}>{this.props.children()}</CompClass>
  }

}

PropsResolver.contextTypes = {
  getStructureProperty: PropTypes.func.isRequired,
  getStructure: PropTypes.func.isRequired,
  getCompClass: PropTypes.func.isRequired,
  // onRenderStart: PropTypes.func.isRequired,
  // onRenderEnd: PropTypes.func.isRequired,
  // onRenderError: PropTypes.func.isRequired,
  // registerComponent: PropTypes.func.isRequired,
}

export default PropsResolver;
