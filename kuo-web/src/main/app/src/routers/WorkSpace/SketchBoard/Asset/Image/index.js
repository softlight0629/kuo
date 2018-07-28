import React, { Component } from 'react';
import { observer } from 'mobx-react';

import cssrender from '../../../../../helper/cssrender';
import filterRegister from '../../../../../helper/filter_register';
import './index.less';

@observer
class AstvImage extends Component {

  render() {
    const { astm } = this.props;
    const { spec, store: { src, alt } } = astm;
    const { rect: { width, height }, corner, border, shadow, layout, fill } = spec;
    const filterId = fill.filter && `${fill.filter}-comp-jjyggfr5img`;

    return (
      <div className="ast-image">
        <div className="ast-image-container">
          <div className="ast-image-inner" style={cssrender({ layout, rect: { width, height }, corner, border, shadow })}>
            { filterId && filterRegister.render(fill.filter, {
              id: filterId,
              style: {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                overflow: 'hidden', 
                position: 'absolute',
              }
            }) }
            <img alt={alt}
              data-type="image"
              style={cssrender({ rect: { width, height }, fill: { ...fill, filter: filterId } })}
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
