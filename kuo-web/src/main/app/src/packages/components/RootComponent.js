import * as _ from 'lodash';
import PropTypes from 'prop-types';
import PropsResolver from './PropsResolver';
import StyleNode from './StyleNode';
import constants from '../util/constants';

const { PROPERTY_TYPES } = constants.pointers.components;

const RootComponent = (props, { componentsModelAspect }) => {
  const { id } = props;
  const compType = componentsModelAspect.getStructureProperty(id, PROPERTY_TYPES.TYPE);
  return (
    <React.Fragment>
      <PropsResolver id={id} key="comp" {...props}>
      {compType === 'Component' ? _.noop : () => _.map(componentsModelAspect.getStructureProperty(id, PROPERTY_TYPES.COMPONENTS), childId => <RootComponent id={childId} key={childId}/>) }
      </PropsResolver>
    </React.Fragment>
  )
}

RootComponent.propTypes = {
  id: PropTypes.string.isRequired,
}

export default RootComponent;
