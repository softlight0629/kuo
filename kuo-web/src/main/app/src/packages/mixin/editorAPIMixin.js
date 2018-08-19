import React from 'react';
import PropTypes from 'prop-types';

export const editorAPIMixin = Component => {

  class MixinComponent extends React.Component {
    
    render() {
      const { editorAPI } = this.context;

      return (
        <Component { ...this.props } editorAPI={editorAPI} />
      )
    }
  }

  MixinComponent.contextTypes = {
    editorAPI: PropTypes.object,
  }

  return MixinComponent;
}

export const editorAPIMixinApi = (component) =>{

  function getEditorAPI() {
    return this.props.editorAPI;
  }

  component.getEditorAPI = getEditorAPI.bind(component);
}

