import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioImageButtonGroup extends Component {

  static childContextTypes = {
    radioImageButtonGroup: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
     };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // getChildContext() {
  //   return {
  //     radioImageButtonGroup: {
  //       onRadioChange: this.onRadioChange.bind(this),  
  //       value: this.state.value,   
  //     },
  //   }
  // }

  onRadioChange(value) {
    console.log('asdasdasda', value);
    const lastValue = this.state.value;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }

    const onChange = this.props.onChange;
    if (onChange && value !== lastValue) {
      onChange(value);
    }
  }

  render() {
    const { title, maxPerRow = 3, options } = this.props;
    let children;

    if (options && options.length > 0) {
      children = options.map((option, index) => {
        return (
          <RadioImageButton 
            key={index}
            value={option.value}
            label={option.label}
            imageSrc={option.imageSrc}
            onChange={this.onRadioChange.bind(this)}
            checked={this.state.value === option.value}
          />
        )
      });
    }
    return (
      <div className="control-thumbnails with-title" data-max-thumbs-per-row={maxPerRow}>
        <div className="title">{ title }</div>
        { children }
      </div>
    )
  }
}

class RadioImageButton extends Component {

  // static contextTypes = {
  //   radioImageButtonGroup: PropTypes.any,
  // }

  render() {
    const { label, imageSrc, value, checked, onChange } = this.props;
    // const { radioImageButtonGroup } = this.context;
    // const { onRadioChange, value:v } = radioImageButtonGroup;

    return (
      <label className={`radio-control ${checked? 'active': ''}`} onClick={() => onChange(value)}>
        <div className="image-radio">
          <img src={checked?imageSrc.replace(/reg/, 'sel'): imageSrc} />
        </div>
        { label && <span className="label">{label}</span> }
      </label>
    )
  }
}

RadioImageButtonGroup.RadioImageButton = RadioImageButton;

export default RadioImageButtonGroup;
