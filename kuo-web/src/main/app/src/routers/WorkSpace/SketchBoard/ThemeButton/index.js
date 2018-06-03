import React, { Component } from 'react';
import { inject } from 'mobx-react';
import astfactory from '../../../../helper/astfactory';

import './index.less';

@inject('astRefUiStore')
class ThemeButton extends Component {

  apply() {
    const { astm } = this.props.astRefUiStore;
    const { theme } = this.props;
    theme.apply(this.props.astm);
  }

  render() {
    const { kind, spec, store, state } = this.props.theme;
    const Astv = astfactory.findAstv(kind);

    return (
      <div className="theme-button" onClick={() => this.apply()}>
        <div key={1} className="asset">
          <Astv astm={{ spec, store, state }} />
        </div>
      </div>
    )
  }
}

export default ThemeButton;
