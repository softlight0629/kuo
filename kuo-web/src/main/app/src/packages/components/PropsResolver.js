import * as _ from 'lodash';
import React from 'react';

class PropsResolver extends React.Component {

  constructor(props, context) {
    super(props, context);
    context.onRenderStart(props.id);
  }

  render() {
    const componentType = this.context.componentsModelAspect.getStructure(this.props.id, 'componentType');
    const CompClass = this.context.getCompClass(componentType);

    if (!CompClass) {
      return (<div id={this.props.id}></div>)
    }

    // const nextProps = createCompProps()

    this.isReactClass = this.isReactClass || _.hasIn(CompClass, 'prototype.isReactComponent');
    return this.isReactClass ?
    <CompClass ref={this.registerComponent} {...nextProps}>{this.props.children()}</CompClass>:
    <CompClass {...nextProps}>{this.props.children()}</CompClass>
  }

}

export default PropsResolver;
