import React, { Component } from 'react';
import PanelWrapper from '../PanelWrapper';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

@withRouter
@inject('designPanelUiStore')
@observer
class AnimationPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeAniamtionPanel();
  }

  render() {
    return (
      <PanelWrapper title="Choose Animation" onClose={this.close.bind(this)}>
        <div className="animation-panel">
          aninamtion panel
        </div>        
      </PanelWrapper>
    )
  }
}

export default AnimationPanel;
