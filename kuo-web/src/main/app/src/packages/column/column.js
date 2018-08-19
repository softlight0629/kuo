import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

import './column.less';
class Column extends Component {
  

  createChildComponent(compData, className) {
    
    // const CompModel = compRegistrar.getComp(`mila.component.mode.${compData.kind}`);

    // const compModel = new CompModel(compData);

    // return <CompView astm={compModel} ></CompView>
  }

  render() {
    const { components } = this.props.astm;
    console.log(this.props.astm);
    const childrenToRender = components && components.map(component => {
      const CompView = compRegistrar.getComp(`mila.components.view.${component.kind}`);
      return <CompView astm={component}></CompView>
    });
    return (
      <div className="mc"
        style={{
          flex: '490 1 0%',
          marginLeft: '0px',
          minWidth: '490px',
          marginTop: '0px',
          marginBottom: '0px',
          top: '0px',
          height: '650px',
          position: 'relative',
        }}
      >
        <div className="mc-container">
          <div className="mc-bg" 
            style={{
              position: 'absolute',
              top: '0px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              pointerEvents: 'auto',
              clip: 'rect(0px, 720px, 650px, 0px)',
            }}
          >
            <div className="bg-color"
              style={{
                width: '100%',
                height:  '100%',
                backgroundColor: 'rgb(75, 209, 160)',
                position: 'absolute',
              }}
            >
              <div className="bg-color-overlay"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
              ></div>
            </div>
          </div>
          <div className="inline-content-container"
            style={{
              position: 'absolute',
              left: '0px',
              right: '0px',
              top: '0px',
              bottom: '0px',
            }}
          >
            <div className="inline-content"
              style={{
                width: '100%',
                position: 'absolute',
                top: '0px',
                bottom: '0px',
              }}
            >
              <div className="content-area-marker"
                style={{
                  visibility: 'hidden',
                  position: 'absolute',
                  width: '490px',
                  marginLeft: 'calc((100% - 490px) * 0.5)',
                }}
              >
              { childrenToRender }
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
