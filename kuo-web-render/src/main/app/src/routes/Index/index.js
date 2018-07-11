import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ArtBoard } from '../../engine';

@inject('appStore')
@observer
class Index extends Component {

  componentDidMount() {
    this.props.appStore.fetch('8a453a94-8233-4ee4-853a-948233cee497');
  }

  render() {
    const { site } = this.props.appStore;
    return (
      <div>
        <ArtBoard />  
      </div>
    )
  }
}

export default Index;
