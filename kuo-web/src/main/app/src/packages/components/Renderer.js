import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import RootComponent from './RootComponent';
import ComponentsModelAspect from '@packages/aspects/componentsModelAspect/componentsModelAspect';

class Render extends React.Component {

  constructor(props) {
    super(props);

    const componentsModelAspect = new ComponentsModelAspect(props.componentsModel, props.eventsManager);
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
    // return {
    //   rootId: this.props.id,
    //   componentsModelAspect,
    //   fetchSantaType,
    //   getAspect: name => aspects[name],
    //   getCompClass: this.props.getCompClass,
    //   onRenderStart: () => { },
    //   onRenderEnd: () => { },
    //   onRenderError: () => { },
    //   registerComponent: () => { }
    // }
  }
}

export default Render;
