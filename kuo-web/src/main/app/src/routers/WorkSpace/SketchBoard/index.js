import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import ResBtnGrp from './ResBtnGrp';
import CompToolBar from './CompToolBar';
import ArtBoard from './ArtBoard';

@withRouter
@observer
class SketchBoard extends Component {

  render() {
    return (
      <div className="sketch-board">
        <div className="sketch-board-editor">
          <div className="sketch-board-canvas">
            <ArtBoard />
            <CompToolBar />
          </div>
          {/* <ResBtnGrp /> */}
        </div>
      </div>
    )
  }
}

export default SketchBoard;
