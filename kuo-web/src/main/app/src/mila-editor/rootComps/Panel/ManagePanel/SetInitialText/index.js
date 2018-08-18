import React, { Component } from 'react';
import { Radio } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Divider,
  RadioButtonGroup,
  CheckboxGroup,
  ToggleSwitch,
  TextInput
} from '../../Component';
import './index.less';

@observer
class SetInitialTextPanel extends Component {

  close() {
  }

  render() {
    return (
      <PanelWrapper title="Text Box Settings" onClose={this.close.bind(this)}>
        <div className="set-input-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="section">
                <RadioButtonGroup label="Show text on load" value={1} >
                  <Radio value={1}>None</Radio>
                  <Radio value={2}>Placeholder text</Radio>
                  <Radio value={3}>Initial text</Radio>
                  <Radio value={4}>Initial text then placeholder text</Radio>
                </RadioButtonGroup>
                <Divider type="long" />
                <TextInput type="textarea" />
                <Divider type="long" />
                <CheckboxGroup label="General Settings" />
                <Divider type="long" />
                <ToggleSwitch label="Limit length" />
              </div>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default SetInitialTextPanel;
