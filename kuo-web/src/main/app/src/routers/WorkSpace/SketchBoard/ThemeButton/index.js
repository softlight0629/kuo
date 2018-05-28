import React, { Component } from 'react';
import { AstvMenu } from '../Assets';
import { inject } from 'mobx-react';

import './index.less';

class ThemeButton extends Component {

  render() {
    const { spec, store, state } = this.props.astm;

    return (
      <div className="theme-button">
        <div key={1} className="asset">
          <AstvMenu astm={{ spec, store, state }} />
        </div>
      </div>
    )
  }
}

export default ThemeButton;
