import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import ResBtnGrp from './ResBtnGrp';
import CompToolBar from './CompToolBar';
import ArtBoard from './ArtBoard';
import { 
  DesignPanel, 
  LayoutPanel, 
  LinkPanel, 
  AnimationPanel,
  TextPanel,
} from './Panel/SettingPanel';
import { ChangeTextPanel } from './Panel/ChangePanel';
import ColorPicker from './ColorPicker';

@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore', 'astmRefUiStore')
@observer
class SketchBoard extends Component {

  render() {
    const { 
      designPanelVisible, 
      layoutPanelVisible,
      linkPanelVisible,
      editTextPanelVisible,
      animationPanelVisible,

      changeTextPanelVisible,
    } = this.props.designPanelUiStore;
    const { astm } = this.props.astmRefUiStore;
    const { colorPickerVisible } = this.props.colorPickerUiStore;

    return (
      <div className="sketch-board">
        <div className="sketch-board-editor">
          <div className="sketch-board-canvas">
            <ArtBoard />
            {/* <CompToolBar /> */}
            { designPanelVisible && <DesignPanel astm={astm}/> }
            { editTextPanelVisible && <TextPanel astm={astm} /> }
            { layoutPanelVisible &&  <LayoutPanel astm={astm}/> }
            { animationPanelVisible && <AnimationPanel astm={astm}/> }
            { linkPanelVisible && <LinkPanel astm={astm}/> }

            { changeTextPanelVisible && <ChangeTextPanel astm={astm} /> }

            { colorPickerVisible && <ColorPicker astm={astm}/> }
          </div>
          {/* <ResBtnGrp /> */}
        </div>
      </div>
    )
  }
}

export default SketchBoard;
