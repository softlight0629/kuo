import React, { Component } from 'react';
import { Input, Select, Radio } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Dropdown,
  Divider,
  SectionDivider,
  RadioButtonGroup,
  CheckboxGroup,
  ToggleSwitch,
} from '../../Component';
import './index.less';

const Types = [
  'Text',
  'Password',
  'Number',
  'Email',
  'URL',
  'Phone Number',
];

const Option = Select.Option;

class SetInputTypePanel extends Component {

  close() {
  }

  render() {
    const { astm } = this.props;

    const types = [];
    for (let i = 0; i < Types.length; i++) {
      types.push(<Option key={i} value={Types[i]}>{Types[i]}</Option>);
    }
    return (
      <PanelWrapper title="Input Settings" onClose={this.close.bind(this)}>
        <div className="set-input-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="section">
                <Dropdown label="Type:" value="Text"  options={types} />
                <Divider type="long" />
                <SectionDivider content="Text Settings" />
                <Divider type="long" />
                <CheckboxGroup label="General Settings" />
                <Divider type="long" />
                <RadioButtonGroup label="Show text on load" value={1} >
                  <Radio value={1}>None</Radio>
                  <Radio value={2}>Placeholder text</Radio>
                  <Radio value={2}>Initial text</Radio>
                  <Radio value={2}>Initial text then placeholder text</Radio>
                </RadioButtonGroup>
                <Divider type="long" />
                <ToggleSwitch label="Limit length" />
                <Divider type="long" />
                <ToggleSwitch label="Add pattern validation" />
              </div>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default SetInputTypePanel;
