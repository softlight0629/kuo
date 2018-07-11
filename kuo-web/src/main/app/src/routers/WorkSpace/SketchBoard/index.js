import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import GridLine  from './GridLine';
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
import { 
  ChangeTextPanel,
  ManageMediaPanel,
} from './Panel/ChangePanel';
import ColorPicker from './ColorPicker';

@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore', 'astRefUiStore')
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
      manageMediaPanelVisible,
    } = this.props.designPanelUiStore;
    const { astm } = this.props.astRefUiStore;
    const { colorPickerVisible } = this.props.colorPickerUiStore;

    return (
      <div className="sketch-board">
        <div className="sketch-board-editor">
          <div className="editor-stage-cover">
            <GridLine />
          </div>
          <div className="sketch-board-canvas">
            <ArtBoard />
            {/* <CompToolBar /> */}
            { designPanelVisible && <DesignPanel astm={astm}/> }
            { editTextPanelVisible && <TextPanel astm={astm} /> }
            { layoutPanelVisible &&  <LayoutPanel astm={astm}/> }
            { animationPanelVisible && <AnimationPanel astm={astm}/> }
            { linkPanelVisible && <LinkPanel astm={astm}/> }

            { changeTextPanelVisible && <ChangeTextPanel astm={astm} /> }
            { manageMediaPanelVisible && <ManageMediaPanel astm={astm} />}

            { colorPickerVisible && <ColorPicker astm={astm}/> }
          </div>
          <ResBtnGrp />
        </div>
      </div>
    )
  }
}

export default SketchBoard;
