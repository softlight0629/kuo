import React, { Component } from 'react';
import './index.less';

class TextInput extends Component {
  
  render() {
    const { label = 'Placeholder content', type = 'input', placeholder = 'Add it here...', value, onChange } = this.props;
    return (
      <div className="text-input has-label">
        <label className="label">{label}</label>
        <div className={`input-container ${type==='textarea'?'input-multiline':''}`}>
          { type === "textarea" && (
            <textarea type="text" className="input" placeholder={placeholder} value={value} spellCheck="false" dir="ltr" onChange={e => onChange(e)}>
            How can we do better next time?
            </textarea>
          )}
          {
            type === "input" && (
              <input type="text" className="input" placeholder={placeholder} value={value} spellCheck="false" dir="ltr" onChange={e => onChange(e)} />
            )
          }
        </div>
      </div>
    )
  }
}

export default TextInput;
