
const themes = {
  h1: { fontSize: 35, bold: false },
  h2: { fontSize: 17, bold: true },
  h3: { fontSize: 60, bold: false },
  h4: { fontSize: 40, bold: true },
  h5: { fontSize: 22, bold: true },
  h6: { fontSize: 20, bold: false },
  p1: { fontSize: 16, bold: false },
  p2: { fontSize: 15, bold: false },
  p3: { fontSize: 13, bold: false },
}

const theme2font = theme => themes[theme]

export default theme2font;
