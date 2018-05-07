import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import { withRouter } from 'react-router';

import './index.less';

@inject('designPanelUiStore', 'astmRefUiStore')
class AssetSetting extends Component {

  showStylePanel() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.showStylePanel();
  }

  showTextPanel() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.showTextPanel();
  }

  showLayoutPanel() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.showLayoutPanel();
  }

  showAnimationPanel() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.showAnimationPanel();
  }

  showLinkedPanel() {
    const { astm } = this.props;

    this.props.astmRefUiStore.refAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.showLinkedPanel();
  }

  render() {

    return (
      <div className="asset-setting">
        <ul className="asset-setting-btns">
          <li className="asset-setting-btn" onClick={() => this.showTextPanel() }>
            <span className="label" >Change Text</span>
          </li>
          <li className="asset-setting-btn" onClick={() => this.showLayoutPanel()}>
            <Icon type="layout" />
          </li>
          <li className="asset-setting-btn" onClick={() => this.showStylePanel()}>
            <Icon type="dashboard" />
          </li>
          <li className="asset-setting-btn" onClick={() => this.showAnimationPanel()}>
            <Icon type="sync" />
          </li>
          <li className="asset-setting-btn" onClick={() => this.showLinkedPanel()}>
            <Icon type="link" />
          </li>
          <li className="asset-setting-btn">
            <Icon type="database" />
          </li>
        </ul>
      </div>
    )
  }
}

export default AssetSetting;
