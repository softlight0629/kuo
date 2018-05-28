import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';

import cssrender from '../../../../../helper/cssrender';
import './index.less';

@withRouter
@observer
class AstvButton extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store } = astm;

    return (
      <a className="ast-button" style={cssrender(spec)}>
        <span>{store.text}</span>
      </a>
    )
  }
}

export default AstvButton;
