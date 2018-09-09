import React, { Component } from 'react';
import PropTypes from 'prop-types';

function getReactConstructor(componentType) {

}

class PageReact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allContextsReady: false,
    }
  }

  render() {
    if (!this.state.allContextsReady) {
      return this.renderedPage || (<div></div>)
    }

    const props = {
      id: this.props.rootId,
      key: this.props.rootId,
      rootId:this.props.rootId,
    }

    return (
      <div></div>
    )
  }
}

PageReact.propTypes = {
  componentType: PropTypes.string,
  rootId: PropTypes.string,
  onRendered: PropTypes.func,
}


export default PageReact;
