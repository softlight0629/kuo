import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';
import { Icon } from 'antd';
import AssetSetting from './AssetSetting';
// import assetRegistrar from '../../../../core/assetRegistrar';
import compRegistrar from '../../../packages/compUtils/compRegistrar';
import './index.less';

@inject('designPanelUiStore', 'astRefUiStore')
@observer
class AssetBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rnding: false,
    }
  }

  onDragStop(e, d) {
    this.setState({ rnding: false });
    this.props.astm.layout.setPosition(d.x, d.y);
  }

  activateAst(astm) {
    this.props.astRefUiStore.refAstm(astm);
    // 检测 shift
  }

  renderAstv(astm) {
    const CompView = compRegistrar.getComp(`mila.components.view.` + astm.kind);
    return <CompView astm={astm} />;
  }

  render() {
    const { astm, designPanelUiStore, compRef } = this.props;
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

    const selected = astm === this.props.astRefUiStore.astm;

    return (
        <Rnd
          style={stylus}
          className={`asset-handles ${selected?'selected':''}`}
          size={{ width: layout.width + 2, height: layout.height + 2 }}
          position={{ x: layout.x, y: layout.y }}
          resizeHandleClasses={resizeHandleClasses}
          // lockAspectRatio={lockRation}
          onResize={(e, direction, ref, delta, position) => {
            layout.setSize(ref.offsetWidth - 2, ref.offsetHeight - 2);
            layout.setPosition(position.x, position.y);
          }}
          onResizeStart={() => this.setState({ rnding: true })}
          onResizeStop={() => this.setState({ rnding: false })}
          // onDragStart={() => this.setState({ rnding: true })}
          onDragStop={this.onDragStop.bind(this)}
        >
          <div id={`${compRef.id}`} className="comp" onMouseDown={() => this.activateAst(astm)}>
            {selected && !this.state.rnding && <AssetSetting astm={astm} />}
            <div className={`animated`} style={{ width: '100%', height: '100%', ...animationProps}}>
              {this.renderAstv(astm) }
              <div className="comp-overlay" />
            </div>
          </div>
        </Rnd>
    )
  }
}

export default AssetBox;
