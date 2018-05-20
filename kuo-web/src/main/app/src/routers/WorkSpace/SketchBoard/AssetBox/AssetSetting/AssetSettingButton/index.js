import React, { Component } from 'react';

class AssetSettingButton extends Component {

  render() {
    const { label, onClick } = this.props;

    return (
      <li className="asset-setting-btn" onClick={() => onClick() }>
        { label }
      </li>
    )
  }
}

export default AssetSettingButton;
