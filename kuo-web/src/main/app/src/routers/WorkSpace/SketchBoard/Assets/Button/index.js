import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';

import './index.less';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ddd',
  background: '#f0f0f0',
}

@withRouter
@inject('designPanelUiStore')
@observer
class AstvButton extends Component {

  render() {
    return (
      <div className="asset">
        <a className="ast-button">
          <span>All Posts</span>
        </a>
      </div>
    )
  }
}

export default AstvButton;
