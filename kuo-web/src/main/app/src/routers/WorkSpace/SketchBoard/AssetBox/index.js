import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';
import { Icon } from 'antd';
import AssetSetting from './AssetSetting';
import { AstvButton } from '../Assets';

import './index.less';

@withRouter
@inject('designPanelUiStore')
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
    this.props.astm.position(d.x, d.y);
  }

  render() {
    const { astm, designPanelUiStore } = this.props;
    const { rect, style } = astm.spec;

    const stylus = {
      color: '#fff',
      backgroundColor: style.fill.color,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      font: '15px/1.4em \'open sans\', sans-serif',
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

    return (
        
        <Rnd
          style={stylus}
          className="asset-handles"
          size={{ width: rect.width, height: rect.height }}
          position={{ x: rect.x, y: rect.y }}
          resizeHandleClasses={resizeHandleClasses}
          onResize={(e, direction, ref, delta, position) => {
            astm.size(ref.offsetWidth, ref.offsetHeight);
            astm.position(position.x, position.y);
          }}
          onResizeStart={() => this.setState({ rnding: true })}
          onResizeStop={() => this.setState({ rnding: false })}
          // onDragStart={() => this.setState({ rnding: true })}
          onDragStop={this.onDragStop.bind(this)}
        >
          <div className="asset-box">
            {!this.state.rnding && <AssetSetting astm={astm} />}
            <AstvButton />
          </div>
        </Rnd>
    )
  }
}

export default AssetBox;
