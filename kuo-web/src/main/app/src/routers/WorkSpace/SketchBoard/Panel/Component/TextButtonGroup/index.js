import React, { Component } from 'react';

class TextButtonGroup extends Component {

  render() {

    return (
      <div className="text-buttons">
        {this.props.children}
      </div>
    )
  }
}

class TextButton extends Component {

  render() {
    const { label, onClick, style = {} } = this.props;
    return (
      <span>
        <label className="toggle-button" onClick={() => onClick()} style={{ fontSize: 18 }}>
          {label}
        </label>
      </span>
    )
  }
}

TextButtonGroup.TextButton = TextButton;

export default TextButtonGroup;
