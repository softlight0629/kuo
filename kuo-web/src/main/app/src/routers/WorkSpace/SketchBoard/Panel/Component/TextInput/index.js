import React, { Component } from 'react';

class TextInput extends Component {
  
  render() {
    const { type = 'input' } = this.props;
    return (
      <div className="text-input has-label">
        <label className="label">Placeholder content</label>
        <div className={`input-container ${type==='textarea'?'input-multiline':''}`}>
          { type === "textarea" && (
            <textarea type="text" className="input" placeholder="Add it here..." spellCheck="false" dir="ltr">
            How can we do better next time?
            </textarea>
          )}
          {
            type === "input" && (
              <input type="text" className="input" placeholder="Enter value for switch" spellCheck="false" dir="ltr" />
            )
          }
        </div>
      </div>
    )
  }
}

export default TextInput;
