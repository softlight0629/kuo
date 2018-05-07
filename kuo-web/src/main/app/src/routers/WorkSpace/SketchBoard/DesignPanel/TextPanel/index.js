import React, { Component } from 'react';
import { Input } from 'antd';
import PanelWrapper from '../PanelWrapper';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

@withRouter
@inject('designPanelUiStore')
@observer
class TextPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeTextPanel();
  }

  render() {
    const { astm } = this.props;

    return (
      <PanelWrapper title="Button Settings" onClose={this.close.bind(this)}>
        <div className="text-panel">
          <div className="panel-section">
            <div className="panel-section-label">
              <span>what does this button say?</span>
            </div>
            <div className="panel-section-input">
              <Input value={astm.spec.text.content} onChange={(e) => astm.spec.content(e.target.value)}/>
            </div>
          </div>
          <hr className="divider-long" />
          <div className="panel-section">
            <div className="panel-section-label">
              <span>where does it link to?</span>
            </div>
            <div className="panel-section-input">
              <Input />
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default TextPanel;
