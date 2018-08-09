import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import cssrender from '../../../helper/cssrender';
import './index.less';

@withRouter
@observer
class AstvButton extends Component {

  renderArrow(fill) {
    return (
      <div>
        <span className="ast-button-top" style={{
          borderBottomColor: fill.color,
        }}></span>
        <span className="ast-button-bottom" style={{
          borderTopColor: fill.color,
        }}></span>
        <span className="ast-button-bg" style={{
          backgroundColor: fill.color,
        }}></span>
      </div>
    )
  }

  render() {
    const { astm } = this.props;
    const { spec, store: { text }, meta } = astm;
    const { arrow, fill, border, ...rest } = spec;

    return (
      <a className="ast-button" style={cssrender({ ...(arrow ? {} : {fill}), ...({ ...rest, border })})}>
        { arrow && this.renderArrow(fill) }
        <span className="ast-button-text">{text}</span>
      </a>
    )
  }
}

export default AstvButton;
