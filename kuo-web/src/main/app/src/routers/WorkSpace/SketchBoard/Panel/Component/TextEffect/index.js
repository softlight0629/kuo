import React, { Component } from 'react';

class TextEffect extends Component {

  render() {
    return (
      <div className="text-effect-container">
        { this.props.children }
      </div>
    )
  }
}

class TextEffectButton extends Component {

  render() {
    const { textShadow, label, key } = this.props;

    return (
      <span className={key}>
        <button className="text-effect-button">
          <span className="text-shadow-effect" style={{ textShadow }}>{label}</span>
        </button>
      </span>
    )
  }
}

TextEffect.TextEffectButton = TextEffectButton;

export default TextEffect;
