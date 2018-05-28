import { observable, action, extendObservable } from 'mobx';

class SpecAnimation {

  @observable animate;

  @observable direction;

  @observable duration;

  @observable delay;

  @observable distance;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setAnimate(animate) {
    this.animate = animate;
  }

  @action setDirection(direction) {
    this.direction = direction;
  }

  @action setDuration(duration) {
    this.duration = duration;
  }

  @action setDelay(delay) {
    this.delay = delay;
  }

  @action setDistance(distance) {
    this.distance = distance;
  }
}

export default SpecAnimation;
