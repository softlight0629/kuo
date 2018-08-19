import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as _ from 'lodash';
import { withRouter } from 'react-router';
import GridLine  from '../GridLine';
import ResBtnGrp from '../LeftBar';
import CompToolBar from '../ToolBar';
import ArtBoard from '../ArtBoard';
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

  renderCompPanel(panel) {
    const CompPanelClass = panel.compPanelClass;
    const props = panel.props;

    return (
      <CompPanelClass rtStore={this.props.rtStore} {...props}/>
    )
  }

  renderCompPanels() {
    const openedPanels = this.props.panelUiStore.openedPanels;
    console.log(openedPanels, 'openedPanels....');
    return (
      <div>
        {
          openedPanels.map(panel => this.renderCompPanel(panel))
        }        
      </div>
    )
  }

  render() {
    const { 
      designPanelVisible, 
      layoutPanelVisible,
      linkPanelVisible,
      editTextPanelVisible,
      animationPanelVisible,
      settingPanelVisible,
      filterPanelVisible,

      changeTextPanelVisible,
      manageMediaPanelVisible,
      setInputTypePanelVisible,
      setInitialTextPanelVisible,
      manageButtonsPanelVisible,
      manageItemsPanelVisible,
      switchSettingsPanelVisible,
      gallerySettingsPanelVisible,
      imageSettingsPanelVisible,
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
            {/* { designPanelVisible && <DesignPanel astm={astm}/> }
            { editTextPanelVisible && <TextPanel astm={astm} /> }
            { layoutPanelVisible &&  <LayoutPanel astm={astm}/> }
            { animationPanelVisible && <AnimationPanel astm={astm}/> }
            { linkPanelVisible && <LinkPanel astm={astm}/> }
            { settingPanelVisible && <SelectSettingsPanel astm={astm} />}
            { filterPanelVisible && <FilterPanel astm={astm} />}

            { changeTextPanelVisible && <ChangeTextPanel astm={astm} /> }
            { setInputTypePanelVisible && <SetInputTypePanel astm={astm} />}
            { setInitialTextPanelVisible && <SetInitialTextPanel astm={astm} />}
            { manageButtonsPanelVisible && <ManageButtonsPanel astm={astm} />}
            { manageItemsPanelVisible && <ManageItemsPanel astm={astm} />}
            { manageMediaPanelVisible && <ManageMediaPanel astm={astm} />}
            { switchSettingsPanelVisible && <SwitchSettingsPanel astm={astm} />}
            { gallerySettingsPanelVisible && <GallerySettingsPanel astm={astm} />}
            {imageSettingsPanelVisible && <ImageSettingsPanel astm={astm} />} */}

            {/* { colorPickerVisible && <ColorPicker astm={astm}/> } */}

            { this.renderCompPanels() }
          </div>
          <ResBtnGrp />
        </div>
      </div>
    )
  }
}

export default SketchBoard;
