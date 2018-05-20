import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class ControlButtonGroup extends Component {

  render() {
    return (
      <div className="button-row">
        {this.props.children}
      </div>
    )
  }
}

class ControlToggleButton extends Component {

  render() {
    const { label } = this.props;

    return (
      <span className="control-button toggle-button">
        <label className="control-button-label">
          {label}
        </label>
      </span>
    )
  }
}

class ControlDropdownButtonGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    }
  }

  static childContextTypes = {
    dropdownButtonGroup: PropTypes.any,
  };

  open() {
    this.setState({
      expand: true,
    })
  }

  close() {
    this.setState({
      expand: false,
    })
  }

  getChildContext() {
    return {
      dropdownButtonGroup: {
        onChange: this.onOptionChange.bind(this),
      }
    }
  }

  onOptionChange(value) {
    const { onChange } = this.props;

    onChange && onChange(value);

    this.close();
  }

  render() {
    const { label, value } = this.props;

    return (
      <span className="control-button dropdown-button" >
        <div className="control-button-label" onClick={() => this.open()}>
          {label}
        </div>
        {
          this.state.expand && (<div className="dropdown-options">
            <div className="options">
              <ol className="dropdown-options-list">
              { this.props.children }
              </ol>
            </div>
          </div>)
        }
      </span>
    )
  }
}

class ControlDropdownButtonOption extends Component {

  static contextTypes = {
    dropdownButtonGroup: PropTypes.any,
  };

  render() {
    const { label, value } = this.props;
    const { dropdownButtonGroup } = this.context;
    console.log(this.context, 'context.....');
    const { onChange } = dropdownButtonGroup;

    return (
      <li className="option dropdown-option" onClick={() => onChange(value) }>
        { label }
      </li>
    )
  }
}

ControlDropdownButtonGroup.ControlDropdownButtonOption = ControlDropdownButtonOption;

ControlButtonGroup.ControlToggleButton = ControlToggleButton;
ControlButtonGroup.ControlDropdownButtonGroup = ControlDropdownButtonGroup;

export default ControlButtonGroup;
