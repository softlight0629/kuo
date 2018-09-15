

class Desktop {

  constructor({
    custom,
    ref,
    isPreset,
  }) {
  }
}

class Mobile {

  constructor({
    custom,
    mediaSize,
    ref,
    isPreset,
  }) {

  }
}


class PageBackground {
  constructor({
    desktop,
    mobile,
  }) {
    this.desktop = new Desktop(desktop);
    this.mobile = new Mobile(mobile);
  }
}

export default PageBackground;
