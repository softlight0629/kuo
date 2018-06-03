
const themes = [
  {
    astm: 'Menu',
    spec: {
      layout: {
        align: 'center',
        margin: 0,
      },
      rect: {
        width: 719,
        height: 50,
        x: 20,
        y: 300,
      },
      animation: {
      },
      fill: {
        color: 'transparent',
        opacity: 100,
        separator: '#db8de2',
      },
      border: {
        color: '#383838',
        width: 0,
        opacity: 100,
      },
      shadow: {
        angle: 0,
        size: 0,
        blur: 0,
        distance: 0,
        color: '#000000',
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#b45ad3',
        bold: true,
      },
      corner: {
        leftTop: 0,
        rightTop: 0,
        leftBottom: 0,
        rightBottom: 0,
      },
      gap: 0,
    },
    state: {
      hover: {
        fill: {
          color: 'transparent',
          opacity: 100,
        },
        border: {
          width: 1,
          color: 'ffde5f',
          opacity: 100,
        },
        font: {
          color: '#532563',
        },
      },
      clicked: {
        fill: {
          color: '#9c9c9c',
        },
      },
    },
    store: {
      menuItems: [
        {
          text: 'HOME',
        },
        {
          text: 'BLOG',
        },
        {
          text: 'ABOUT',
        }
      ],
    }
  },
  {
    astm: 'Menu',
    spec: {
      layout: {
        align: 'center',
        margin: 0,
      },
      rect: {
        width: 719,
        height: 50,
        x: 20,
        y: 100,
      },
      animation: {
      },
      fill: {
        color: '#ffffff',
        opacity: 100,
      },
      border: {
        color: '#383838',
        width: 1,
        opacity: 100,
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#000',
      },
      corner: {
        leftTop: 80,
        rightTop: 80,
        leftBottom: 80,
        rightBottom: 80,
      },
      gap: 2,
    },
    state: {
      hover: {
        fill: {
          color: '#ffde5f',
          opacity: 100,
        },
        border: {
          width: 1,
          color: 'ffde5f',
          opacity: 100,
        },
      },
      clicked: {
        fill: {
          color: '#9c9c9c',
        },
      },
    },
    store: {
      menuItems: [
        {
          text: 'HOME',
        },
        {
          text: 'BLOG',
        },
        {
          text: 'Gallery',
        },
        {
          text: 'ABOUT',
        }
      ],
    }
  },
  {
    astm: 'Menu',
    spec: {
      layout: {
        align: 'center',
        margin: 0,
      },
      rect: {
        width: 719,
        height: 50,
        x: 20,
        y: 200,
      },
      animation: {
      },
      fill: {
        color: 'transparent',
        opacity: 100,
      },
      border: {
        color: '#383838',
        width: 0,
        opacity: 100,
      },
      shadow: {
        angle: 0,
        size: 0,
        blur: 0,
        distance: 4,
        color: '#000000',
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#000',
        bold: true,
        italic: true,
        fontSize: 16,
      },
      corner: {
        leftTop: 0,
        rightTop: 0,
        leftBottom: 0,
        rightBottom: 0,
      },
      gap: 0,
    },
    state: {
      hover: {
        fill: {
          color: '#ffd9e4',
          opacity: 100,
        },
        border: {
          width: 1,
          color: 'ffde5f',
          opacity: 100,
        },
        font: {
          color: '#E33292',
        },
      },
      clicked: {
        fill: {
          color: '#9c9c9c',
          opacity: 100,
        },
      },
    },
    store: {
      menuItems: [
        {
          text: 'HOME',
        },
        {
          text: 'BLOG',
        },
        {
          text: 'ABOUT',
        }
      ],
    }
  },
]

const adjust = {
  spec: {
    rect: {
      width: 240,
      height: 24,
    }
  }
}

export default {
  themes,
  adjust,
}
