import { observable, extendObservable, action } from 'mobx';

class Corner {

  @observable cornerLink = true;

  @observable leftTop;

  @observable rightTop;

  @observable leftBottom;

  @observable rightBottom;

  constructor(option) {
    extendObservable(this, option);
  }

  @action toggleCornerLink() {
    this.cornerLink = !this.cornerLink;
  }

  @action setLeftTop(leftTop) {
    if (this.cornerLink) {
      const delta = this.leftTop - leftTop;

      this.rightTop = this.rightTop - delta;
      this.leftBottom = this.leftBottom - delta;
      this.rightBottom = this.rightBottom - delta;
    }

    this.leftTop = leftTop;
  }

  @action setRightTop(rightTop) {
    if (this.cornerLink) {
      const delta = this.rightTop - rightTop;

      this.leftTop = this.leftTop - delta;
      this.leftBottom = this.leftBottom - delta;
      this.rightBottom = this.rightBottom - delta;
    }

    this.rightTop = rightTop;
  }

  @action setLeftBottom(leftBottom) {
    if (this.cornerLink) {
      const delta = this.leftBottom - leftBottom;

      this.rightTop = this.rightTop - delta;
      this.leftTop = this.leftTop - delta;
      this.rightBottom = this.rightBottom - delta;
    }

    this.leftBottom = leftBottom;
  }

  @action setRightBottom(rightBottom) {
    if (this.cornerLink) {
      const delta = this.rightBottom - rightBottom;

      this.rightTop = this.rightTop - delta;
      this.leftBottom = this.leftBottom - delta;
      this.leftTop = this.leftTop - delta;
    }

    this.rightBottom = rightBottom;
  }
}

export default Corner;
