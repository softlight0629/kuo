import React from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

const compClasses = {};
const compFactories = {};

const compFactory = {
  
  getCompClass(name) {
    return compFactories[name];
  },

  getCompReactClass(name) {
    return compClasses[name];
  },

  register(name, componentClass) {
    compClasses[name] = componentClass;

    const compFactory = React.createFactory(componentClass);
    compFactories[name] = compFactory;

    return compFactory;
  }
}

export default compFactory;
