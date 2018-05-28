import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';
import { Icon } from 'antd';
import AssetSetting from './AssetSetting';
import { AstvButton, AstvMenu, AstvText } from '../Assets';
import cssrender from '../../../../helper/cssrender';
import './index.less';

@withRouter
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
    this.props.astm.spec.rect.setPosition(d.x, d.y);
  }

  handleRefAstm(astm) {
    this.props.astRefUiStore.refAstm(astm);

    // 检测 shift
  }

  renderAstv(astm) {
    if (astm.astm === 'Button') {
      return (
        <AstvButton astm={astm} />
      )
    }

    if (astm.astm === 'Menu') {
      return (
        <AstvMenu astm={astm} />
      )
    }

    if (astm.astm === 'Text') {
      return (
        <AstvText astm={astm} />
      )
    }
  }

  render() {
    const { astm, designPanelUiStore } = this.props;
    const { rect, animation } = astm.spec;

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
          size={{ width: rect.width, height: rect.height }}
          position={{ x: rect.x, y: rect.y }}
          resizeHandleClasses={resizeHandleClasses}
          onResize={(e, direction, ref, delta, position) => {
            rect.setSize(ref.offsetWidth, ref.offsetHeight);
            rect.setPosition(position.x, position.y);
          }}
          onResizeStart={() => this.setState({ rnding: true })}
          onResizeStop={() => this.setState({ rnding: false })}
          // onDragStart={() => this.setState({ rnding: true })}
          onDragStop={this.onDragStop.bind(this)}
        >
          <div className="asset-box" onMouseDown={() => this.handleRefAstm(astm)}>
            {selected && !this.state.rnding && <AssetSetting astm={astm} />}
            <div className={`animated`} style={{ width: '100%', height: '100%', ...animationProps}}>
              <div key={1} className="asset">
                {this.renderAstv(astm) }
              </div>
            </div>
          </div>
        </Rnd>
    )
  }
}

export default AssetBox;
