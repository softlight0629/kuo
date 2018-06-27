import React, { Component } from 'react';

class ResBtn extends Component {

  render() {
    const { label, title, onClick } = this.props;

    return (
      <li className="resbtn-item" onClick={() => onClick && onClick()}>
        <div className="resbtn-item-inner">
          <span className="label">{label}</span>
          <span className="text">{title}</span>
        </div>
      </li>
    )
  }
}

export default ResBtn;
