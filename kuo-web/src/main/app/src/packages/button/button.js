import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cssrender from '../runtime/cssRender';
import skins from './buttonSkins/skins.json';
import compRegistrar from '../compUtils/compRegistrar';
import skinRegistrar from '@packages/compUtils/skinRegistrar';

import './button.less';

@observer
class Button extends Component {

  renderArrow(arrow, fill) {
    return (
      <div className={`arrow-${arrow}`}>
        <span className="arrow-top" style={{
          borderBottomColor: fill.color,
        }}></span>
        <span className="arrow-bottom" style={{
          borderTopColor: fill.color,
        }}></span>
        <span className="arrow-bg" style={{
          backgroundColor: fill.color,
        }}></span>
      </div>
    )
  }

  renderLiftShadow(liftShadow) {
    return (
      <React.Fragment>
        { ['both', 'left'].includes(liftShadow) && (<div className="lift-shadow lift-shadow-left" />) }
        { ['both', 'right'].includes(liftShadow) && (<div className="lift-shadow lift-shadow-right" />) }
      </React.Fragment>
    )
  }

  render() {
    const { astm } = this.props;
    const { spec, dataQuery: { text }, layout } = astm;
    const { arrow, liftShadow, fill, border, ...rest } = spec;

    const style = {
      ...cssrender({ ...(arrow ? {} : {fill}), ...({ ...rest, border }), rect: { width: layout.width, height: layout.height, }}),
      ...(liftShadow ? { overflow: 'visible' } : {}),
    }

    return (
      <a className="ast-button" style={style}>
        { arrow && this.renderArrow(arrow, fill) }
        { liftShadow && this.renderLiftShadow(liftShadow) }
        <span className="ast-button-text">{text}</span>
      </a>
    )
  }
}

compRegistrar.register('mila.components.view.Button', Button);
skinRegistrar.register('mila.components.skin.Button', skins);
