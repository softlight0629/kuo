import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as _ from 'lodash';
import ctx from '@packages/runtime/runtimeCtx';
import compRegistrar from '@packages/compUtils/compRegistrar';
import compClassFactory from '@packages/compUtils/compClassFactory';

import './column.less';

@observer
class Column extends Component {

  getColumnProps() {
    const { compRef } = this.props;
    const layout = compRef.layout;

    return {
      mc: {
        style: {
          position: 'relative',
          marginLeft: 0,
          marginTop: 0,
          marginBottom: 0,
          top: 0,
          minWidth: `${layout.width}px`,
          flex: `${layout.width} 1 0%`,
          height: `${layout.height}px`,
        }
      },
      mcBg: {
        style: {
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'auto',
        },
      },
      inlineContentContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      inlineContent: {
        position: 'absolute',
        width: '100%',
        top: 0,
        bottom: 0,
      },
    }
  }

  render() {
    const { compRef } = this.props;
    const columnsProps = this.getColumnProps();
    const { mc, mcBg, inlineContentContainer, inlineContent } = columnsProps;
    const { background } = compRef.dataQuery;
    const propQuery = compRef.propQuery;

  
    return (
      <div className="mc" style={mc.style}>
        <div className="mc-container">
          <div className="mc-bg" style={mcBg.style}>
            { compClassFactory.createRRChildComponent('mila.view.components.background.Balata', {
              displayMode: propQuery.dispalyMode,
              type: background.type,
              compData: background.compData,
              color: background.color,
            }) }
            <div className="inline-content-container" style={inlineContentContainer.style}>
              <div className="inline-content" style={inlineContent.style}>
                {
                  compRef.components.map(compRef => {
                    return compClassFactory.createChildComponent(compRef)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


compRegistrar.register('mila.components.view.Column', Column);

export default Column;
