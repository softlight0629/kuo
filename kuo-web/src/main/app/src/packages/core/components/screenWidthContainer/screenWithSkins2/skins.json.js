export default {
	"wysiwyg.viewer.skins.screenwidthcontainer.AppleScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"shd": "BOX_SHADOW",
			"bg": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
			"brw": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"shd": "0 1px 3px rgba(0, 0, 0, 0.5)",
			"bg": "color_11",
			"rd": "0",
			"brw": "0",
			"brd": "color_15",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background-color:[bg];[rd]  border:[brw] solid [brd];background-image:url([tdr]apple_box.png);background-repeat:repeat-x;background-position:0 0;",
			"%inlineContent": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen": {
		"react": [
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}]
			],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"shd": "BOX_SHADOW",
			"bg": "BG_COLOR_ALPHA",
			"brwt": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"brwb": "SIZE",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"shd": "inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.6)",
			"bg": "color_11",
			"brwt": "0",
			"brd": "color_15",
			"brwb": "0",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_bg": "position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background-color:[bg];border-top:[brwt] solid [brd];border-bottom:[brwb] solid [brd];background-image:url([tdr]bevel_300.png);background-repeat:repeat-x;",
			"%bg": "position:absolute;top:[brwt];right:0;bottom:[brwb];left:0;",
			"%[data-state~=\"mobileView\"] %bg": "left:10px;right:10px;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.BlankScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.BoxScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"shd": "BOX_SHADOW",
			"bg": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
			"brw": "SIZE",
			"brd": "BORDER_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"shd": "0 1px 3px rgba(0, 0, 0, 0.5)",
			"bg": "color_11",
			"rd": "0",
			"brw": "0",
			"brd": "color_15"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background-color:[bg];[rd]  border:[brw] solid [brd];box-sizing:border-box;",
			"%inlineContent": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen": {
		"react": [
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}]
			],
			["div", "centeredContent", [], {},
				["div", "bg", [], {},
					["div", null, ["_bg-center"], {}]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"brwt": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"brwb": "SIZE",
			"bgctr": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS"
		},
		"paramsDefaults": {
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"brwt": "0",
			"brd": "color_15",
			"brwb": "0",
			"bgctr": "color_11",
			"rd": "0"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[shd]  border-top:[brwt] solid [brd];border-bottom:[brwb] solid [brd];",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"mobileView\"] %bg": "left:10px;right:10px;",
			"%_bg-center": "position:absolute;top:[brwt];right:0;bottom:[brwb];left:0;background-color:[bgctr];[rd]",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen": {
		"react": [
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}],
				["div", null, ["_outer"], {},
					["div", null, ["_inner"], {}]
				]
			],
			["div", "centeredContent", [], {},
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bgPosition": "SIZE",
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"bordersPosition": "SIZE",
			"outerLineSize": "BORDER_SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"lineGap": "SIZE",
			"innerLineSize": "BORDER_SIZE",
			"brd2": "BORDER_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"bgPosition": "0",
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"bordersPosition": "6",
			"outerLineSize": "3",
			"brd": "color_15",
			"lineGap": "5",
			"innerLineSize": "1",
			"brd2": "color_14"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_bg": "position:absolute;top:[bgPosition];right:0;bottom:[bgPosition];left:0;background-color:[bg];[shd]",
			"%_outer": "position:absolute;top:[bordersPosition];right:0;bottom:[bordersPosition];left:0;border-top:[outerLineSize] solid [brd];border-bottom:[outerLineSize] solid [brd];",
			"%_inner": "position:absolute;top:[lineGap];right:0;bottom:[lineGap];left:0;border-top:[innerLineSize] solid [brd2];border-bottom:[innerLineSize] solid [brd2];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.GridScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bg": "BG_COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"bg": "color_11",
			"xxx": "color_1",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;background:#fff url([tdr]grid.png) repeat-y 50% 0;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", ["_border"], {},
					["div", null, ["_bg"], {}]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
			"brw": "SIZE",
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"rd": "0",
			"brw": "0",
			"bg": "color_11",
			"shd": "inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 1px rgba(255, 255, 255, 0.75)"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_border": "position:absolute;top:0;right:0;bottom:0;left:0;background:[brd];[rd]",
			"%[data-state~=\"mobileView\"] %_border": "left:10px;right:10px;",
			"%_bg": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];background-color:[bg];[rd]  [shd]",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.IronScreen": {
		"react": [
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}]
			],
			["div", "centeredContent", [], {},
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"tdr": "URL",
			"shadow": "BOX_SHADOW"
		},
		"paramsDefaults": {
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"tdr": "BASE_THEME_DIRECTORY",
			"shadow": "inset 0 4px 6px -4px rgba(255, 255, 255, 0.59), inset 0 1px 0 0 rgba(255, 255, 255, 0.59), inset 0 -5px 5px -5px rgba(255, 255, 255, 0.9)"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[shd]  background-image:url([tdr]ironpatern.png);",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_bg": "[shadow]",
			"%[data-state~=\"mobileView\"] %_bg": "left:10px;right:10px;",
			"%inlineContent,ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.LiftedBottomScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {},
					["div", null, ["_shadow", "_leftBottom"], {}],
					["div", null, ["_shadow", "_centerBottom"], {}],
					["div", null, ["_shadow", "_rightBottom"], {}],
					["div", null, ["_border"], {},
						["div", null, ["_bg"], {}]
					]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "BG_COLOR_ALPHA",
			"brw": "SIZE",
			"bg": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"brw": "0",
			"bg": "color_11",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_border": "position:absolute;top:0;right:0;bottom:0;left:0;background:[brd];",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%_bg": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];background-color:[bg];",
			"%_shadow": "position:absolute;top:-15px;bottom:-15px;background-image:url([tdr]shdbottom.png);background-repeat:no-repeat;pointer-events:none;",
			"%_leftBottom": "left:-15px;background-position:left bottom;width:50px;",
			"%_rightBottom": "right:-15px;background-position:right bottom;width:50px;",
			"%_centerBottom": "right:35px;left:35px;background-position:center bottom;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"mobileView\"] %_border": "left:10px;right:10px;",
			"%[data-state~=\"mobileView\"] %_shadow": "display:none;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.LiftedShadowScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", null, ["_left", "_shd"], {}],
				["div", null, ["_right", "_shd"], {}],
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"shd": "BOX_SHADOW",
			"bg": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
			"brw": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"shd": "0 1px 3px rgba(0, 0, 0, 0.5)",
			"bg": "color_11",
			"rd": "0",
			"brw": "0",
			"brd": "color_15",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background-color:[bg];[rd]  border:[brw] solid [brd];",
			"%_shd": "position:absolute;bottom:-26px;width:165px;height:26px;background-image:url([tdr]liftedshadow_medium.png);background-repeat:no-repeat;pointer-events:none;",
			"%_left": "left:-20px;background-position:0 0;",
			"%_right": "right:-20px;background-position:100% 0;",
			"%inlineContent": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.LiftedTopScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", ["_border"], {},
					["div", null, ["_shadow", "_leftTop"], {}],
					["div", null, ["_shadow", "_centerTop"], {}],
					["div", null, ["_shadow", "_rightTop"], {}],
					["div", null, ["_bg"], {}]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "BG_COLOR_ALPHA",
			"brw": "SIZE",
			"bg": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"brw": "0",
			"bg": "color_11",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_border": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[brd];",
			"%_bg": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];background-color:[bg];",
			"%_shadow": "position:absolute;top:-15px;bottom:-15px;background-image:url([tdr]shdtop.png);background-repeat:no-repeat;pointer-events:none;",
			"%_leftTop": "left:-15px;background-position:left top;width:50px;",
			"%_rightTop": "right:-15px;background-position:right top;width:50px;",
			"%_centerTop": "right:35px;left:35px;background-position:center top;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"mobileView\"] %_border": "left:10px;right:10px;",
			"%[data-state~=\"mobileView\"] %_shadow": "display:none;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.LineBottomScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "COLOR_ALPHA",
			"bg": "BG_COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"bg": "color_11",
			"xxx": "color_11",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;border-bottom:1px solid [brd];",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];background:[xxx] url([tdr]net.png) center center repeat;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.LineTopScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL",
			"bg": "BG_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"xxx": "color_11",
			"tdr": "BASE_THEME_DIRECTORY",
			"bg": "color_11"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;border-top:1px solid [brd];background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.NoiseScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bgc": "BG_COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"bgc": "color_11",
			"xxx": "color_1",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc];background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.ShadowBottomScreen": {
		"react": [
			["div", "centerArea", [], {},
				["div", null, ["_left", "_ln"], {}],
				["div", null, ["_center", "_ln"], {}],
				["div", null, ["_right", "_ln"], {}]
			],
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}]
			],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"tdr": "URL",
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"brwt": "BORDER_TOP_SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"brwb": "BORDER_BOTTOM_SIZE",
			"bgctr": "BG_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"tdr": "BASE_THEME_DIRECTORY",
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"brwt": "0",
			"brd": "color_15",
			"brwb": "0",
			"bgctr": "color_11"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_ln": "bottom:-14px;height:14px;min-height:14px;background-image:url([tdr]shadowbottom.png);position:absolute;",
			"%_left": "background-position:0 -29px;width:100px;left:0;",
			"%_right": "background-position:100% -29px;width:100px;right:0;",
			"%[data-state~=\"mobileView\"] ÎnterArea": "width:320px;",
			"ÎnterArea": "position:relative;width:980px;height:100%;margin:auto;",
			"%_center": "background-position:0 0;right:100px;left:100px;",
			"%_bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[shd]  border-top:[brwt] solid [brd];border-bottom:[brwb] solid [brd];",
			"%bg": "position:absolute;left:0;right:0;top:[brwt];bottom:[brwb];background-color:[bgctr];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"mobileView\"] %bg": "left:10px;right:10px;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.ShadowScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"shd": "BOX_SHADOW",
			"bgc": "BG_COLOR_ALPHA",
			"clr": "BORDER_COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"shd": "0 0 5px rgba(0, 0, 0, 0.5)",
			"bgc": "color_11",
			"clr": "color_15",
			"xxx": "color_11",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background-color:[bgc];border:1px solid [clr];background:[xxx] url([tdr]net.png) center center repeat;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.ShadowTopScreen": {
		"react": [
			["div", "screenWidthBackground", [], {},
				["div", null, ["_bg"], {}]
			],
			["div", "centeredContent", [], {},
				["div", "bg", [], {},
					["div", null, ["_left", "_ln"], {}],
					["div", null, ["_center", "_ln"], {}],
					["div", null, ["_right", "_ln"], {}]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"tdr": "URL",
			"bg": "BG_COLOR_ALPHA",
			"shd": "BOX_SHADOW",
			"brwt": "SIZE",
			"brd": "BORDER_COLOR_ALPHA",
			"brwb": "SIZE",
			"bgctr": "BG_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"tdr": "BASE_THEME_DIRECTORY",
			"bg": "color_11",
			"shd": "0 0 5px rgba(0, 0, 0, 0.7)",
			"brwt": "0",
			"brd": "color_15",
			"brwb": "0",
			"bgctr": "color_11"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_ln": "top:-14px;height:14px;min-height:14px;background-image:url([tdr]shadowtop.png);position:absolute;",
			"%_left": "background-position:0 0;width:100px;left:0;",
			"%_right": "background-position:100% 0;width:100px;right:0;",
			"%_center": "background-position:0 14px;right:100px;left:100px;",
			"%_bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bg];[shd]  border-top:[brwt] solid [brd];border-bottom:[brwb] solid [brd];",
			"%bg": "position:absolute;top:[brwt];right:0;bottom:[brwb];left:0;background-color:[bgctr];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.SolidScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bgc": "BG_COLOR_ALPHA",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL"
		},
		"paramsDefaults": {
			"bgc": "color_11",
			"xxx": "color_1",
			"tdr": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc];background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.ThreeDeeScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {},
					["div", null, ["_bg"], {},
						["div", null, ["_border"], {}]
					]
				],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"brd": "BG_COLOR_ALPHA",
			"rd": "BORDER_RADIUS",
			"brw": "SIZE",
			"bg": "BG_COLOR_ALPHA",
			"shc": "COLOR"
		},
		"paramsDefaults": {
			"brd": "color_15",
			"rd": "0",
			"brw": "0",
			"bg": "color_11",
			"shc": ["bg"]
		},
		"paramsMutators": {
			"shc": {
				"type": "brightness",
				"value": 0.5,
				"param": "bg"
			}
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%_border": "position:absolute;top:0;right:0;bottom:0;left:0;background:[brd];[rd]  box-shadow:1px 1px [shc], 3px 3px [shc], 5px 5px [shc], 7px 7px [shc], 9px 9px [shc];",
			"%[data-state~=\"mobileView\"] %_bg": "left:10px;right:10px;",
			"%_bg": "position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];background-color:[bg];[rd]",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%inlineContent,ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.TransparentHalfScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL",
			"bgc1": "BG_COLOR",
			"bgc2": "BG_COLOR"
		},
		"paramsDefaults": {
			"xxx": "color_1",
			"tdr": "BASE_THEME_DIRECTORY",
			"bgc1": "color_15",
			"bgc2": "color_15"
		},
		"paramsMutators": {
			"bgc1": {
				"type": "alpha",
				"value": 0.1
			},
			"bgc2": {
				"type": "alpha",
				"value": 0.5
			}
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc1];background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc2];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.TwoColorScreen": {
		"react": [
			["div", "screenWidthBackground", [], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {},
					["div", "inlineContent", [], {}]
				]
			]
		],
		"params": {
			"bgc1": "BG_COLOR_ALPHA",
			"brw": "BORDER_TOP_SIZE",
			"brw1": "BORDER_BOTTOM_SIZE",
			"xxx": "BG_COLOR_ALPHA",
			"tdr": "URL",
			"bgc2": "BG_COLOR_ALPHA"
		},
		"paramsDefaults": {
			"bgc1": "color_11",
			"brw": "1px",
			"brw1": "0",
			"xxx": "color_11",
			"tdr": "BASE_THEME_DIRECTORY",
			"bgc2": "color_11"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc1];border-top:[brw] solid #f00;border-bottom:[brw1] solid #f00;overflow:hidden;background:[xxx] url([tdr]net.png) center center repeat;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"%bg": "position:absolute;top:0;right:0;bottom:0;left:0;background-color:[bgc2];",
			"%inlineContent": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"ÎnteredContent": "position:absolute;top:0;right:0;bottom:0;left:0;"
		}
	},
	"wysiwyg.viewer.skins.screenwidthcontainer.WoodScreen": {
		"react": [
			["div", "screenWidthBackground", ["_wood"], {}],
			["div", "centeredContent", [], {},
				["div", "bg", [], {}],
				["div", "inlineContent", [], {}]
			]
		],
		"params": {
			"bgc": "BG_COLOR_ALPHA",
			"$BorderRadius": "BORDER_RADIUS",
			"$boxShadow": "BOX_SHADOW",
			"baseThemeDir": "URL"
		},
		"paramsDefaults": {
			"bgc": "color_1",
			"$BorderRadius": "5px",
			"$boxShadow": "0 1px 3px rgba(0, 0, 0, 0.8)",
			"baseThemeDir": "BASE_THEME_DIRECTORY"
		},
		"css": {
			"%screenWidthBackground": "position:absolute;top:0;right:0;bottom:0;left:0;",
			"%[data-state~=\"fixedPosition\"]": "position:fixed !important;left:auto !important;z-index:50;",
			"%[data-state~=\"fixedPosition\"]%_footer": "top:auto;bottom:0;",
			"ÎnteredContent": "position:absolute;height:100%;",
			"%bg": "position:absolute;top:10px 0;right:10px;bottom:0;left:0;background-color:[bgc];[$BorderRadius]  [$boxShadow]",
			"%inlineContent": "position:absolute;top:50px;right:0;bottom:50px;left:0;",
			"%[data-state~=\"hidden\"] %bg": "background:none !important;border:none none !important;box-shadow:none !important;",
			"%_borderGreekFrame": "border-width:24px;top:100px;right:90px;bottom:100px;left:90px;border-image:url([baseThemeDir]border_greekFrame.png) 24 repeat repeat;",
			"%_borderAncientFrame": "border-width:45px;border-image:url([baseThemeDir]border_ancientFrame.png) 45 repeat repeat;",
			"%_borderVinietFrame": "border-width:45px;border-image:url([baseThemeDir]border_vinietFrame.png) 90 repeat repeat;",
			"%_borderOldFrame": "border-width:25px;border-image:url([baseThemeDir]border_oldFrame.png) 25 repeat repeat;",
			"%_borderWoodFrame": "border-width:20px;border-image:url([baseThemeDir]border_woodFrame.png) 20 repeat repeat;",
			"%_net": "background-image:url([baseThemeDir]net.png);",
			"%_paper": "background-image:url([baseThemeDir]paper.jpg);",
			"%_grass": "background-image:url([baseThemeDir]bg_grass.jpg);",
			"%_notePaper": "background-image:url([baseThemeDir]bg_NotePaper.png);",
			"%_vichy": "background-image:url([baseThemeDir]vichy.png);",
			"%_silverscales": "background-image:url([baseThemeDir]silver_scales.png);",
			"%_leather": "background-image:url([baseThemeDir]leather.png);",
			"%_oldmathematics": "background-image:url([baseThemeDir]old_mathematics.png);",
			"%_paven": "background-image:url([baseThemeDir]paven.png);",
			"%_polaroid": "background-image:url([baseThemeDir]polaroid.png);",
			"%_realcf": "background-image:url([baseThemeDir]real_cf.png);",
			"%_washi": "background-image:url([baseThemeDir]washi.png);",
			"%_woven": "background-image:url([baseThemeDir]woven.png);",
			"%_randomgreyvariations": "background-image:url([baseThemeDir]random_grey_variations.png);",
			"%_inflicted": "background-image:url([baseThemeDir]inflicted.png);",
			"%_crissXcross": "background-image:url([baseThemeDir]crissXcross.png);",
			"%_cristals": "background-image:url([baseThemeDir]cristals.png);",
			"%_damask": "background-image:url([baseThemeDir]damask.png);",
			"%_darkbrickwall": "background-image:url([baseThemeDir]dark_brick_wall.png);",
			"%_waves": "background-image:url([baseThemeDir]bg_waves.png);",
			"%_wood": "background-image:url([baseThemeDir]bg_wood1.jpg);"
		}
	}
}
