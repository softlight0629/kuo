import React, { Component } from 'react';
import { Icon } from 'antd';

class GfppButton extends Component {

  onClick() {
    const rtStore = this.props.rtStore;
    const selectedComponent = this.props.selectedComponent;
    this.props.onClick(rtStore, selectedComponent);
  }

  render() {
    return (
      <li
        className="gfpp-btn"
        onClick={e => this.onClick()}
      >
        { this.props.icon &&  <Icon type={this.props.icon} />}
        { this.props.label &&  <span className="gfpp-label" >{this.props.label}</span>}
      </li>
    )
  }
}

export default GfppButton;
