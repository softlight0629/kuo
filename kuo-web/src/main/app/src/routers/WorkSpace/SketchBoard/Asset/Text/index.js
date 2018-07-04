import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router'; 

import cssrender from '../../../../../helper/cssrender';
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

const effects = {
  effect_1: 'rgba(255,255,255,0.6) 1px 1px 1px, rgba(0,0,0,0.6) -1px -1px 1px',
  effect_2: 'rgba(0,0,0,0.298) 0px 5px 0px',
  effect_3: 'rgba(0,0,0,0.4) 0px 4px 5px',
  effect_4: 'rgba(0,0,0,0.498) -1px -1px 0px, rgba(0,0,0,0.498) -1px 1px 0px,rgba(0,0,0,0.498) 1px 1px 0px,rgba(0,0,0,0.498) 1px -1px 0px',
  effect_5: 'rgba(255,255,255) -1px -1px 0px, rgba(255,255,255) -1px 1px 0px, rgba(255,255,255) 1px 1px 0px, rgba(255,255,255) 1px -1px 0px',
  effect_6: 'rgba(255,255,255) 0px 0px 6px',
  effect_7: 'rgb(200,200,200) 1px 1px 0px, rgb(180,180,180) 0px 2px 0px, rgb(160,160,160) 0px 3px 0px, rgb(140,140,140, 0.498) 0px 4px 0px, rgb(120,120,120) 0px 0px 0px, rgb(0,0,0,0.498) 0px 5px 10px',
  effect_8: 'rgb(255,255,255) 3px 3px 0px, rgba(0,0,0,0.2) 6px 6px 0px',
  effect_9: 'rgba(10,189,240,0.298) 3px 3px 0px, rgba(254,1,1,0.298) -3px -3px 0px',
}

@withRouter
@observer
class AstvText extends Component {

  renderH1 = (text, s1, s2) => (
    <h1 className="font_0" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h1>
  )

  renderH2 = (text, s1, s2) => (
    <h2 className="font_2" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h2>
  )

  renderH3 = (text, s1, s2) => (
    <h3 className="font_3" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h3>
  )

  renderH4 = (text, s1, s2) => (
    <h4 className="font_4" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h4>
  )

  renderH5 = (text, s1, s2) => (
    <h5 className="font_5" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h5>
  )

  renderH6 = (text, s1, s2) => (
    <h6 className="font_6" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </h6>
  )

  renderP1 = (text, s1, s2) => (
    <p className="font_7" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </p>
  )

  renderP2 = (text, s1, s2) => (
    <p className="font_8" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </p>
  )

  renderP3 = (text, s1, s2) => (
    <p className="font_9" style={cssrender(s1)}>
      <span style={cssrender(s2)}>
        { text }
      </span>
    </p>
  )

  render() {
    const { spec, store } = this.props.astm;
    const { theme, textAlign, textEffect, textIndent, font } = spec;
    const { text } = store;

    return (
      <div className="ast-text">
        {
          this[`render${theme.toUpperCase()}`](text, {textAlign, textIndent, font: { fontSize: font.fontSize }}, {textEffect, font})
        }
      </div>
    )
  }
}

export default AstvText;
