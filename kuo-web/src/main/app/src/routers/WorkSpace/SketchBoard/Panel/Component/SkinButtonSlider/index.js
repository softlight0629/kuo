import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('astRefUiStore')
class SkinButtonSlider extends Component {

  apply(skin) {
    const { astm } = this.props.astRefUiStore;
    skin.apply(astm);
  }

  renderSkinButton(skin) {
    const { skinImg } = skin;

    return (
      <label onClick={() => this.apply(skin)}>
        <img src={skinImg} />
      </label>
    )
  }

  render() {
    const { skins } = this.props;

    return (
      <div className="thumbnails-slider">
        <div className="items-container">
          {
            skins.map(skin => this.renderSkinButton(skin))
          }
        </div>
      </div>
    )
  }
}

export default SkinButtonSlider;
