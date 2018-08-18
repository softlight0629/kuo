
const themed_menu_comp1 = {
  kind: 'Menu',
  meta: {
    theme: 'themed_menu_comp1',
  },
  spec: {
    layout: {
      align: 'center',
      margin: 0,
    },
    rect: {
      width: 708,
      height: 50,
      x: 20,
      y: 100,
    },
    animation: {
    },
    fill: {
      color: '#ffffff',
      opacity: 0,
    },
    border: {
      color: '#000000',
      width: 0,
      opacity: 100,
    },
    font: {
      fontFamily: 'Arial',
      fontSize: 13,
      color: '#000000',
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
    gap: 0,
  },
  state: {
    hover: {
      fill: {
        color: '#ffffff',
        opacity: 0,
      },
      border: {
        width: 0,
        color: '#000000',
        opacity: 100,
      },
      font: {
        color: '#bdbdbd',
      },
    },
    clicked: {
      font: {
        color: '#bdbdbd',
      },
    },
  },
  store: {
    menuItems: [
      {
        text: 'Home',
      },
      {
        text: 'Media',
      },
      {
        text: 'Contact',
      },
      {
        text: 'About',
      },
    ],
  }
};

const themed_menu_comp2 = {
  kind: 'Menu',
  meta: {
    theme: 'themed_menu_comp2',
  },
  spec: {
    layout: {
      align: 'center',
      margin: 0,
    },
    rect: {
      width: 708,
      height: 50,
      x: 20,
      y: 100,
    },
    animation: {
    },
    fill: {
      color: '#edf1f5',
      opacity: 100,
    },
    separator: {
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
      fontSize: 13,
      color: '#000000',
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
    gap: 0,
  },
  state: {
    hover: {
      fill: {
        color: '#edf1f5',
        opacity: 100,
      },
      border: {
        width: 0,
        color: '#000000',
        opacity: 100,
      },
      font: {
        color: '#d49c59',
      },
    },
    clicked: {
      font: {
        color: '#bdbdbd',
      },
    },
  },
  store: {
    menuItems: [
      {
        text: 'Home',
      },
      {
        text: 'Media',
      },
      {
        text: 'Contact',
      },
      {
        text: 'About',
      },
    ],
  }
};

const themed_menu_comp3 = {
  kind: 'Menu',
  meta: {
    theme: 'themed_menu_comp3',
  },
  spec: {
    layout: {
      align: 'center',
      margin: 0,
    },
    rect: {
      width: 708,
      height: 50,
      x: 20,
      y: 100,
    },
    animation: {
    },
    fill: {
      color: '#ffffff',
      opacity: 0,
    },
    separator: {
      color: '#000000',
      opacity: 100,
    },
    border: {
      color: '#000000',
      width: 0,
      opacity: 100,
    },
    font: {
      fontFamily: 'Arial',
      fontSize: 13,
      color: '#000000',
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
    gap: 0,
  },
  state: {
    hover: {
      fill: {
        color: '#edf1f5',
        opacity: 0,
      },
      border: {
        width: 0,
        color: '#000000',
        opacity: 100,
      },
      font: {
        color: '#d49c59',
      },
    },
    clicked: {
      font: {
        color: '#bdbdbd',
      },
    },
  },
  store: {
    menuItems: [
      {
        text: 'Home',
      },
      {
        text: 'Media',
      },
      {
        text: 'Contact',
      },
      {
        text: 'About',
      },
    ],
  }
};

export default [
  themed_menu_comp1,
  themed_menu_comp2,
  themed_menu_comp3,
]
