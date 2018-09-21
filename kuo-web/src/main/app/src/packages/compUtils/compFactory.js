import React from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

const compClasses = {};
const compFactories = {};

const compModelClasses = {};
const compModelFactories = {};

const compFactory = {
  
  getCompClass(name) {
    return compFactories[name];
  },

  getCompReactClass(name) {
    return compClasses[name];
  },

  getModelTypeFactoryByCompType(name) {
    let modelTypeFactory = compModelFactories[name];
    if (modelTypeFactory) {
      return modelTypeFactory;
    }

    const _compModelClass = compModelClasses[name];
    if (_compModelClass) {
      modelTypeFactory = {
        componentType: name,
        create: (props) => {
          return new _compModelClass(props);
        }
      }

      compModelFactories[name] = modelTypeFactory;
    }

    return modelTypeFactory;
  },

  register(name, componentClass) {
    compClasses[name] = componentClass;

    const compFactory = React.createFactory(componentClass);
    compFactories[name] = compFactory;

    return compFactory;
  },

  registerCompModel(compType, componentClass) {
    compModelClasses[compType] = componentClass;

    return compFactory;
  },
}

export default compFactory;
