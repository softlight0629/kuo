import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';

import './index.less';



@withRouter
@observer
class AstvButton extends Component {

  render() {
    const { astm } = this.props;
    const { content } = astm.spec.text;

    return (
      <div className="ast-button">
        <a className="ast-button">
          <span>{content}</span>
        </a>
      </div>
    )
  }
}

export default AstvButton;
