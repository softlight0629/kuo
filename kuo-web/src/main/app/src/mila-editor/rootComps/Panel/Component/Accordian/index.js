import React, { Component } from 'react';
import { Icon } from 'antd';

class Accordian extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { label } = this.props;
    return (
      <div className="accordian">
        <div className="accordian-header" onClick={() => this.toggle()}>
          <span className="accordian-icon">
            <Icon type={`caret-${this.state.open?'down':'right'}`} />
          </span>
          <label className="accordian-label">{label}</label>
        </div>
        { this.state.open && (<div className="accordian-content">
          { this.props.children }
         </div>)
        }
      </div>
    )
  }
}


export default Accordian;
