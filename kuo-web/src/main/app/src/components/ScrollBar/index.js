import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar'

import './index.less';

class ScrollBar extends Component {

  render() {
    return (
      <ScrollArea
        speed={0.8}
        className="s-scrollbar-area"
        contentClassName="s-scrollbar-content"
        horizontal={false}
      >
      { this.props.children }
      </ScrollArea>
    )
  }
}

export default ScrollBar;
