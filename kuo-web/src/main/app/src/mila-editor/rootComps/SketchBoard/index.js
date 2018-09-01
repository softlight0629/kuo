import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as _ from 'lodash';
import { withRouter } from 'react-router';
import GridLine  from '../GridLine';
import ResBtnGrp from '../LeftBar';
import CompToolBar from '../ToolBar';
import ArtBoard from '../ArtBoard';
import stateManagement from '@packages/stateManagement/stateManagement';
import compPanelsRegistrar from '@packages/compUtils/compPanelsRegistrar';
import { editorAPIMixin, editorAPIMixinApi } from '@packages/mixin/editorAPIMixin';

import { 
  DesignPanel, 
  LayoutPanel, 
  LinkPanel, 
  AnimationPanel,
  TextPanel,
  FilterPanel,
} from '../Panel/SettingPanel';
import { 
  ChangeTextPanel,
  ManageMediaPanel,
  SetInputTypePanel,
  SetInitialTextPanel,
  ManageButtonsPanel,
  SwitchSettingsPanel,
  ManageItemsPanel,
  SelectSettingsPanel,
  GallerySettingsPanel,
  ImageSettingsPanel,
} from '../Panel/ManagePanel';
import ColorPicker from '../ColorPicker';

@inject('designPanelUiStore', 'colorPickerUiStore', 'astRefUiStore', 'panelUiStore')
@observer
class SketchBoard extends Component {

  constructor(props) {
    super(props);

    editorAPIMixinApi(this);
  }

  renderCompPanel(panel) {
    const CompPanelClass = compPanelsRegistrar.getCompPanel(panel.name);

    return (
      <CompPanelClass editorAPI={this.getEditorAPI()} {...panel.props}/>
    )
  }

  renderCompPanels() {
    const openedPanels = stateManagement.panels.selectOpenPanels();
    return (
      <React.Fragment>
        {
          openedPanels.map(panel => this.renderCompPanel(panel))
        }        
      </React.Fragment>
    )
  }

  render() {
    const { colorPickerVisible } = this.props.colorPickerUiStore;

    return (
      <div className="sketch-board">
        <div className="sketch-board-editor">
          <div className="editor-stage-cover">
            <GridLine />
          </div>
          <div className="sketch-board-canvas">
            <ArtBoard />
            { this.renderCompPanels() }
          </div>
          <ResBtnGrp />
        </div>
      </div>
    )
  }
}

export default editorAPIMixin(SketchBoard);
