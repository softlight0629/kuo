
const themes = [
  {
    astm: 'Button',
    spec: {
      layout: {
        align: 'left',
        margin: 0,
      },
      rect: {
        width: 260,
        height: 50,
        x: 20,
        y: 100,
      },
      animation: {
        // animate: 'rubberBand',
      },
      fill: {
        color: '#000000',
        opacity: 100,
      },
      border: {
        color: '#000000',
        width: 1,
        opacity: 100,
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#ffffff',
      },
      corner: {
        leftTop: 0,
        rightTop: 0,
        leftBottom: 0,
        rightBottom: 0,
      },
    },
    store: {
      text: 'All Posts',
    }
  },
  {
    astm: 'Button',
    spec: {
      layout: {
        align: 'left',
        margin: 0,
      },
      rect: {
        width: 221,
        height: 50,
        x: 20,
        y: 200,
      },
      animation: {
        // animate: 'rubberBand',
      },
      fill: {
        color: '#566fb8',
        opacity: 100,
      },
      border: {
        color: '#2b689c',
        width: 1,
        opacity: 100,
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#ffffff',
      },
      shadow: {
        angle: 0,
        distance: 3,
        blur: 0,
        size: 0,
        color: '#566fb8',
        opacity: 60,
      },
      corner: {
        leftTop: 20,
        rightTop: 20,
        leftBottom: 20,
        rightBottom: 20,
      },
    },
    store: {
      text: 'All Posts',
    }
  },
  {
    astm: 'Button',
    spec: {
      layout: {
        align: 'left',
        margin: 0,
      },
      rect: {
        width: 221,
        height: 50,
        x: 20,
        y: 300,
      },
      animation: {
        // animate: 'rubberBand',
      },
      fill: {
        color: 'transparent',
        opacity: 100,
      },
      border: {
        color: '#2b689c',
        width: 0,
        opacity: 100,
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#566fb8',
        bold: true,
      },
      corner: {
        leftTop: 20,
        rightTop: 20,
        leftBottom: 20,
        rightBottom: 20,
      },
    },
    store: {
      text: 'All Posts',
    }
  }
];


const adjust = {
  spec: {
    rect: {
      width: 100,
      height: 32,
    }
  }
}

export default {
  themes,
  adjust,
}
