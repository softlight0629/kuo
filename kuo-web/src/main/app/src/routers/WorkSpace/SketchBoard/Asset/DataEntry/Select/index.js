import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import cssrender from '../../../../../../helper/cssrender';

import './index.less';

class AstvSelect extends Component {

  render() {
    const { astm } = this.props;
    const { spec, meta } = astm;

    console.log('select......');
    return (
      <div className="ast-select" style={cssrender(spec)}>
        <select>
          <option>Who's the best?</option>
          <option value="Bowie">Bowie</option>
          <option value="Prince">Prince</option>
          <option value="Kanye">Kanye</option>
          <option value="Taylor Swift">Taylor Swift</option>
        </select>
      </div>
    )
  }
}

export default AstvSelect;
