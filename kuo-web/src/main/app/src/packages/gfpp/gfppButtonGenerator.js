import React from 'react';
import createReactClass from 'create-react-class';
import * as _ from 'lodash';
import GfppButton from './gfppButton';

export default createReactClass({
  displayName: 'gfppButtonGenerator',
  render() {
    return React.createElement(GfppButton, _.assign({}, this.props));
  }
})
