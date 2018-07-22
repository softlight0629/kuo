import React, { Component } from 'react';
import { Input } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Divider,
} from '../../Component';
import './index.less';

@withRouter
@inject('designPanelUiStore')
@observer
class ChangeTextPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeChangeTextPanel();
  }

  render() {
    const { astm } = this.props;
    const { text } = astm;

    return (
      <PanelWrapper title="Button Settings" onClose={this.close.bind(this)}>
        <div className="text-panel">
          <div className="panel-section">
            <div className="panel-section-label">
              <span>what does this button say?</span>
            </div>
            <div className="panel-section-input">
              <Input value={text.content} onChange={(e) => text.setContent(e.target.value)}/>
            </div>
          </div>
          <Divider type="long" />
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

export default ChangeTextPanel;
