import React, { Component } from 'react';
import { inject } from 'mobx-react';
import extend from 'extend';
import assetRegistrar from '../../../../core/assetRegistrar';

import './index.less';

@inject('astRefUiStore')
class ThemeButton extends Component {

  apply() {
    const { astm } = this.props.astRefUiStore;
    const { theme } = this.props;
  }

  handleClick() {
    const { astm } = this.props.astRefUiStore;
    const { ast } = this.props;
    this.props.onClick(ast, astm);
  }

  render() {
    const { loc, ast, onClick } = this.props;
    const { kind, spec, store, state, meta = {} } = ast;
    const { width, height, x, y } = loc;
    const Astv = assetRegistrar.findAstv(kind);

    return (
      <div className="theme-button" onClick={(theme) => this.handleClick()} style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${x}px`,
        top: `${y}px`,
      }}>
        <div key={1} className="asset">
          <Astv astm={{ spec: extend(true, {}, spec, { rect: { width, height }, font: { fontSize: '12px' }}), store, state, meta }} />
        </div>
      </div>
    )
  }
}

export default ThemeButton;
