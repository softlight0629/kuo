import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import PropsResolver from './PropsResolver';
import StyleNode from './StyleNode';
import constants from '@packages/documentServices/constants/constants';

const { PROPERTY_TYPES } = constants.pointers.components;

const RootComponent = (props, { componentsModelAspect }) => {
  const { id } = props;
  // const compType = componentsModelAspect.getStructureProperty(id, PROPERTY_TYPES.TYPE);
  return (
    <React.Fragment>
      <PropsResolver id={id} key="comp" {...props}>
        { _.noop }
      {/* {compType === 'Component' ? _.noop : () => _.map(componentsModelAspect.getStructureProperty(id, PROPERTY_TYPES.COMPONENTS), childId => <RootComponent id={childId} key={childId}/>) } */}
      </PropsResolver>
      <StyleNode id={id} key="style" />
    </React.Fragment>
  )
}

RootComponent.propTypes = {
  id: PropTypes.string.isRequired,
}

export default RootComponent;
