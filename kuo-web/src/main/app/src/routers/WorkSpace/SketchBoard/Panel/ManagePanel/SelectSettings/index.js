import React, { Component } from 'react';
import { Input, Select, Radio, Checkbox } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import PanelWrapper from '../../PanelWrapper';
import {
  Dropdown,
  Divider,
  SectionDivider,
  RadioButtonGroup,
  CheckboxGroup,
  ToggleSwitch,
  TextInput,
} from '../../Component';
import ScrollBar from '../../../../../../components/ScrollBar';
import './index.less';

@observer
class SelectSettingsPanel extends Component {

  close() {}

  render() {
    const { astm } = this.props;
    const { opts, store } = astm;

    return (
      <PanelWrapper title="Select Settings" onClose={this.close.bind(this)}>
        <div className="settings-panel">
          <div className="inner-container">
            <div className="content-wrapper">
            <ScrollBar>
              <RadioButtonGroup label="Show text on load" value={opts.showTextOnLoad} onChange={e => opts.setShowTextOnLoad(e.target.value)}>
                <Radio value="None">None</Radio>
                <Radio value="PlaceholderText">Placeholder text</Radio>
                <Radio value="InitialText">Initial text</Radio>
                <Radio value="InitialAndPlaceholderText">Initial text then placeholder text</Radio>
              </RadioButtonGroup>
              <Divider type="short" />
              <TextInput label="Placeholder text" value={store.placeholderText} placeholder="Add it here..." onChange={e => store.setPlaceholderText(e.target.value)}/>
              <Divider type="long" />
              <CheckboxGroup label="General Settings" >
                <Checkbox value="A" checked={opts.required} onChange={e => opts.setRequired(!!e.target.checked)} >Required</Checkbox>
              </CheckboxGroup>
            </ScrollBar>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )

  }
}

export default SelectSettingsPanel;
