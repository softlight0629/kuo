import React, { Component } from 'react';
import { Modal, Input } from 'antd';


import './SiteSavePanel.css';

class SiteSavePanel extends React.Component {

  handleOk() {
    fetch('/api/v1/sites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'test2' }),
    });
  }

  render() {
    return (
      <div className="site-save-panel">
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={() => this.handleOk()}
        >
          <Input addonBefore="https://softlight0629.wix.com/"  defaultValue="mysite" />
        </Modal>
      </div>
    )
  }
}

export default SiteSavePanel;
