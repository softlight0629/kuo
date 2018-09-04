import React, { Component } from 'react';
import compRegistrar from '@packages/compUtils/compRegistrar';

class Balata extends Component {

  render() {
    return (
      <div className="comp-balata">
        <div className="bg-color">
          <div className="bg-color-overlay"></div>
        </div>
        <div className="bg-media">
          <div className="bg-image">
            <img src="https://static.wixstatic.com/media/035244_e73291085fbe44a5be9f6b32af50803f.jpg/v1/fill/w_1185,h_1280,al_c,q_85/035244_e73291085fbe44a5be9f6b32af50803f.webp"/>
          </div>
        </div>
      </div>
    )
  }
}

compRegistrar.register('mila.view.components.background.Balata', Balata);

export default Balata;
