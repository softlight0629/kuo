import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import { withRouter } from 'react-router';
import AssetSettingButton from './AssetSettingButton';

import './index.less';

@inject('designPanelUiStore', 'astRefUiStore', 'astUiStore', 'mediaLibraryUiStore')
class AssetSetting extends Component {

  refAstm() {
    const { astm } = this.props;

    this.props.astRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
  }

  showDesignPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showDesignPanel();
  }

  showEditTextPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showEditTextPanel();
  }

  showChangeImagePanel() {
    this.refAstm();
    this.props.mediaLibraryUiStore.open();
  }

  showChangeTextPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showChangeTextPanel();
  }

  showManageMediaPanel() {
    this.refAstm();
    this.props.designPanelUiStore.position(-80, 50);
    this.props.designPanelUiStore.showManageMediaPanel();
  }

  showSetInputTypePanel() {
    this.refAstm();
    this.props.designPanelUiStore.showSetInputTypePanel();
  }

  showSetInitialTextPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showSetInitialTextPanel();
  }

  showManageButtonsPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showManageButtonsPanel();
  }

  showManageItemsPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showManageItemsPanel();
  }

  showSwitchSettingsPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showSwitchSettingsPanel();
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

  showSettingPanel() {
    this.refAstm();
    this.props.designPanelUiStore.showSettingPanel();
  }

  render() {
    const { astm, astUiStore } = this.props;
    const settingButtons = astUiStore.astSettingButtons(astm.kind);

    return (
      <div className="asset-setting">
        <ul className="asset-setting-btns">
          { settingButtons.includes('EditText') && <AssetSettingButton label={<span className="label" >Edit Text</span>} onClick={() => this.showEditTextPanel()} /> }
          { settingButtons.includes('ChangeText') && <AssetSettingButton label={<span className="label" >Change Text</span>} onClick={() => this.showChangeTextPanel()} /> }
          { settingButtons.includes('ChangeImage') && <AssetSettingButton label={<span className="label" >Change Image</span>} onClick={() => this.showChangeImagePanel()} /> }
          { settingButtons.includes('ManageMedia') && <AssetSettingButton label={<span className="label" >Manage Media</span>} onClick={() => this.showManageMediaPanel()} /> }
          { settingButtons.includes('SetInputType') && <AssetSettingButton label={<span className="label" >Set Input Type</span>} onClick={() => this.showSetInputTypePanel()} /> }
          { settingButtons.includes('SetInitialText') && <AssetSettingButton label={<span className="label" >Set Initial Text</span>} onClick={() => this.showSetInitialTextPanel()} /> }
          { settingButtons.includes('ManageButtons') && <AssetSettingButton label={<span className="label" >Manage Buttons</span>} onClick={() => this.showManageButtonsPanel()} /> }
          { settingButtons.includes('ManageItems') && <AssetSettingButton label={<span className="label" >Manage Items</span>} onClick={() => this.showManageItemsPanel()} /> }
          { settingButtons.includes('SwitchSettings') && <AssetSettingButton label={<span className="label" >Settings</span>} onClick={() => this.showSwitchSettingsPanel()} /> }
          { settingButtons.includes('ManageTable') && <AssetSettingButton label={<span className="label" >Manage Table</span>} onClick={() => this.showSwitchSettingsPanel()} /> }

          { settingButtons.includes('Setting') && <AssetSettingButton label={<Icon type="setting" />} onClick={() => this.showSettingPanel()} />}
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
