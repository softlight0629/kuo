export default {
	"MediaContainerDesignData": {
		"type": "object",
		"properties": {
			"charas": {
				"type": ["string", "null"]
			},
			"background": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"dataChangeBehaviors": {
				"$ref": "dataChangeBehaviors"
			},
			"cssStyle": {
				"$ref": "cssStyle"
			},
			"themeMappings": {
				"type": "object"
			}
		}
	},
	"MediaPlayerDesignData": {
		"type": "object",
		"properties": {
			"charas": {
				"type": ["string", "null"]
			},
			"background": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"cssStyle": {
				"$ref": "cssStyle"
			},
			"themeMappings": {
				"type": "object"
			}
		}
	},
	"cssStyle": {
		"type": "object",
		"properties": {
			"cssBorder": {
				"oneOf": [{
					"type": "null"
				}, {
					"$ref": "cssBorder"
				}]
			},
			"cssBoxShadow": {
				"oneOf": [{
					"type": "null"
				}, {
					"$ref": "cssBoxShadow"
				}]
			}
		}
	},
	"dataChangeBehaviors": {
		"type": ["array", "null"],
		"items": {
			"type": "object",
			"properties": {
				"trigger": {
					"type": "string"
				},
				"type": {
					"type": "string"
				},
				"part": {
					"type": "string"
				},
				"name": {
					"type": "string"
				},
				"params": {
					"type": "object"
				}
			}
		}
	},
	"BackgroundMedia": {
		"type": "object",
		"properties": {
			"mediaRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"mediaTransforms": {
				"$ref": "BackgroundTransforms"
			},
			"overlayTransforms": {
				"$ref": "BackgroundTransforms"
			},
			"color": {
				"type": "string",
				"format": "color"
			},
			"colorOpacity": {
				"type": "number"
			},
			"alignType": {
				"type": "string",
				"enum": ["top", "bottom", "left", "right", "center", "top_left", "top_right", "bottom_left", "bottom_right"]
			},
			"fittingType": {
				"type": "string",
				"enum": ["fill", "fit", "stretch", "actual_size", "original_size", "tile", "tile_horizontal", "tile_vertical", "fit_and_tile", "legacy_tile", "legacy_tile_horizontal", "legacy_tile_vertical", "legacy_normal"]
			},
			"scrollType": {
				"type": "string",
				"enum": ["none", "fixed", "scroll", "local", "parallax"]
			},
			"showOverlayForMediaType": {
				"type": "string",
				"enum": ["all", "WixVideo", "Image"],
				"default": "WixVideo"
			},
			"imageOverlay": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"colorOverlay": {
				"type": "string",
				"format": "color"
			},
			"colorOverlayOpacity": {
				"type": "number"
			},
			"overlayBlending": {
				"$ref": "overlayBlending"
			},
			"filterEffect": {
				"$ref": "filterEffect"
			}
		}
	},
	"filterEffect": {
		"type": "object",
		"properties": {
			"effectType": {
				"type": "string"
			},
			"brightness": {
				"type": "number",
				"minimum": 0,
				"maximum": 2
			},
			"contrast": {
				"type": "number",
				"minimum": 0,
				"maximum": 2
			},
			"saturate": {
				"type": "number",
				"minimum": 0,
				"maximum": 2
			},
			"alpha": {
				"type": "number",
				"minimum": 0,
				"maximum": 1
			},
			"color": {
				"type": "string"
			},
			"blur": {
				"type": "number"
			},
			"doutoneBlackColor": {
				"type": "string"
			},
			"doutoneWhiteColor": {
				"type": "string"
			}
		}
	},
	"overlayBlending": {
		"type": "object",
		"properties": {
			"color": {
				"type": "string"
			},
			"opacity": {
				"type": "number",
				"minimum": 0,
				"maximum": 1
			},
			"contrast": {
				"type": "number",
				"minimum": 0,
				"maximum": 2
			},
			"saturate": {
				"type": "number",
				"minimum": 0,
				"maximum": 2
			},
			"blendMode": {
				"type": "string",
				"enum": ["normal", "multiply", "screen", "darken", "lighten", "overlay", "colorDodge", "colorBurn", "hardLight", "softLight", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
			}
		}
	},
	"BackgroundTransforms": {
		"type": "object",
		"properties": {
			"scale": {
				"type": "number",
				"minimum": 0
			},
			"opacity": {
				"type": "number",
				"minimum": 0,
				"maximum": 1
			}
		}
	},
	"WixVideo": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"maxLength": 100
			},
			"alt": {
				"type": "string",
				"maxLength": 1000
			},
			"videoId": {
				"type": "string"
			},
			"generatedPosters": {
				"type": "array",
				"items": {
					"type": "string"
				}
			},
			"qualities": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"quality": {
							"type": "string"
						},
						"width": {
							"type": "number"
						},
						"height": {
							"type": "number"
						},
						"formats": {
							"type": "array",
							"items": {
								"type": "string"
							},
							"description": "Deprecated, replaced by 'format' and 'url' since we have a unique url for each quality"
						},
						"format": {
							"type": "string",
							"enum": ["mp4", "webm"]
						},
						"url": {
							"type": "string"
						}
					}
				}
			},
			"adaptiveVideo": {
				"type": ["array", "null"],
				"items": {
					"type": "object",
					"properties": {
						"format": {
							"type": "string",
							"enum": ["hls", "dash"]
						},
						"url": {
							"type": "string"
						}
					}
				}
			},
			"posterImageRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"duration": {
				"type": "number"
			},
			"loop": {
				"type": "boolean"
			},
			"autoplay": {
				"type": "boolean"
			},
			"playbackSpeed": {
				"type": "number"
			},
			"fps": {
				"type": "string",
				"maxLength": 50
			},
			"preload": {
				"type": "string",
				"enum": ["auto", "metadata", "none"]
			},
			"controls": {
				"type": "string",
				"enum": ["none", "full"]
			},
			"mute": {
				"type": "boolean",
				"description": "deprecated, moved to properties"
			},
			"hasAudio": {
				"type": "boolean",
				"description": "video has no audio"
			},
			"opacity": {
				"type": "number"
			},
			"artist": {
				"type": "object",
				"properties": {
					"name": {
						"type": "string"
					},
					"id": {
						"type": "string"
					}
				}
			},
			"mediaFeatures": {
				"description": "Annotate which features does this video have, for example 'media is a video with alpha'",
				"oneOf": [{
					"type": "null"
				}, {
					"type": "array",
					"items": {
						"type": "string",
						"enum": ["alpha", "360"]
					}
				}]
			}
		}
	},
	"Video": {
		"type": "object",
		"properties": {
			"videoId": {
				"type": "string"
			},
			"userId": {
				"type": "string"
			},
			"posterImage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"videoType": {
				"type": "string",
				"enum": ["YOUTUBE", "VIMEO", "FACEBOOK", "DAILYMOTION"],
				"default": "YOUTUBE"
			}
		}
	},
	"RepeatedData": {
		"type": "object",
		"description": "data used for the serialization of a component inside a repeater component",
		"properties": {
			"original": {
				"type": "object",
				"description": "the original data item of a component inside a repeater according to the specific component schema"
			},
			"overrides": {
				"type": "object",
				"description": "a map from itemId in a repeater to its data item according to the specific component schema"
			}
		}
	},
	"Image": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"title": {
				"type": "string",
				"default": "",
				"maxLength": 100
			},
			"uri": {
				"type": "string",
				"default": ""
			},
			"description": {
				"type": "string",
				"maxLength": 1200
			},
			"height": {
				"type": "number",
				"default": 200
			},
			"width": {
				"type": "number",
				"default": 200
			},
			"borderSize": {
				"type": "string"
			},
			"alt": {
				"type": "string",
				"default": ""
			},
			"originalImageDataRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"description": "Original Image before edit",
				"default": null
			},
			"opacity": {
				"type": "number"
			},
			"crop": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "object",
					"minProperties": 4,
					"properties": {
						"x": {
							"type": "number",
							"minimum": 0
						},
						"y": {
							"type": "number",
							"minimum": 0
						},
						"width": {
							"type": "number",
							"minimum": 0
						},
						"height": {
							"type": "number",
							"minimum": 0
						},
						"svgId": {
							"type": "string",
							"description": "Defines an svg uri for a mask inside the crop boundaries"
						},
						"flip": {
							"type": "string",
							"enum": ["vertical", "horizontal", "both", "none"],
							"description": "Defines whether the mask is flipped on the v or h axis"
						},
						"rotate": {
							"type": "number",
							"minimum": 0,
							"maximum": 360,
							"description": "Defines a rotation angle for the mask"
						}
					}
				}]
			},
			"focalPoint": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "object",
					"minProperties": 2,
					"properties": {
						"x": {
							"type": "number",
							"minimum": 0,
							"maximum": 100
						},
						"y": {
							"type": "number",
							"minimum": 0,
							"maximum": 100
						}
					}
				}]
			},
			"artist": {
				"type": "object",
				"properties": {
					"name": {
						"type": "string"
					},
					"id": {
						"type": "string"
					}
				}
			}
		}
	},
	"MediaControlsDesignData": {
		"type": "object",
		"properties": {
			"iconsDefaultDesign": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"description": "VectorImageDesignData reference to design all icons"
			},
			"icons": {
				"type": ["null", "array"],
				"pseudoType": ["refList"],
				"description": "ControlIconDesignData references"
			}
		}
	},
	"ControlIconDesignData": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string"
			},
			"svgId": {
				"type": "string"
			},
			"iconDesign": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"description": "VectorImageDesignData reference to override the default design"
			}
		}
	},
	"VectorImageDesignData": {
		"type": "object",
		"properties": {
			"shapeStyle": {
				"type": "object",
				"anyOf": [{
					"properties": {
						"opacity": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						}
					},
					"description": "Style values for all 'art' type svgs"
				}, {
					"properties": {
						"strokeWidth": {
							"type": "number"
						},
						"fill": {
							"type": "string"
						},
						"fillOpacity": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						},
						"stroke": {
							"type": "string"
						},
						"strokeOpacity": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						},
						"enableStroke": {
							"type": "boolean"
						}
					},
					"description": "Style values for all 'shape' type svgs"
				}]
			},
			"overrideColors": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "object",
					"minProperties": 1,
					"properties": {
						"color1": {
							"type": ["null", "string"]
						},
						"color2": {
							"type": ["null", "string"]
						},
						"color3": {
							"type": ["null", "string"]
						},
						"color4": {
							"type": ["null", "string"]
						},
						"color5": {
							"type": ["null", "string"]
						},
						"color6": {
							"type": ["null", "string"]
						},
						"color7": {
							"type": ["null", "string"]
						},
						"color8": {
							"type": ["null", "string"]
						}
					}
				}]
			}
		}
	}
}
