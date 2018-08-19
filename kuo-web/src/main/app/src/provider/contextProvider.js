import React from 'react';
import PropTypes from 'prop-types'

class ContextProvider extends React.Component {

  getChildContext() {
    return {
      editorAPI: this.props.editorAPI,
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ContextProvider.childContextTypes = {
  editorAPI: PropTypes.object,
}

export default ContextProvider;
