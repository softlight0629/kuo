import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';
import { Icon } from 'antd';
import AssetSetting from './AssetSetting';
import { AstvButton, AstvMenu, AstvText } from '../Assets';

import './index.less';

function hexToRgba(hex, opacity) { 
  return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
}

@withRouter
@inject('designPanelUiStore', 'astmRefUiStore')
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
    this.props.astm.rect.setPosition(d.x, d.y);
  }

  renderSpecStyle(style) {
    const { fill, border, font, shadow, corner, layout} = style;

    const yshadow = (Math.floor(Math.cos(shadow.angle * Math.PI / 180)*100) / 100) * shadow.distance;
    const xshadow = (Math.floor(Math.sin(shadow.angle * Math.PI / 180)*100) / 100) * shadow.distance * -1;

    const bi = {};
    if (font.bold) {
      bi.fontWeight = 'bold';
    }

    if (font.italic) {
      bi.fontStyle = 'italic';
    }

    return Object.assign({}, {
      textAlign: layout.align,
      backgroundColor: hexToRgba(fill.color, fill.opacity/100),
      padding: `${layout.margin}px`,
      borderWidth: `${border.width}px`,
      borderColor: hexToRgba(border.color, border.opacity/100),
      borderStyle: 'solid',
      color: '#fff',
      font: `${font.fontSize}px/1.4em \'${font.fontFamily}\', sans-serif`,
      color: font.color,
      borderTopLeftRadius: `${corner.leftTop}px`,
      borderTopRightRadius: `${corner.rightTop}px`,
      borderBottomLeftRadius: `${corner.leftBottom}px`,
      borderBottomRightRadius: `${corner.rightBottom}px`,
      boxShadow: `${xshadow}px ${yshadow}px ${shadow.blur}px ${shadow.size}px ${hexToRgba(shadow.color, shadow.opacity/100)}`,
    }, bi);
  }

  handleRefAstm(astm) {
    this.props.astmRefUiStore.refAstm(astm);

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
    const { rect, animation } = astm;

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

    const selected = astm === this.props.astmRefUiStore.astm;

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
              <div key={1} className="asset" style={this.renderSpecStyle(astm)}>
                {this.renderAstv(astm) }
              </div>
            </div>
          </div>
        </Rnd>
    )
  }
}

export default AssetBox;
