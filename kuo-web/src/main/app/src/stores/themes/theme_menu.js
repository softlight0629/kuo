
export default [
  {
    astm: 'Menu',
    spec: {
      layout: {
        align: 'left',
        margin: 0,
      },
      rect: {
        width: 660,
        height: 50,
        x: 20,
        y: 100,
      },
      animation: {
        // animate: 'rubberBand',
      },
      fill: {
        color: '#fdf5fc',
        opacity: 82,
      },
      border: {
        color: '#fdf5fc',
        width: 1,
        opacity: 82,
      },
      font: {
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#000',
      },
      corner: {
        leftTop: 0,
        rightTop: 0,
        leftBottom: 0,
        rightBottom: 0,
      },
    },
    state: {
      hover: {
        fill: {
          color: '#d3d3d3',
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
  }
]
