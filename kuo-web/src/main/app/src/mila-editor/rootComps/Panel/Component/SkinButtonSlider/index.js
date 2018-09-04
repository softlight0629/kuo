import React, { Component } from 'react';
import { inject } from 'mobx-react';

class SkinButtonSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }

  apply(skin) {
    // const { astm } = this.props.astRefUiStore;
    // skin.apply(astm);
  }

  renderSkinButton(skin) {
    const { skinImg } = skin;

    return (
      <label onClick={() => this.apply(skin)}>
        <img src={skinImg} />
      </label>
    )
  }

  toLeft() {
    if (this.state.position >= 0) {
      this.setState({
        position: 0,
      });

      return;
    }

    this.setState({
      position: this.state.position + 96,
    });
  }

  toRight() {
    const { skins } = this.props;
    if (Math.abs(this.state.position) > (skins.length - 4) * 96) {
      return;
    }

    this.setState({
      position: this.state.position - 96,
    });
  }

  render() {
    const { skins } = this.props;

    return (
      <div className="thumbnails-slider">
        <div className="items-container" style={{ left: this.state.position }}>
          {
            skins.map(skin => this.renderSkinButton(skin))
          }
        </div>
        <div className="arrow left" onClick={() => this.toLeft()}>
          <span></span>
        </div>
        <div className="arrow right" onClick={() => this.toRight()}>
          <span></span>
        </div>
      </div>
    )
  }
}

export default SkinButtonSlider;
