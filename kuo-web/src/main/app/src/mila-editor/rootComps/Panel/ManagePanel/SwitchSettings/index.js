import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import { Checkbox } from 'antd';
import PanelWrapper from '../../PanelWrapper';
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
    const { opts, store } = this.props.astm;
    return (
      <PanelWrapper title="Switch Settings" onClose={this.close.bind(this)}>
        <div className="settings-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="section">
                <TextInput />
                <Divider type="long" />
                <CheckboxGroup label="General Settings" >
                  <Checkbox value="B" checked={opts.toggleOnDefault} onChange={e => opts.setReadOnly(!!e.target.checked)} >Toggled on By default</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default SwitchSettingsPanel;
