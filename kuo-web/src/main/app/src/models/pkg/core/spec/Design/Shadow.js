import { observable, extendObservable, action } from 'mobx';

class Shadow {

  @observable enable = false;
  
  @observable angle = 0;

  @observable distance = 0;

  @observable size = 0;

  @observable blur = 0;

  @observable color = '#000000';

  @observable opacity = 100;

  @observable boxShadow = '';

  constructor(option) {
    extendObservable(this, option);
  }

  @action setEnable(enable) {
    this.enable = enable;
  }

  @action setAngle(angle) {
    this.angle = angle;
  }

  @action setDistance(distance) {
    this.distance = distance;
  }

  @action setSize(size) {
    this.size = size;
  }

  @action setBlur(blur) {
    this.blur = blur;
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }
  @action setBoxShadow(boxShadow) {
    this.boxShadow = boxShadow;
  }

  serialize() {
    return {
      enable: this.enable,
      angle: this.angle,
      distance: this.distance,
      size:  this.size,
      blur: this.blur,
      bold: this.bold,
      color: this.color,
      opacity: this.opacity,
      boxShadow: this.boxShadow,
    }
  }
}

export default Shadow;
