import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import { Icon } from 'antd';
import compRegistrar from '@packages/compUtils/compRegistrar';
import Gfpp from '@packages/gfpp/gfpp';
import { editorAPIMixin, editorAPIMixinApi } from '@packages/mixin/editorAPIMixin';
import './containerCompControl.less';

@observer
class ContainerCompCtrol extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gfppIsCollapsed: true,
      gfppStyle: {
        top: 0,
        left: 0,
        visibility: 'hidden',
        position: 'absolute',
      }
    }

    editorAPIMixinApi(this);
  }

  onDragStop(e, d) {
    this.setState({ rnding: false });
    this.props.astm.layout.setPosition(d.x, d.y);
  }

  activateComponent(compRef) {
    const editorAPI = this.getEditorAPI();
    editorAPI.selection.selectComponentByCompRef(compRef);
  }

  renderComp(compRef) {
    const CompView = compRegistrar.getComp(`mila.components.view.` + compRef.kind);
    return <CompView astm={compRef} compRef={compRef} />;
  }

  renderGfpp(compRef) {
    return (
      <Gfpp compRef={compRef} style={this.state.gfppStyle} editorAPI={this.props.editorAPI}/>
    )
  }

  setGfppMeasureFunc(measureFunc) {
    this.gfppMeasureFunc = measureFunc;
  }

  getBoundingLayoutRelativeToScreen(compRef) {
  }

  onWindowScroll() {}

  onWindowResize() {}

  getCompControlStyles() {}

  toggleGfpp() {}

  shouldShowGfpp() {
  }

  getColumnsControlProps() {}

  render() {
    const editorAPI = this.getEditorAPI();
  
    const { astm, compRef } = this.props;
    const { spec: { animation }, layout } = astm;

    const stylus = {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }

    const resizeHandleClasses = {
      topLeft: 'top-left-resize-cursor handle handle-resize-corner top left',
      top: 'top-resize-cursor handle handle-resize-side top',
      topRight: 'top-right-resize-cursor handle handle-resize-corner top right',
      right: 'right-resize-cursor handle handle-resize-side right',
      bottomRight: 'bottom-right-resize-cursor handle handle-resize-corner bottom right',
      bottom: 'bottom-resize-cursor handle handle-resize-side bottom',
      bottomLeft: 'bottom-left-resize-cursor handle handle-resize-corner bottom left',
      left: 'left-resize-cursor handle handle-resize-side left',
    }

    const animationProps = {};
    if (animation.duration) {
      animationProps.animationDuration = `${animation.duration}s`;
    }

    if (animation.delay) {
      animationProps.animationDelay = `${animation.delay}s`;
    }

    if (animation.direction) {
      animationProps.animationDirection = animation.direction;
    }

    const selectedComponents = editorAPI.selection.getSelectedComponents();
    const selected = selectedComponents.includes(astm);

    return (
      <div id={`${compRef.id}`} class="comp" onMouseDown={() => this.activateComponent(astm)}>
        {selected && this.renderGfpp(astm)}
          {this.renderComp(astm) }
      </div>
    )
  }
}

export default editorAPIMixin(ContainerCompCtrol);
