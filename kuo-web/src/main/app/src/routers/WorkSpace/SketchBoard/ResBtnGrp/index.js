import React, { Component } from 'react';
import { Icon } from 'antd';
import ResBtn from './ResBtn';
import ResPanel from './ResPanel';

import './index.less';
import { inject, observer } from 'mobx-react';

@inject('resGrpUiStore')
@observer
class ResBtnGrp extends Component {

  render() {
    const { resPanelVisible } = this.props.resGrpUiStore;

    return (
      <div className="resbtn-grp">
        <ul className="resbtn-items">
          <ResBtn label={<Icon type="cloud-upload" />} title="Background" />
          <ResBtn label={<Icon type="cloud-upload" />} title="Menu & Pages" />
          <ResBtn label={<Icon type="cloud-upload" />} title="Add" onClick={() => this.props.resGrpUiStore.showResPanel()}/>
          <ResBtn label={<Icon type="cloud-upload" />} title="My Uploads" />
          <ResBtn label={<Icon type="cloud-upload" />} title="Start Blogging" />
        </ul>

        { resPanelVisible && <ResPanel /> }
      </div>
    )
  }
}

export default ResBtnGrp;
