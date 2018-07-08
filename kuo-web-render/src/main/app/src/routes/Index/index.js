import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ArtBoard } from '../../engine';

@inject('appStore')
@observer
class Index extends Component {

  componentDidMount() {
    this.props.appStore.fetch('1f14286f-2fa6-42c1-9428-6f2fa642c130');
  }

  render() {
    const { site } = this.props.appStore;
    console.log(site, 'site.....');
    return (
      <div>
        <ArtBoard />  
      </div>
    )
  }
}

export default Index;
