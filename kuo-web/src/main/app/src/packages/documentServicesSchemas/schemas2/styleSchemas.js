export default {
	"WFlatTheme": {
		"type": "object",
		"properties": {
			"THEME_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"BG_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"CONTACT_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"NETWORKS_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"EXTERNAL_LINKS_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"PAGES_DIRECTORY": {
				"type": "string",
				"format": "themeUrl",
				"default": "base"
			},
			"WEB_THEME_DIRECTORY": {
				"type": "string",
				"format": "webThemeUrl",
				"default": "base"
			},
			"BASE_THEME_DIRECTORY": {
				"type": "string",
				"format": "webThemeUrl",
				"default": "base"
			},
			"siteBg": {
				"type": "string",
				"default": "none 0 0 center center auto repeat no-repeat fixed {color_2}"
			},
			"color": {
				"type": "array",
				"items": {
					"type": ["null", "string"],
					"format": "color"
				},
				"default": ["#000000", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#333333", "#666666", "#999999", "#AAAAAA", "#DCDCDC", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
			},
			"font": {
				"type": "array",
				"items": {
					"type": ["null", "string"],
					"format": "font"
				},
				"default": ["normal normal normal 24px/1.2em Arial {color_5}", "normal normal bold 16px/1.1em Arial {color_5}", "italic normal bold 18px/1.1em Lobster {color_5}", "normal normal bold 22px/1.1em Arial {color_5}", "normal normal bold 20px/1.1em Arial {color_5}", "normal normal normal 18px/1.3em Arial {color_5}", "normal normal normal 16px/1.2em Arial {color_6}", "normal normal normal 14px/1.3em Arial {color_6}", "normal normal normal 12px/1.3em Arial {color_6}", "normal normal normal 10px/1.3em Arial {color_6}", "normal normal normal 8px/1.3em Arial {color_6}"]
			},
			"border": {
				"type": "array",
				"items": {
					"type": ["null", "string"],
					"format": "border"
				},
				"default": ["0.15em solid [color_0]", "0.15em solid [color_0]", "0.15em solid [color_0]"]
			},
			"padding1": {
				"type": "string",
				"format": "padding",
				"default": "0 0 0 0"
			},
			"padding2": {
				"type": "string",
				"format": "padding",
				"default": "0.0em 0.5em 0.0em 0.5em"
			},
			"padding3": {
				"type": "string",
				"format": "padding",
				"default": "1.0em 0.0em 1.0em 0.0em"
			},
			"iconSize": {
				"type": "number",
				"default": "3.2"
			},
			"bulletSize": {
				"type": "number",
				"default": "1.5"
			},
			"headerSpacing": {
				"type": "number",
				"default": "0em"
			},
			"componentSpacing": {
				"type": "number",
				"default": "0.45em"
			},
			"itemSpacing": {
				"type": "number",
				"default": "0.75em"
			},
			"thumbSpacing": {
				"type": "number",
				"default": "0.23em"
			},
			"iconSpacing": {
				"type": "number",
				"default": "0.75em"
			},
			"mobileBg": {
				"type": "string",
				"default": "[siteBg]"
			},
			"themePresets": {
				"type": ["object", "null"]
			}
		}
	},
	"TopLevelStyle": {
		"type": "object",
		"properties": {
			"skin": {
				"type": "string"
			},
			"style": {
				"type": "object"
			},
			"styleType": {
				"type": "string",
				"enum": ["system", "custom", "userDefined"],
				"description": "type of the style, defaults to system style",
				"default": "custom"
			},
			"pageId": {
				"type": "string",
				"description": "for custom styles - id of the page where the component is"
			},
			"compId": {
				"type": "string",
				"description": "for custom styles - id of the component that has the custom style"
			},
			"componentClassName": {
				"type": "string",
				"description": "class name of the component type this style applies to"
			}
		}
	},
	"ComponentStyle": {
		"type": "object",
		"properties": {
			"skin": {
				"type": "string"
			},
			"style": {
				"type": "object"
			},
			"styleType": {
				"type": "string",
				"enum": ["custom"],
				"description": "style type for custom styles",
				"default": "custom"
			},
			"pageId": {
				"type": "string",
				"description": "id of the page where the component is"
			},
			"compId": {
				"type": "string",
				"description": "id of the component that has the custom style"
			},
			"componentClassName": {
				"type": "string",
				"description": "class name of the component type this style applies to"
			}
		}
	}
}
