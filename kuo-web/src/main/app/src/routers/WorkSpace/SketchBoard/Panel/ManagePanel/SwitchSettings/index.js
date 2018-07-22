import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Divider,
  TextInput,
  CheckboxGroup,
} from '../../Component';
import './index.less';

class SwitchSettingsPanel extends Component {

  close() {

  }

  render() {
    return (
      <PanelWrapper title="Switch Settings" onClose={this.close.bind(this)}>
        <div className="settings-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="section">
                <TextInput />
                <Divider type="long" />
                <CheckboxGroup label="General Settings" />
              </div>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default SwitchSettingsPanel;
