import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { generateStyleNodeProps } from '@packages/util/styleNodeUtils';

const StyleNode = (props, { componentsModelAspect, getCompClass, rootId }) => {
  const { id } = props;
  const { dalCache, pointers } = componentsModelAspect;
  const componentPointer = pointers.components.getComponent(id);
  const styleId = dalCache.get(pointer.components.getProperty(componentPointer, 'styleId'));

  const componentType = dalCache.get(pointer.components.getProperty(componentPointer, 'componentType'));
  const componentClass = getCompClass(componentType);

  if (!componentClass || !componentClass.getCompCss) {
    return null;
  }

  // const cssProps = createCompProps()
  const cssData = componentClass.getCompClass(styleId, cssProps);

  return _.map(cssData, (css, innertStyleId) => <style {...generateStyleNodeProps(innerStyleId, css, rootId)}/>)
}

export default StyleNode;
