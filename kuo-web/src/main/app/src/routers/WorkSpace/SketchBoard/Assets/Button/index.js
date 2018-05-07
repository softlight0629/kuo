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
@inject('astmRefUiStore')
@observer
class AstvButton extends Component {

  render() {
    const { astm } = this.props.astmRefUiStore;
    let content = '';
    let width = 1;
    let color = '#fff';
    if (astm) {
      content = astm.spec.text.content;
      width = astm.spec.style.border.width;
      color = astm.spec.style.border.color;
    }

    return (
      <div className="asset" style={{ borderWidth: width, borderStyle: 'solid', borderColor:color  }}>
        <a className="ast-button">
          <span>{content}</span>
        </a>
      </div>
    )
  }
}

export default AstvButton;
