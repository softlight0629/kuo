import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';

class ColumnPanel extends Component {

  close() {}
  
  render() {
    return (
      <PanelWrapper title="What do you want to link to?" width={560} onClose={this.close.bind(this)}>
      </PanelWrapper>
    )
  }
}

export default ColumnPanel;
