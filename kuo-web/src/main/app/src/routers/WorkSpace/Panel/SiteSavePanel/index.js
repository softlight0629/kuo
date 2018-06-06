import React, { Component } from 'react';
import { Modal, Input, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

@inject('workSpaceUiStore', 'workSpaceStore')
@observer
class SiteSavePanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  closeSavePanel() {
    this.props.workSpaceUiStore.closeSavePanel();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value, 
    });
  }

  handleCreateSite() {
    this.props.workSpaceStore.createSite({
      name: this.state.value,
    });
  }

  render() {
    const { workSpaceUiStore } = this.props;

    return (
      <Modal
        visible = { workSpaceUiStore.savePanelVisible }
        width={720}
        okText="Done"
        onCancel={() => this.closeSavePanel()}
        onOk={() => this.handleCreateSite()}
        bodyStyle={{ padding: 0, borderRadius: '8px 8px 0 0'}}
      >
        <div className="site-save-pane">
          <header>
            <span className="title">Your changes were saved</span>
            <span className="sub-title">Publish to see your changes live at the following domain:</span>
          </header>
          <section>
            <div className="domain-input">
              <Input addonBefore="https://softlight0629.wixsite.com/" placeholder="mysite" value={this.state.value} onChange={e => this.handleChange(e)}/>
            </div>
          </section>
        </div>
      </Modal>
    )
  }
}

export default SiteSavePanel;
