

export default {
  'mila.viewer.skins.screenwidthcontainer.DefaultScreen': {
    react: [
      ['div', 'screenWidthBackground', [], {},
        ['div', null, ['_bg'], {}]
      ],
      ['div', 'centeredContent', [], {},
        ['div', 'bg', [], {},
          ['div', null, ['_bg-center'], {}]
        ],
        ['div', 'inlineContent', [], {}],
      ]
    ],
    params: [
      "bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"brwt": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"brwb": "SIZE",
			"bgctr": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
    ],
    paramsDefaults: {
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"brwt": "0",
			"brd": "color_15",
			"brwb": "0",
			"bgctr": "color_11",
			"rd": "0"
    },
    css: {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[shd]  border-top:[brwt] solid [brd];border-bottom:[brwb] solid [brd];",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"mobileView\"] %bg": "left:10px;right:10px;",
			"%_bg-center": "position:absolute;top:[brwt];right:0;bottom:[brwb];left:0;background-color:[bgctr];[rd]",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
    },
  },
}
