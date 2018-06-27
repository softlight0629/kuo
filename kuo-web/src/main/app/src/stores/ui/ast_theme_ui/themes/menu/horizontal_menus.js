const horizontal_menu_comp1 = {
  kind: 'Menu',
  meta: {
    theme: 'horizontal_menu_comp1',
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
      color: '#444444',
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
  },
  state: {
    hover: {
      fill: {
        color: '#ede9e1',
        opacity:60,
      },
      border: {
        width: 0,
        color: '#000000',
        opacity: 100,
      },
      font: {
        color: '#444444',
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

const horizontal_menu_comp2 = {
  kind: 'Menu',
  meta: {
    theme: 'horizontal_menu_comp2',
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
      fontSize: 20,
      color: '#000000',
      bold: true,
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
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
        color: '#20ce88',
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

const horizontal_menu_comp3 = {
  kind: 'Menu',
  meta: {
    theme: 'horizontal_menu_comp3',
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
      opacity: 100,
    },
    border: {
      color: '#566fb8',
      width: 2,
      opacity: 100,
    },
    font: {
      fontFamily: 'Arial',
      fontSize: 17,
      color: '#566fb8',
    },
    corner: {
      leftTop: '0',
      rightTop: '0',
      leftBottom: '0',
      rightBottom: '0',
    },
    gap: 5,
  },
  state: {
    hover: {
      fill: {
        color: '#566fb8',
        opacity: 100,
      },
      border: {
        width: 2,
        color: '#566fb8',
        opacity: 100,
      },
      font: {
        color: '#ffffff',
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

const horizontal_menu_comp4 = {
  kind: 'Menu',
  meta: {
    theme: 'horizontal_menu_comp4',
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

export default [
  horizontal_menu_comp1,
  horizontal_menu_comp2,
  horizontal_menu_comp3,
  horizontal_menu_comp4,
];
