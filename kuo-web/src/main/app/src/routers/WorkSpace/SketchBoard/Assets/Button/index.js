import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import Rnd from 'react-rnd';

import './index.less';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ddd',
  background: '#f0f0f0',
}

@withRouter
@observer
class AstvButton extends Component {

  render() {
    const { astm } = this.props;
    const { rect } = astm.spec;

    const style = {
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,1)',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      font: '15px/1.4em \'open sans\', sans-serif',
      width: '100%',
      height: '100%',
    }

    return (
      <Rnd
        style={style}
        size={{ width: rect.width, height: rect.height }}
        position={{ x: rect.x, y: rect.y }}
        onDragStop={(e, d) => { astm.position(d.x, d.y) }}
        onResize={(e, direction, ref, delta, position) => {
          astm.size(ref.offsetWidth, ref.offsetHeight);
        }}
      >
        <div className="asset" >
          <a className="ast-button" style={style}>
            <span>All Posts</span>
          </a>
        </div>
      </Rnd>
    )
  }
}

export default AstvButton;
