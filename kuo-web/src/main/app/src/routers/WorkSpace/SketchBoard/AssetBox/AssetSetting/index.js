import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import { withRouter } from 'react-router';
import AssetSettingButton from './AssetSettingButton';

import './index.less';

@inject('designPanelUiStore', 'astmRefUiStore', 'astUiStore')
class AssetSetting extends Component {

  refAstm() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.rect.x + astm.rect.width + 25, astm.rect.y);
  }

  showDesignPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showDesignPanel();
  }

  showEditTextPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showEditTextPanel();
  }

  showChangeTextPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showChangeTextPanel();
  }

  showLayoutPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showLayoutPanel();
  }

  showAnimationPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showAnimationPanel();
  }

  showLinkPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showLinkPanel();
  }

  render() {
    const { astm, astUiStore } = this.props;
    const settingButtons = astUiStore.astSettingButtons(astm.astm);

    return (
      <div className="asset-setting">
        <ul className="asset-setting-btns">
          { settingButtons.includes('EditText') && <AssetSettingButton label={<span className="label" >Edit Text</span>} onClick={() => this.showEditTextPanel()} /> }
          { settingButtons.includes('ChangeText') && <AssetSettingButton label={<span className="label" >Change Text</span>} onClick={() => this.showChangeTextPanel()} /> }
          { settingButtons.includes('Layout') && <AssetSettingButton label={<Icon type="layout" />} onClick={() => this.showLayoutPanel()} />}
          { settingButtons.includes('Design') && <AssetSettingButton label={<Icon type="dashboard" />} onClick={() => this.showDesignPanel()} />}
          { settingButtons.includes('Animation') && <AssetSettingButton label={<Icon type="sync" />} onClick={() => this.showAnimationPanel()} />}
          { settingButtons.includes('Link') && <AssetSettingButton label={<Icon type="link" />} onClick={() => this.showLinkPanel()} />}
          { settingButtons.includes('Database') && <AssetSettingButton label={<Icon type="database" />} onClick={() => this.showLinkPanel()} />}
          
          
        </ul>
      </div>
    )
  }
}

export default AssetSetting;
