import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import RootComponent from './RootComponent';
// import ComponentsModelAspect from '@packages/aspects/componentsModelAspect/componentsModelAspect';

const privatesMap = new WeakMap();

class Renderer extends React.Component {

  constructor(props) {
    super(props);

    // const componentsModelAspect = new ComponentsModelAspect(props.componentsModel, props.eventsManager);
  }

  render() {
    return (
    <React.Fragment>
      { _.map(this.props.rootCompsIds, childId => <RootComponent id={childId} key={childId}></RootComponent>)}
    </React.Fragment>
    )
  }

  getChildContext() {
    // const { componentsModelAspect, fetchSantaType, aspects } = privatesMap.get(this)
    return {
      rootId: this.props.id,
      getStructureProperty: this.props.getStructureProperty,
      getStructure: this.props.getStructure,
      getCompClass: this.props.getCompClass,
      ps: this.props.ps,
      // onRenderStart: () => {},
      // onRenderEnd: () => {},
      // onRenderError: () => {},
      // registerComponent: () => {}
    }
  }
}

Renderer.childContextTypes = {
  getStructureProperty: PropTypes.func.isRequired,
  getStructure: PropTypes.func.isRequired,
  getCompClass: PropTypes.func.isRequired,
  ps: PropTypes.object.isRequired,
  // onRenderStart: PropTypes.func.isRequired,
  // onRenderEnd: PropTypes.func.isRequired,
  // onRenderError: PropTypes.func.isRequired,
  // registerComponent: PropTypes.func.isRequired,
  rootId: PropTypes.string
}

export default Renderer;
