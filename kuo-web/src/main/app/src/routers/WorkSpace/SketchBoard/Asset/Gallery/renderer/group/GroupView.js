import React, { Component } from 'react';
import ItemContainer from '../item/ItemContainer';

class GroupView extends Component {

  constructor(props) {
    super(props);

    this.displayName = 'GroupView';
    this.dom = [];
    this.state = {};
  }

  render() {
    const styleParams = this.props.galleryConfig.styleParams;

    this.dom = this.props.items.map(item => (
      <ItemContainer 
        {...(item.renderProps(_.merge(this.props.galleryConfig, {
          visible: this.props.visible,
          bottomInfoHeight: this.props.bottomInfoHeight,
        })))}
      />
    ));
  
    return (
      <div 
        className={`gallery-group ${this.props.rendered ? this.props.visible ? 'visible' : 'hidden' : 'none'}`}
        style={{ width: this.props.width, height: this.props.totalHeight }}
        data-hook="group-view"
        key={`group_${this.props.idx}`}
        data-group-idx={this.props.idx}
        data-group-type={this.props.type}
        data-group-ratios={this.props.ratios}
      >
        { this.dom }
      </div>
    )
  }
}

export default GroupView;
