import React, { Component } from 'react';
import { observer } from 'mobx-react';

import cssrender from '../../../../../helper/cssrender';

import './index.less';

@observer
class AstvImage extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store: { src, alt } } = astm;
    const { rect: { width, height }, corner, border, shadow, layout } = spec;

    return (
      <div className="ast-image">
        <div className="ast-image-container">
          <div className="ast-image-inner" style={cssrender({ layout, rect: { width, height }, corner, border, shadow })}>
            <img alt={alt} 
              data-type="image"
              style={cssrender({ rect: { width: width - (layout.margin + border.width ) * 2, height: height - (layout.margin + border.width ) * 2} })}
              onDragStart={() => { return false }}
              src={src}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AstvImage;
