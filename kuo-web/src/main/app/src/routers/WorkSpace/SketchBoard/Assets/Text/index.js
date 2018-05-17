import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './index.less';

const themes = {
  h1: 'font_0',
  h2: 'font_2',
  h3: 'font_3',
  h4: 'font_4',
  h5: 'font_5',
  h6: 'font_6',
  p1: 'font_7',
  p2: 'font_8',
  p3: 'font_9',
}

@observer
class AstvText extends Component {

  renderH1(text) {
    return (
      <h1 className="font_0">{ text }</h1>
    )
  }

  renderH2(text) {
    return (
      <h2 className="font_2">{ text }</h2>
    )
  }

  renderH3(text) {
    return (
      <h3 className="font_3">{ text }</h3>
    )
  }

  render() {
    const { astm } = this.props;

    console.log(astm, 'text..........');
    return (
      <div className="ast-text">
        {
          this[`render${astm.theme.toUpperCase()}`](astm.text)
        }
      </div>
    )
  }
}

export default AstvText;
