import React, { Component } from 'react';
import { Select } from 'antd';
import { observer, inject } from 'mobx-react';
import PanelWrapper from '../../PanelWrapper';
import {
  Dropdown,
  Divider,
  SectionDivider,
  TextInput,
  ToggleSwitch,
} from '../../Component';
import ScrollBar from '../../../../components/ScrollBar';
import './index.less';

const Option = Select.Option;

const optionsOfImageClicked = [
  {
    label: 'Nothing happens',
    value: 'Nothing',
  },
  {
    label: 'A link opens',
    value: 'Link',
  },
  {
    label: 'It opens in a pop-up',
    value: 'Popup',
  },
  {
    label: 'It can be magnified',
    value: 'Magnify',
  }
].map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>)

@inject('designPanelUiStore')
@observer
class ImageSettingsPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeImageSettingsPanel();
  }

  render() {
    const { astm } = this.props;
    const { opts, store } = astm;

    console.log(opts);
    return (
      <PanelWrapper title="Image Settings" width={302} onClose={this.close.bind(this)}>
        <div className="settings-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <ScrollBar>
                <Dropdown label="When image is clicked" value={opts.imageClickedAction} options={optionsOfImageClicked} onChange={v => opts.setImageClickedAction(v)}/>
                <SectionDivider content="Image Resizing"/>
                <ToggleSwitch label="Keep proportions" checked={opts.keepProportion} onChange={v => opts.setKeepProportion(v)}/>
                <SectionDivider content="Image Text"/>
                <TextInput label="What's in the image?Tell Google" value={store.alt} onChange={e => store.setAlt(e.target.value)} />
                <Divider type="short" />
                <TextInput label="Does this image have a tooltip?" value={store.tooltip} onChange={e => store.setTooltip(e.target.value)}/>
              </ScrollBar>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default ImageSettingsPanel;
