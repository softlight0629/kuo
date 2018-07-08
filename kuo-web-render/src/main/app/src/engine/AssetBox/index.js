import React, { Component } from 'react';
import astRegister from '../../helper/ast_register';

import './index.less';

class AssetBox extends Component {

  renderAstv(astm) {
    const Astv = astRegister.findAstv(astm.kind);
    return <Astv astm={astm} />;
  }

  render() {
    const { astm } = this.props;
    const { spec: { rect } } = astm;

    return (
      <div className="asset-box" style={{ left: `${rect.x}px`, top: `${rect.y}px` }}>
        <div className={`animated`} style={{ width: '100%', height: '100%' }}>
          <div key={1} className="asset">
            {this.renderAstv(astm)}
          </div>
        </div>
      </div>
    )
  }
}

export default AssetBox;
