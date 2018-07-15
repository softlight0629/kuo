import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import cssrender from '../../../../../../helper/cssrender';
import './index.less';

@withRouter
@observer
class AstvInput extends Component {

  render() {
    const { astm } = this.props;
    const { spec, meta } = astm;

    return (
      <div className="ast-input" style={cssrender(spec)}>
        <input type="text" placeholder="Add Your Name Here" />
      </div>
    )
  }
}

export default AstvInput;
