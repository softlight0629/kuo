import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import { withRouter } from 'react-router';

import './index.less';

@inject('designPanelUiStore')
class AssetSetting extends Component {

  showDesignPanel() {
    const { astm } = this.props;

    this.props.designPanelUiStore.setAstm(astm);
    this.props.designPanelUiStore.position(astm.spec.rect.x + astm.spec.rect.width + 25, astm.spec.rect.y);
    this.props.designPanelUiStore.show();
  }

  render() {

    return (
      <div className="asset-setting">
        <ul className="asset-setting-btns">
          <li className="asset-setting-btn" onClick={() => this.showDesignPanel() }>
            <span className="label" >Change Text</span>
          </li>
          <li className="asset-setting-btn" onClick={() => this.showDesignPanel()}>
            <Icon type="layout" />
          </li>
          <li className="asset-setting-btn">
            <Icon type="dashboard" />
          </li>
          <li className="asset-setting-btn">
            <Icon type="sync" />
          </li>
          <li className="asset-setting-btn">
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
