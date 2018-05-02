import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import ResBtnGrp from './ResBtnGrp';
import CompToolBar from './CompToolBar';
import ArtBoard from './ArtBoard';
import DesignPanel from './DesignPanel';
import ColorPicker from './ColorPicker';

@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore')
@observer
class SketchBoard extends Component {

  render() {
    const { designPanelVisible } = this.props.designPanelUiStore;
    const { colorPickerVisible } = this.props.colorPickerUiStore;

    return (
      <div className="sketch-board">
        <div className="sketch-board-editor">
          <div className="sketch-board-canvas">
            <ArtBoard />
            <CompToolBar />
            { designPanelVisible && <DesignPanel /> }
            { colorPickerVisible && <ColorPicker /> }
          </div>
          {/* <ResBtnGrp /> */}
        </div>
      </div>
    )
  }
}

export default SketchBoard;
