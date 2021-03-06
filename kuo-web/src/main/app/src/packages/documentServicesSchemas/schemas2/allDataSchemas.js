export default {
	"BackgroundImage": {
		"type": "object",
		"properties": {
			"url": {
				"type": "string"
			},
			"positionx": {
				"type": "string",
				"enum": ["left", "right", "center"],
				"default": "center"
			},
			"imagesizew": {
				"type": "number"
			},
			"imagesizeh": {
				"type": "number"
			},
			"positiony": {
				"type": "string",
				"enum": ["top", "bottom", "center"],
				"default": "center"
			},
			"width": {
				"type": "string"
			},
			"repeatx": {
				"type": "string",
				"enum": ["no_repeat", "repeat"],
				"default": "repeat"
			},
			"repeaty": {
				"type": "string",
				"enum": ["no_repeat", "repeat"],
				"default": "repeat"
			},
			"attachment": {
				"type": "string",
				"enum": ["scroll", "fixed", "inherit", "local"],
				"default": "inherit"
			},
			"color": {
				"type": "string"
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
			"color": {
				"type": "string"
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
			"imageOverlay": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"colorOverlay": {
				"type": "string"
			},
			"colorOverlayOpacity": {
				"type": "number"
			}
		}
	},
	"WixVideo": {
		"type": "object",
		"allOf": [{
			"$ref": "WixVideoData"
		}, {
			"properties": {
				"loop": {
					"type": "boolean"
				},
				"autoplay": {
					"type": "boolean"
				},
				"playbackSpeed": {
					"type": "number"
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
				"opacity": {
					"type": "number"
				}
			}
		}]
	},
	"WixVideoData": {
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
			"fps": {
				"type": "string",
				"maxLength": 50
			},
			"hasAudio": {
				"type": "boolean",
				"description": "video has no audio"
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
	"Document": {
		"type": "object",
		"properties": {
			"renderModifiers": {
				"type": "object"
			},
			"name": {
				"type": "string"
			},
			"mainPage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"mainPageId": {
				"type": "string"
			},
			"pages": {
				"type": ["array", "null"],
				"pseudoType": ["refList"]
			},
			"smSettings": {
				"type": "object",
				"properties": {
					"allOf": [{
						"$ref": "SiteMembersData"
					}]
				}
			},
			"appStudioData": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"SiteMembersData": {
		"type": "object",
		"properties": {
			"socialLoginGoogleEnabled": {
				"type": "boolean"
			},
			"socialLoginFacebookEnabled": {
				"type": "boolean"
			},
			"joinCommunityCheckedByDefault": {
				"type": "boolean"
			},
			"customSignUpPageId": {
				"type": ["string"]
			},
			"customNoPermissionsPageId": {
				"type": ["string"]
			},
			"termsOfUse": {
				"type": "object",
				"properties": {
					"enabled": {
						"type": "boolean"
					},
					"link": {
						"type": ["string", "null"],
						"pseudoType": ["ref"]
					}
				}
			},
			"privacyPolicy": {
				"type": "object",
				"properties": {
					"enabled": {
						"type": "boolean"
					},
					"link": {
						"type": ["string", "null"],
						"pseudoType": ["ref"]
					}
				}
			},
			"codeOfConduct": {
				"type": "object",
				"properties": {
					"enabled": {
						"type": "boolean"
					},
					"link": {
						"type": ["string", "null"],
						"pseudoType": ["ref"]
					}
				}
			}
		}
	},
	"AppStudioData": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"widgets": {
				"type": ["null", "array"],
				"pseudoType": ["refList"],
				"default": []
			}
		}
	},
	"WidgetDescriptor": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string"
			},
			"rootCompId": {
				"type": ["string", "null"],
				"pseudoType": ["weakRef"]
			},
			"widgetApi": {
				"type": "object",
				"default": {},
				"properties": {
					"functions": {
						"type": "array",
						"default": [],
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"type": "string"
								},
								"description": {
									"type": ["string", "null"]
								},
								"params": {
									"type": "array",
									"items": {
										"type": "object",
										"properties": {
											"name": {
												"type": "string"
											},
											"description": {
												"type": ["string", "null"]
											}
										}
									}
								},
								"returnsDescription": {
									"type": ["string", "null"]
								}
							},
							"required": ["name"]
						}
					},
					"properties": {
						"type": "array",
						"default": [],
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"type": "string"
								},
								"displayName": {
									"type": "string"
								},
								"defaultValue": {
									"type": "string"
								},
								"description": {
									"type": "string"
								},
								"propType": {
									"type": "string",
									"enum": ["string", "number", "bool", "image", "dateTime", "url", "color"]
								},
								"validations": {
									"type": "object",
									"properties": {
										"min": {
											"type": "number"
										},
										"max": {
											"type": "number"
										},
										"step": {
											"type": "number"
										},
										"maxLength": {
											"type": "number"
										}
									}
								}
							},
							"required": ["name", "propType"]
						}
					},
					"events": {
						"type": "array",
						"default": [],
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"type": "string"
								},
								"description": {
									"type": "string"
								},
								"args": {
									"type": "array",
									"items": {
										"properties": {
											"name": {
												"type": "string"
											}
										}
									}
								}
							},
							"required": ["name"]
						}
					}
				}
			}
		}
	},
	"FlatTheme": {
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
			"font": {
				"type": "string",
				"format": "font-family",
				"default": "Arial,sans-serif"
			},
			"bgId": {
				"type": "string",
				"default": "BG_USES_THEME_IMAGE"
			},
			"bgSize": {
				"type": "string",
				"default": ","
			},
			"bgType": {
				"type": "string",
				"default": "BG_USES_THEME_IMAGE"
			},
			"siteBg": {
				"type": "string",
				"default": "none 0 0 center center auto repeat no-repeat fixed {color_2}"
			},
			"mobileBg": {
				"type": "string",
				"default": "none 0 0 center center auto repeat no-repeat fixed {color_2}"
			},
			"siteBgColor": {
				"type": "string",
				"format": "color",
				"default": "0,0,0,1"
			},
			"headerTextColor": {
				"type": "string",
				"format": "color",
				"default": "255,255,255,1"
			},
			"headerBgColor": {
				"type": "string",
				"format": "color",
				"default": "0,0,0,0"
			},
			"textColor": {
				"type": "string",
				"format": "color",
				"default": "255,255,255,1"
			},
			"areaBgColor": {
				"type": "string",
				"format": "color",
				"default": "130,81,13,1"
			},
			"iconBgColor": {
				"type": "string",
				"format": "color",
				"default": "255,255,255,1"
			},
			"borderColor": {
				"type": "string",
				"format": "color",
				"default": "255,255,255,1"
			},
			"fontHeader": {
				"type": "string",
				"format": "font",
				"default": "normal normal bold 2.4em/1.0em [font] {headerTextColor}"
			},
			"fontTitle": {
				"type": "string",
				"format": "font",
				"default": "italic normal bold 2.0em/2.0em [font] {siteBgColor}"
			},
			"fontSubTitle": {
				"type": "string",
				"format": "font",
				"default": "normal normal bold 1.2em/1.4em [font] {siteBgColor}"
			},
			"fontButton": {
				"type": "string",
				"format": "font",
				"default": "normal normal bold 1.4em/2.2em [font] {areaBgColor}"
			},
			"fontText": {
				"type": "string",
				"format": "font",
				"default": "normal normal normal 1.1em/1.1em [font] {siteBgColor}"
			},
			"fontSmallText": {
				"type": "string",
				"format": "font",
				"default": "normal normal normal 0.5em/0.7em [font] {siteBgColor}"
			},
			"borderContainer": {
				"type": "string",
				"format": "border",
				"default": "0.15em solid [borderColor]"
			},
			"borderThumb": {
				"type": "string",
				"format": "border",
				"default": "0.15em solid [borderColor]"
			},
			"borderButton": {
				"type": "string",
				"format": "border",
				"default": "0.15em solid [borderColor]"
			},
			"borderIcon": {
				"type": "string",
				"format": "border",
				"default": "0.15em solid [borderColor]"
			},
			"radiusContainer": {
				"type": "string",
				"format": "radius",
				"default": "0.6em 0.6em 0.6em 0.6em"
			},
			"radiusThumb": {
				"type": "string",
				"format": "radius",
				"default": "0.6em 0.6em 0.6em 0.6em"
			},
			"radiusButton": {
				"type": "string",
				"format": "radius",
				"default": "0.6em 0.6em 0.6em 0.6em"
			},
			"radiusIcon": {
				"type": "string",
				"format": "radius",
				"default": "0.6em 0.0em 0.0em 0.6em"
			},
			"padding1": {
				"type": "string",
				"format": "padding",
				"default": "1em 1em 1em 1em"
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
			}
		}
	},
	"Header": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"maxLength": 100
			},
			"imageSize": {
				"type": "string",
				"default": "medium"
			},
			"image": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
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
			"name": {
				"type": "string",
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
							"enum": ["x", "y", "xy", "none"],
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
			"upscaleMethod": {
				"type": "string",
				"description": "used for upscaling method when building an image url , expected values default|super"
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
	"GlobalImageQuality": {
		"$ref": "ImageQuality"
	},
	"ImageQuality": {
		"type": "object",
		"properties": {
			"quality": {
				"type": "integer",
				"minimum": 0,
				"maximum": 100
			},
			"unsharpMask": {
				"type": "object",
				"minProperties": 3,
				"additionalProperties": false,
				"properties": {
					"radius": {
						"type": "number",
						"minimum": 0,
						"maximum": 500
					},
					"amount": {
						"type": "number",
						"minimum": 0,
						"maximum": 10
					},
					"threshold": {
						"type": "number",
						"minimum": 0,
						"maximum": 255
					}
				}
			}
		}
	},
	"Bgimagestrip": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string"
			},
			"uri": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"height": {
				"type": "number"
			},
			"width": {
				"type": "number"
			},
			"borderSize": {
				"type": "string"
			},
			"alt": {
				"type": "string"
			},
			"originalImageDataRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"description": "Original Image before edit",
				"default": null
			}
		}
	},
	"StripContainer": {
		"type": "object",
		"properties": {
			"background": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"ImageList": {
		"type": "object",
		"properties": {
			"items": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
			}
		}
	},
	"Link": {
		"type": "object",
		"properties": {
			"linkType": {
				"type": "string",
				"default": "FREE_LINK"
			},
			"href": {
				"type": "string"
			},
			"text": {
				"type": "string",
				"maxLength": 1200
			},
			"target": {
				"type": "string"
			},
			"icon": {
				"type": "string"
			}
		}
	},
	"TextLink": {
		"type": "object",
		"properties": {
			"linkType": {
				"type": "string",
				"default": "FREE_LINK"
			},
			"href": {
				"type": "string"
			},
			"text": {
				"type": "string"
			},
			"target": {
				"type": "string"
			},
			"icon": {
				"type": "string"
			}
		}
	},
	"LinkList": {
		"type": "object",
		"properties": {
			"items": {
				"type": ["array", "null"],
				"pseudoType": ["refList"]
			},
			"subType": {
				"type": "string"
			}
		}
	},
	"AnchorLink": {
		"type": "object",
		"properties": {
			"anchorName": {
				"type": "string"
			},
			"anchorDataId": {
				"type": ["string", "null"],
				"pseudoType": ["weakRef", "string"]
			},
			"pageId": {
				"type": ["string", "null"],
				"pseudoType": ["weakRef"]
			}
		}
	},
	"DocumentLink": {
		"type": "object",
		"properties": {
			"docId": {
				"type": "string"
			},
			"name": {
				"type": "string"
			},
			"indexable": {
				"type": "boolean"
			}
		}
	},
	"PhoneLink": {
		"type": "object",
		"properties": {
			"phoneNumber": {
				"type": "string",
				"maxLength": 100
			}
		}
	},
	"WhatsAppLink": {
		"type": "object",
		"properties": {
			"phoneNumber": {
				"type": "string"
			}
		}
	},
	"EmailLink": {
		"type": "object",
		"properties": {
			"recipient": {
				"type": "string"
			},
			"subject": {
				"type": "string"
			},
			"body": {
				"type": "string"
			}
		}
	},
	"FormSubmitButtonLink": {
		"type": "object",
		"properties": {}
	},
	"ExternalLink": {
		"type": "object",
		"properties": {
			"url": {
				"type": "string"
			},
			"target": {
				"type": "string",
				"enum": ["_self", "_blank"],
				"default": "_blank"
			}
		}
	},
	"DynamicPageLink": {
		"type": "object",
		"properties": {
			"routerId": {
				"type": "string"
			},
			"innerRoute": {
				"type": "string"
			},
			"anchorDataId": {
				"type": ["string", "null"]
			}
		}
	},
	"LoginToWixLink": {
		"type": "object",
		"properties": {
			"postLoginUrl": {
				"type": "string"
			},
			"postSignupUrl": {
				"type": "string"
			},
			"dialog": {
				"type": "string",
				"enum": ["createUser", "login", "showLogin"],
				"default": "login"
			},
			"sendMail": {
				"type": "boolean",
				"default": true
			},
			"mailTemplate": {
				"type": "string"
			},
			"userColor": {
				"type": "string"
			},
			"loginCompName": {
				"type": "string",
				"default": ""
			}
		}
	},
	"PageLink": {
		"type": "object",
		"properties": {
			"pageId": {
				"type": ["string", "null"],
				"pseudoType": ["weakRef"]
			},
			"target": {
				"type": "string",
				"enum": ["_self", "_blank"],
				"default": "_self"
			}
		}
	},
	"MediaItem": {
		"type": "object",
		"properties": {
			"componentType": {
				"type": "string"
			},
			"dateCreated": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"fileName": {
				"type": "string"
			},
			"fileSize": {
				"type": "number"
			},
			"height": {
				"type": "number"
			},
			"width": {
				"type": "number"
			},
			"iconURL": {
				"type": "string"
			},
			"mediaType": {
				"type": "string"
			},
			"mimeType": {
				"type": "string"
			},
			"originalFileName": {
				"type": "string"
			},
			"sourceURL": {
				"type": ["null", "string"]
			},
			"tags": {
				"type": ["null", "string"]
			},
			"title": {
				"type": "string"
			},
			"version": {
				"type": ["null", "string"]
			}
		}
	},
	"MediaRichText": {
		"type": "object",
		"properties": {
			"text": {
				"type": "string"
			},
			"stylesMapId": {
				"type": "string"
			},
			"linkList": {
				"type": ["array", "null"],
				"pseudoType": ["refList"]
			},
			"componentDataList": {
				"type": ["array", "null"],
				"pseudoType": ["refList"]
			}
		}
	},
	"MenuItem": {
		"type": "object",
		"properties": {
			"text": {
				"type": "string"
			},
			"refId": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"items": {
				"type": ["array", "null"]
			}
		}
	},
	"Page": {
		"type": "object",
		"dataClassRef": "core.datatypes.PageDataClass",
		"properties": {
			"title": {
				"type": "string",
				"minLength": 1,
				"maxLength": 100
			},
			"hideTitle": {
				"type": "boolean"
			},
			"icon": {
				"type": "string"
			},
			"windowTitle": {
				"type": "string",
				"minLength": 1,
				"maxLength": 512
			},
			"descriptionSEO": {
				"type": "string",
				"maxLength": 1024
			},
			"metaKeywordsSEO": {
				"type": "string",
				"maxLength": 512
			},
			"pageTitleSEO": {
				"type": "string"
			},
			"pageUriSEO": {
				"type": "string"
			},
			"hidePage": {
				"type": "boolean"
			},
			"underConstruction": {
				"type": "boolean"
			},
			"tpaApplicationId": {
				"type": "number"
			},
			"managingAppDefId": {
				"type": ["string", "null"]
			},
			"tpaPageId": {
				"type": "string"
			},
			"pageSecurity": {
				"type": ["object", "null"],
				"default": {
					"requireLogin": false,
					"passwordDigest": "",
					"dialogLanguage": ""
				}
			},
			"indexable": {
				"type": "boolean",
				"default": true
			},
			"mobileHidePage": {
				"type": ["boolean", "null"],
				"default": null
			},
			"pageBackgrounds": {
				"type": "object",
				"properties": {
					"desktop": {
						"type": "object",
						"properties": {
							"custom": {
								"type": "boolean"
							},
							"ref": {
								"type": ["string", "null"],
								"pseudoType": ["ref"]
							},
							"isPreset": {
								"type": "boolean"
							}
						}
					},
					"mobile": {
						"type": "object",
						"properties": {
							"custom": {
								"type": "boolean"
							},
							"mediaSizing": {
								"type": "string",
								"enum": ["document", "viewport"],
								"default": "viewport"
							},
							"ref": {
								"type": ["string", "null"],
								"pseudoType": ["ref"]
							},
							"isPreset": {
								"type": "boolean"
							}
						}
					}
				}
			},
			"isLandingPage": {
				"type": "boolean",
				"default": false
			},
			"isMobileLandingPage": {
				"type": "boolean",
				"default": false
			},
			"isPopup": {
				"type": "boolean",
				"default": false
			},
			"translationData": {
				"type": "object",
				"properties": {
					"uriSEOTranslated": {
						"type": "boolean",
						"default": false
					}
				}
			}
		}
	},
	"Text": {
		"type": "object",
		"properties": {
			"text": {
				"type": "string",
				"maxLength": 4000
			}
		}
	},
	"RichText": {
		"type": "object",
		"properties": {
			"text": {
				"type": "string",
				"maxLength": 120000
			},
			"defaultStyle": {
				"type": "string"
			}
		}
	},
	"RichTextImage": {
		"type": "object",
		"properties": {
			"text": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"image": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"Service": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"maxLength": 100
			},
			"description": {
				"type": "string",
				"maxLength": 1000
			},
			"image": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"ServiceList": {
		"type": "object",
		"properties": {
			"serviceType": {
				"type": "string"
			},
			"items": {
				"type": ["array", "null"],
				"pseudoType": ["refList"]
			}
		}
	},
	"BaseInput": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string",
				"maxLength": 400
			},
			"formGroup": {
				"type": "string",
				"description": "form group that this component belongs to",
				"maxLength": 4000
			}
		}
	},
	"BaseTextInput": {
		"type": "object",
		"allOf": [{
			"properties": {
				"value": {
					"type": "string",
					"default": "",
					"maxLength": 4000
				}
			}
		}, {
			"$ref": "BaseInput"
		}]
	},
	"TextInput": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textType": {
					"type": "string",
					"default": "text",
					"enum": ["text", "email", "url", "number", "tel", "password"],
					"description": "input data type"
				},
				"maxLength": {
					"type": ["number", "null"],
					"description": "maximum number of characters allowed"
				},
				"min": {
					"type": ["number", "null"],
					"description": "minimum allowed value for a numeric type field"
				},
				"max": {
					"type": ["number", "null"],
					"description": "maximum allowed value for a numeric type field"
				},
				"pattern": {
					"type": ["string", "null"],
					"description": "specifies a regular expression against which the control's value will be validate"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"TextAreaInput": {
		"type": "object",
		"allOf": [{
			"properties": {
				"maxLength": {
					"type": ["number", "null"],
					"description": "maximum number of characters allowed"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"CheckboxInput": {
		"type": "object",
		"allOf": [{
			"properties": {
				"checked": {
					"type": "boolean",
					"description": "The checked status of the input"
				},
				"label": {
					"type": "string",
					"default": "",
					"maxLength": 4000
				},
				"indeterminate": {
					"type": "boolean",
					"description": "Used for three state check box"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"DateItem": {
		"type": "string",
		"format": "date-time"
	},
	"DatePicker": {
		"type": "object",
		"allOf": [{
			"properties": {
				"disabledDates": {
					"type": "array",
					"items": {
						"$ref": "DateItem"
					},
					"default": [],
					"description": "array of disabled dates"
				},
				"disabledDaysOfWeek": {
					"type": "array",
					"items": {
						"type": ["number"],
						"enum": [0, 1, 2, 3, 4, 5, 6]
					},
					"default": [],
					"description": "array of disabled days"
				},
				"minDate": {
					"oneOf": [{
						"type": "null"
					}, {
						"$ref": "DateItem"
					}],
					"default": null,
					"description": "date input minimum date value"
				},
				"maxDate": {
					"oneOf": [{
						"type": "null"
					}, {
						"$ref": "DateItem"
					}],
					"default": null,
					"description": "date input maximum date value"
				},
				"allowPastDates": {
					"type": "boolean",
					"default": true,
					"description": "if true all past days are enabled, false otherwise"
				},
				"allowFutureDates": {
					"type": "boolean",
					"default": true,
					"description": "if true all future days are enabled, false otherwise"
				}
			}
		}, {
			"$ref": "BaseInput"
		}]
	},
	"Theme": {
		"type": "object",
		"properties": {
			"properties": ["object", "null"],
			"default": {}
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
	"TwitterFollow": {
		"type": "object",
		"properties": {
			"accountToFollow": {
				"type": "string",
				"default": "wix"
			}
		}
	},
	"TwitterTweet": {
		"type": "object",
		"properties": {
			"defaultText": {
				"type": "string"
			},
			"accountToFollow": {
				"type": "string"
			},
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
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
	"MobileMetaData": {
		"type": "object",
		"properties": {
			"adaptiveMobileOn": {
				"type": "boolean",
				"default": true
			}
		},
		"required": ["adaptiveMobileOn"]
	},
	"Preloader": {
		"type": "object",
		"properties": {
			"enabled": {
				"type": "boolean",
				"default": false
			},
			"uri": {
				"type": "string",
				"default": ""
			}
		},
		"required": ["enabled", "uri"]
	},
	"ContactInfo": {
		"type": "object",
		"properties": {
			"companyName": {
				"type": "string",
				"default": ""
			},
			"phone": {
				"type": "string",
				"default": ""
			},
			"email": {
				"type": "string",
				"default": ""
			},
			"address": {
				"type": "string",
				"default": ""
			},
			"fax": {
				"type": "string",
				"default": ""
			}
		},
		"required": ["companyName", "phone", "email", "address", "fax"]
	},
	"SocialLink": {
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"enum": ["facebook", "twitter", "pinterest", "google_plus", "tumblr", "blogger", "linkedin", "youtube", "vimeo", "flickr"]
			},
			"url": {
				"type": "string",
				"default": ""
			}
		},
		"required": ["id", "url"]
	},
	"QuickActions": {
		"type": "object",
		"properties": {
			"colorScheme": {
				"type": "string",
				"enum": ["dark", "light"],
				"default": "dark"
			},
			"configuration": {
				"type": "object",
				"properties": {
					"addressEnabled": {
						"type": "boolean",
						"default": false
					},
					"emailEnabled": {
						"type": "boolean",
						"default": false
					},
					"navigationMenuEnabled": {
						"type": "boolean",
						"default": true
					},
					"phoneEnabled": {
						"type": "boolean",
						"default": false
					},
					"quickActionsMenuEnabled": {
						"type": "boolean",
						"default": false
					},
					"socialLinksEnabled": {
						"type": "boolean",
						"default": false
					}
				},
				"default": {
					"addressEnabled": false,
					"emailEnabled": false,
					"navigationMenuEnabled": true,
					"phoneEnabled": false,
					"quickActionsMenuEnabled": false,
					"socialLinksEnabled": false
				}
			},
			"socialLinks": {
				"type": "array",
				"items": {
					"$ref": "SocialLink"
				},
				"default": []
			}
		},
		"required": ["colorScheme", "configuration", "socialLinks"]
	},
	"QuickActionBarItem": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["null", "string"],
				"pseudoType": ["ref"],
				"default": null
			},
			"itemType": {
				"type": "string"
			},
			"text": {
				"type": "string",
				"default": ""
			},
			"icon": {
				"type": "string",
				"default": ""
			}
		},
		"required": ["itemType"]
	},
	"SiteSettings": {
		"type": "object",
		"properties": {
			"siteName": {
				"type": "string",
				"default": ""
			},
			"siteTitleSEO": {
				"type": "string",
				"default": ""
			},
			"siteDescriptionSEO": {
				"type": "string",
				"default": ""
			},
			"keywordsSEO": {
				"type": "string",
				"default": ""
			},
			"allowSEFindSite": {
				"type": "boolean",
				"default": ""
			},
			"favicon": {
				"type": "string",
				"default": ""
			},
			"thumbnail": {
				"type": "string",
				"default": ""
			},
			"googleAnalyticsID": {
				"type": "string",
				"default": ""
			},
			"fbAdminsUserId": {
				"type": "string",
				"default": ""
			},
			"suppressTrackingCookies": {
				"type": "boolean",
				"default": ""
			}
		}
	},
	"AdvancedSeoSettingsDialog": {
		"type": "object",
		"properties": {
			"userMetaTags": {
				"type": "string",
				"default": ""
			}
		}
	},
	"Anchor": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string"
			},
			"compId": {
				"type": "string"
			}
		}
	},
	"BasicMenuItem": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"items": {
				"type": ["array", "null"],
				"pseudoType": ["refList"],
				"default": []
			},
			"label": {
				"type": "string"
			},
			"isVisible": {
				"type": "boolean",
				"default": true
			},
			"isVisibleMobile": {
				"type": "boolean",
				"default": true
			},
			"displayCount": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "number",
					"default": "0"
				}]
			},
			"iconRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"default": null
			}
		}
	},
	"CustomMenu": {
		"type": "object",
		"properties": {
			"name": {
				"type": "string"
			},
			"appId": {
				"type": "number"
			},
			"items": {
				"type": ["null", "array"],
				"pseudoType": ["refList"],
				"default": []
			}
		}
	},
	"Menu": {
		"type": "object",
		"properties": {
			"items": {
				"type": ["null", "array"],
				"pseudoType": ["refList"],
				"default": []
			}
		}
	},
	"CustomMenusCollection": {
		"type": "object",
		"properties": {
			"menus": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
			}
		}
	},
	"CustomMenuDataRef": {
		"type": "object",
		"properties": {
			"menuRef": {
				"type": ["string", "null"],
				"pseudoType": ["weakRef"],
				"default": "#CUSTOM_MAIN_MENU"
			}
		}
	},
	"MenuDataRef": {
		"type": "object",
		"properties": {
			"menuRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"default": "#MAIN_MENU"
			}
		}
	},
	"FacebookLikeBox": {
		"type": "object",
		"properties": {
			"facebookPageId": {
				"type": "string",
				"default": "wix",
				"description": "Facebook page id"
			},
			"showFaces": {
				"type": "boolean",
				"default": true,
				"description": "Show profile photos in the plugin"
			},
			"colorScheme": {
				"type": "string",
				"default": "light",
				"enum": ["light", "dark"],
				"description": "The color scheme of the plugin. Note that the background is always transparent to match your background color. This setting changes the foreground colors to work well on light or dark backgrounds."
			},
			"showStream": {
				"type": "boolean",
				"default": true,
				"description": "Show the profile stream for the public profile"
			},
			"showBorder": {
				"type": "boolean",
				"default": true,
				"description": "Show a border around the plugin"
			},
			"showHeader": {
				"type": "boolean",
				"default": true,
				"description": "Show the 'Find us on Facebook' bar at top. Only shown when either stream or faces are present"
			}
		}
	},
	"ImageButton": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"alt": {
				"type": "string"
			},
			"defaultImage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"hoverImage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"activeImage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"NumericStepper": {
		"type": "object",
		"properties": {
			"value": {
				"type": "string",
				"default": "1"
			}
		}
	},
	"PinItPinWidget": {
		"type": "object",
		"properties": {
			"pinId": {
				"type": "string",
				"default": "http://www.pinterest.com/pin/204421270560540859/"
			}
		}
	},
	"PinterestPinIt": {
		"type": "object",
		"properties": {
			"uri": {
				"type": "string",
				"default": ""
			},
			"description": {
				"type": "string",
				"default": "Check it out!"
			},
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
	"SingleAudioPlayer": {
		"type": "object",
		"properties": {
			"uri": {
				"type": "string",
				"default": "",
				"description": "MP3 uri"
			},
			"originalFileName": {
				"type": "string",
				"default": "",
				"description": "Original MP3 file name"
			},
			"artist": {
				"type": "string",
				"default": "Unknown Artist",
				"description": "Artist Name"
			},
			"track": {
				"type": "string",
				"default": "Unknown Track",
				"description": "Track Name"
			}
		}
	},
	"SkypeCallButton": {
		"type": "object",
		"properties": {
			"skypeName": {
				"type": "string"
			},
			"buttonType": {
				"type": "string",
				"enum": ["call", "chat"],
				"default": "call"
			}
		}
	},
	"SpotifyFollow": {
		"type": "object",
		"properties": {
			"uri": {
				"type": "string",
				"default": ""
			}
		}
	},
	"SpotifyPlayer": {
		"type": "object",
		"properties": {
			"uri": {
				"type": "string",
				"default": "",
				"description": "Spotify URI"
			}
		}
	},
	"SubscribeForm": {
		"type": "object",
		"properties": {
			"toEmailAddress": {
				"type": "string",
				"default": ""
			},
			"bccEmailAddress": {
				"type": "string",
				"default": ""
			},
			"firstNameFieldLabel": {
				"type": "string",
				"default": "First Name"
			},
			"lastNameFieldLabel": {
				"type": "string",
				"default": "Last Name"
			},
			"emailFieldLabel": {
				"type": "string",
				"default": "Email"
			},
			"phoneFieldLabel": {
				"type": "string",
				"default": "Mobile number"
			},
			"subscribeFormTitle": {
				"type": "string",
				"default": "Subscribe for Updates"
			},
			"textDirection": {
				"type": "string",
				"default": "left",
				"enum": ["left", "right"]
			},
			"submitButtonLabel": {
				"type": "string",
				"default": "Subscribe Now"
			},
			"successMessage": {
				"type": "string",
				"default": "Congrats! You’re subscribed"
			},
			"errorMessage": {
				"type": "string",
				"default": "Forgot your email? Try again."
			},
			"validationErrorMessage": {
				"type": "string",
				"default": "To subscribe please fill in all the required info"
			},
			"onSubmitBehavior": {
				"type": "string",
				"default": "message",
				"enum": ["message", "link"]
			},
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"YouTubeSubscribeButton": {
		"type": "object",
		"properties": {
			"youtubeChannelId": {
				"type": "string",
				"default": "wix",
				"description": "youtube channel id"
			}
		}
	},
	"AudioPlayer": {
		"type": "object",
		"properties": {
			"uri": {
				"type": "string",
				"default": ""
			},
			"autoPlay": {
				"type": "boolean",
				"default": false
			},
			"loop": {
				"type": "boolean",
				"default": false
			},
			"visible": {
				"type": "boolean",
				"default": true
			},
			"volume": {
				"type": "number",
				"default": 100
			},
			"title": {
				"type": "string",
				"default": ""
			},
			"description": {
				"type": "string",
				"default": ""
			},
			"icon_uri": {
				"type": "string",
				"default": ""
			},
			"originalFileName": {
				"type": "string",
				"default": ""
			}
		}
	},
	"Boolean": {
		"type": "object",
		"properties": {
			"value": {
				"type": "boolean"
			}
		}
	},
	"CheckBox": {
		"type": "object",
		"properties": {
			"value": {
				"type": "boolean"
			},
			"indeterminate": {
				"type": "boolean",
				"default": false,
				"description": "Used for three state check box"
			}
		}
	},
	"Grid": {
		"type": "object",
		"properties": {
			"dataSource": {
				"type": "object",
				"properties": {
					"type": {
						"type": "string",
						"enum": ["static", "dynamic"]
					},
					"revision": "integer"
				}
			},
			"rows": {
				"type": "array",
				"items": {
					"type": "object"
				}
			},
			"rowsCount": {
				"type": "number"
			},
			"revision": {
				"type": "number"
			}
		}
	},
	"ContactForm": {
		"type": "object",
		"properties": {
			"toEmailAddress": {
				"type": "string",
				"default": ""
			},
			"bccEmailAddress": {
				"type": "string",
				"default": ""
			},
			"nameFieldLabel": {
				"type": "string",
				"default": "Name"
			},
			"emailFieldLabel": {
				"type": "string",
				"default": "Email"
			},
			"phoneFieldLabel": {
				"type": "string",
				"default": "Phone"
			},
			"addressFieldLabel": {
				"type": "string",
				"default": "Address"
			},
			"subjectFieldLabel": {
				"type": "string",
				"default": "Subject"
			},
			"messageFieldLabel": {
				"type": "string",
				"default": "Message"
			},
			"submitButtonLabel": {
				"type": "string",
				"default": "Send"
			},
			"successMessage": {
				"type": "string",
				"default": "Your details were sent successfully!"
			},
			"errorMessage": {
				"type": "string",
				"default": "Please provide a valid email"
			},
			"textDirection": {
				"type": "string",
				"default": "left",
				"enum": ["left", "right"]
			},
			"validationErrorMessage": {
				"type": "string",
				"default": "Please fill in all required fields."
			},
			"onSubmitBehavior": {
				"type": "string",
				"default": "message",
				"enum": ["message", "link"]
			},
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"DynamicContactForm": {
		"type": "object",
		"properties": {
			"toEmailAddress": {
				"type": "string",
				"default": ""
			},
			"bccEmailAddress": {
				"type": "string",
				"default": ""
			},
			"submitButtonLabel": {
				"type": "string",
				"default": "Send"
			},
			"successMessage": {
				"type": "string",
				"default": "Your details were sent successfully!"
			},
			"errorMessage": {
				"type": "string",
				"default": "Please provide a valid email"
			},
			"textDirection": {
				"type": "string",
				"default": "left",
				"enum": ["left", "right"]
			},
			"validationErrorMessage": {
				"type": "string",
				"default": "Please fill in all required fields."
			},
			"onSubmitBehavior": {
				"type": "string",
				"default": "message",
				"enum": ["message", "link"]
			},
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"formName": {
				"type": "string",
				"default": ""
			},
			"dynamicFields": {
				"type": "array",
				"default": [{
					"name": "email",
					"inputType": "email",
					"displayLabel": "Email",
					"required": true,
					"isDisplayed": true
				}, {
					"name": "name",
					"inputType": "text",
					"displayLabel": "Name",
					"required": true
				}, {
					"name": "subject",
					"inputType": "text",
					"displayLabel": "Subject",
					"required": false
				}, {
					"name": "message",
					"inputType": "text",
					"displayLabel": "Message",
					"required": false
				}],
				"items": {
					"type": "object",
					"properties": {
						"name": {
							"type": "string"
						},
						"inputType": {
							"type": "string"
						},
						"displayLabel": {
							"type": "string"
						},
						"required": {
							"type": "boolean"
						},
						"displayed": {
							"type": "boolean"
						}
					}
				}
			}
		}
	},
	"EbayItemsBySeller": {
		"type": "object",
		"properties": {
			"sellerId": {
				"type": "string"
			},
			"registrationSite": {
				"type": "string"
			}
		}
	},
	"EditorSettings": {
		"type": "object",
		"properties": {
			"palletsFilterTags": {
				"type": ["null", "array"]
			},
			"fontsFilterTags": {
				"type": ["null", "array"]
			},
			"pagesFilterTags": {
				"type": ["null", "array"]
			}
		}
	},
	"FacebookShareButton": {
		"type": "object",
		"properties": {
			"urlChoice": {
				"type": "string",
				"enum": ["Current page", "Site"],
				"default": "Current page",
				"description": "Share: current/site url"
			},
			"label": {
				"type": "string",
				"default": "Share",
				"description": ""
			},
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
	"FlashComponent": {
		"type": "object",
		"properties": {
			"linkType": {
				"type": "string",
				"default": "FREE_LINK"
			},
			"href": {
				"type": "string"
			},
			"text": {
				"type": "string"
			},
			"target": {
				"type": "string"
			},
			"icon": {
				"type": "string"
			},
			"title": {
				"type": "string",
				"maxLength": 100
			},
			"uri": {
				"type": "string"
			},
			"description": {
				"type": "string",
				"maxLength": 1000
			},
			"height": {
				"type": "number",
				"default": 0
			},
			"width": {
				"type": "number",
				"default": 0
			},
			"placeHolderImage": {
				"type": ["null", "string"],
				"pseudoType": ["ref"]
			}
		}
	},
	"FlickrBadgeWidget": {
		"type": "object",
		"properties": {
			"userId": {
				"type": "string",
				"default": "74009459@N07"
			},
			"userName": {
				"type": "string"
			},
			"tag": {
				"type": "string"
			},
			"imageCount": {
				"type": ["string", "number"],
				"default": 3
			},
			"whichImages": {
				"type": "string",
				"default": "latest"
			},
			"imageSize": {
				"type": "string",
				"default": "t"
			},
			"layoutOrientation": {
				"type": "string",
				"default": "v"
			}
		}
	},
	"GeoMap": {
		"type": "object",
		"properties": {
			"address": {
				"type": "string",
				"default": "500 Terry Francois Street, 6th Floor. San Francisco, CA 94158"
			},
			"latitude": {
				"type": "number",
				"default": 37.77065
			},
			"longitude": {
				"type": "number",
				"default": -122.387301
			},
			"addressInfo": {
				"type": "string",
				"default": "Wix Office"
			},
			"mapStyle": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"elementType": {
							"type": "string",
							"enum": ["all", "geometry", "geometry.fill", "geometry.stroke", "labels", "labels.icon", "labels.text", "labels.text.fill", "labels.text.stroke"],
							"description": "Selects the element type to which a styler should be applied. An element type distinguishes between the different representations of a feature."
						},
						"featureType": {
							"type": "string",
							"enum": ["administrative", "administrative.country", "administrative.land_parcel", "administrative.locality", "administrative.neighborhood", "administrative.province", "all", "landscape", "landscape.man_made", "landscape.natural", "landscape.natural.landcover", "landscape.natural.terrain", "poi", "poi.attraction", "poi.business", "poi.government", "poi.medical", "poi.park", "poi.place_of_worship", "poi.school", "poi.sports_complex", "road", "road.arterial", "road.highway", "road.highway.controlled_access", "road.local", "transit", "transit.line", "transit.station", "transit.station.airport", "transit.station.bus", "transit.station.rail", "water"],
							"description": "Selects the feature, or group of features, to which a styler should be applied."
						},
						"stylers": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"color": {
										"type": "string",
										"maxLength": 100,
										"description": "Sets the color of the feature. Valid values: An RGB hex string, i.e. '#ff0000'."
									},
									"gamma": {
										"type": "number",
										"description": "Modifies the gamma by raising the lightness to the given power.Valid values: Floating point numbers, [0.01, 10], with 1.0 representing no change."
									},
									"hue": {
										"type": "string",
										"maxLength": 100,
										"description": "Sets the hue of the feature to match the hue of the color supplied. Note that the saturation and lightness of the feature is conserved, which means that the feature will not match the color supplied exactly. Valid values: An RGB hex string, i.e. '#ff0000'."
									},
									"invert_lightness": {
										"type": "boolean",
										"description": "A value of true will invert the lightness of the feature while preserving the hue and saturation."
									},
									"lightness": {
										"type": "number",
										"description": "Shifts lightness of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100]."
									},
									"saturation": {
										"type": "number",
										"description": "Shifts the saturation of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100]."
									},
									"visibility": {
										"type": "string",
										"enum": ["on", "off", "simplified"],
										"description": "Sets the visibility of the feature. Valid values: 'on', 'off' or 'simplified'."
									},
									"weight": {
										"type": "number",
										"description": "Sets the weight of the feature, in pixels. Valid values: Integers greater than or equal to zero."
									}
								},
								"maxProperties": 1,
								"additionalProperties": false,
								"description": "The style rules to apply to the selectors. The rules are applied to the map's elements in the order they are listed in this array."
							}
						}
					},
					"required": ["stylers"]
				}
			}
		}
	},
	"HtmlComponent": {
		"type": "object",
		"properties": {
			"sourceType": {
				"type": "string",
				"default": ""
			},
			"url": {
				"type": "string",
				"default": ""
			},
			"freezeFrame": {
				"type": "boolean",
				"default": false
			}
		}
	},
	"DisqusComments": {
		"type": "object",
		"properties": {
			"disqusId": {
				"type": "string",
				"default": ""
			}
		}
	},
	"ItunesButton": {
		"type": "object",
		"properties": {
			"downloadUrl": {
				"type": "string",
				"default": "",
				"description": "Insert band URL"
			}
		}
	},
	"LinkableFlashComponent": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"title": {
				"type": "string"
			},
			"uri": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"height": {
				"type": "number"
			},
			"width": {
				"type": "number"
			},
			"placeHolderImage": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"LinkableButton": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["null", "string"],
				"pseudoType": ["ref"],
				"default": null
			},
			"label": {
				"type": "string",
				"default": "MY BUTTON"
			}
		}
	},
	"LoginButton": {
		"type": "object",
		"properties": {
			"language": {
				"type": "string",
				"default": ""
			}
		}
	},
	"TinyMenu": {
		"type": "object",
		"properties": {
			"loginSocialBarRef": {
				"type": ["null", "string"],
				"pseudoType": ["weakRef"],
				"default": null
			}
		}
	},
	"LoginSocialBar": {
		"type": "object",
		"properties": {
			"menuItemsRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"default": null
			},
			"iconItemsRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"default": null
			},
			"language": {
				"type": "string",
				"default": "en"
			},
			"loggedInMember": {
				"type": "string",
				"enum": ["avatarOnly", "textOnly", "avatarAndText"],
				"default": "avatarAndText"
			},
			"loggedOutText": {
				"type": "string",
				"default": "Log In"
			},
			"showLoggedInText": {
				"type": "boolean",
				"default": true
			},
			"loggedInText": {
				"type": "string",
				"default": "Hello"
			},
			"logOutText": {
				"type": "string",
				"default": "Log Out"
			}
		}
	},
	"MenuData": {
		"type": "object",
		"properties": {
			"menuButton": {
				"type": ["null", "string"],
				"pseudoType": ["ref"]
			},
			"pages": {
				"type": ["null", "string"],
				"pseudoType": ["ref"]
			}
		}
	},
	"PagesGroupData": {
		"type": "object",
		"properties": {
			"appId": {
				"type": ["number", "null"]
			},
			"groupName": {
				"type": "string"
			},
			"pages": {
				"type": "array",
				"items": {
					"type": "string",
					"pseudoType": ["weakRef"]
				},
				"default": []
			}
		}
	},
	"PagesGroupCollection": {
		"type": "object",
		"properties": {
			"groups": {
				"type": ["null", "array"],
				"pseudoType": ["refList"],
				"default": []
			}
		}
	},
	"PayPalButton": {
		"type": "object",
		"properties": {
			"merchantID": {
				"type": "string",
				"default": "",
				"description": "some amazing description"
			}
		}
	},
	"PermaLink": {
		"type": "object",
		"properties": {
			"appType": {
				"type": "string",
				"enum": ["ListsApps", "ThirdPartyApps"],
				"default": ""
			},
			"dataItemRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"],
				"default": ""
			},
			"mutableSeoTitle": {
				"type": "string"
			},
			"correctPermaLinkRef": {
				"type": ["null", "string"],
				"pseudoType": ["ref"]
			}
		}
	},
	"PinterestFollow": {
		"type": "object",
		"properties": {
			"urlChoice": {
				"type": "string",
				"default": "pinterest/",
				"description": ""
			},
			"label": {
				"type": "string",
				"default": "Pinterest",
				"description": ""
			}
		}
	},
	"SelectableList": {
		"type": "object",
		"allOf": [{
			"properties": {
				"options": {
					"type": ["null", "array"],
					"pseudoType": ["refList"],
					"description": "a list of SelectOption data items",
					"default": []
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"SelectOption": {
		"type": "object",
		"properties": {
			"value": {
				"type": "string",
				"default": "",
				"maxLength": 400
			},
			"text": {
				"type": "string",
				"default": "",
				"maxLength": 400
			},
			"disabled": {
				"type": "boolean"
			},
			"description": {
				"type": "string"
			}
		}
	},
	"RadioButton": {
		"type": "object",
		"allOf": [{
			"properties": {
				"label": {
					"type": "string",
					"default": "",
					"maxLength": 4000
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"RadioGroup": {
		"type": "object",
		"allOf": [{
			"properties": {
				"defaultValue": {
					"type": ["null", "string"]
				},
				"label": {
					"type": ["null", "string"],
					"default": ""
				}
			}
		}, {
			"$ref": "SelectableList"
		}]
	},
	"CheckboxGroup": {
		"type": "object",
		"allOf": [{
			"properties": {
				"options": {
					"type": ["null", "array"],
					"pseudoType": ["refList"],
					"description": "a list of CheckboxInput data items",
					"default": []
				},
				"label": {
					"type": ["null", "string"],
					"default": "",
					"maxLength": 4000
				}
			}
		}, {
			"$ref": "BaseInput"
		}]
	},
	"FileUploader": {
		"type": "object",
		"properties": {
			"buttonLabel": {
				"type": "string",
				"default": "Upload File"
			},
			"placeholderLabel": {
				"type": "string",
				"default": "Max File Size 15MG"
			}
		}
	},
	"UploadName": {
		"type": "object",
		"properties": {}
	},
	"SiteButton": {
		"type": "object",
		"properties": {
			"linkType": {
				"type": "string",
				"default": "FREE_LINK"
			},
			"href": {
				"type": "string"
			},
			"text": {
				"type": "string"
			},
			"target": {
				"type": "string"
			},
			"icon": {
				"type": "string"
			},
			"label": {
				"type": "string",
				"default": "MY BUTTON"
			}
		}
	},
	"SoundCloudWidget": {
		"type": "object",
		"properties": {
			"url": {
				"type": "string",
				"default": ""
			},
			"showArtWork": {
				"type": "boolean",
				"default": true
			},
			"autoPlay": {
				"type": "boolean",
				"default": false
			},
			"embedSource": {
				"type": "string",
				"default": ""
			}
		}
	},
	"StyledText": {
		"type": "object",
		"properties": {
			"text": {
				"type": "string",
				"maxLength": 120000,
				"default": "<p class='font_7'></p>"
			},
			"stylesMapId": {
				"type": "string"
			},
			"linkList": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
			}
		}
	},
	"StyledTextLinkHelper": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["null", "string"],
				"pseudoType": ["ref"]
			}
		}
	},
	"SvgShape": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["null", "string"],
				"pseudoType": ["ref"],
				"default": null
			},
			"alt": {
				"type": "string"
			}
		}
	},
	"VectorImage": {
		"type": "object",
		"properties": {
			"link": {
				"type": ["null", "string"],
				"pseudoType": ["ref"],
				"default": null
			},
			"alt": {
				"type": "string"
			},
			"title": {
				"type": "string",
				"maxLength": 100
			},
			"svgId": {
				"type": "string"
			}
		}
	},
	"Table": {
		"type": "object",
		"properties": {
			"items": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
			},
			"header": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
			},
			"footer": {
				"type": ["null", "array"],
				"pseudoType": ["refList"]
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
	"VKShareButton": {
		"type": "object",
		"properties": {
			"style": {
				"type": "string",
				"enum": ["Button", "ButtonWithoutCounter", "Link", "LinkWithoutIcon", "Icon"],
				"default": "Button",
				"description": "the layout of the button"
			},
			"text": {
				"type": "string",
				"default": "Share",
				"description": "the text of the Button"
			},
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
	"ButtonWithIcon": {
		"type": "object",
		"properties": {
			"label": {
				"type": "string",
				"format": "resourceKey"
			},
			"toggleMode": {
				"type": "boolean"
			},
			"disabled": {
				"type": "boolean"
			},
			"iconSrc": {
				"type": "string"
			},
			"iconSize": {
				"type": "object"
			},
			"spriteOffset": {
				"type": "object"
			},
			"command": {
				"type": "string"
			},
			"commandParameter": {
				"type": "string"
			},
			"action": {
				"type": "string"
			}
		}
	},
	"EditorPreferences": {
		"type": "object",
		"properties": {
			"dontShowAgainTooltips": {
				"type": ["null", "array"]
			},
			"dontShowAgainDialogs": {
				"type": ["null", "array"]
			}
		}
	},
	"TPAWidget": {
		"type": "object",
		"properties": {
			"applicationId": {
				"type": "string",
				"default": "",
				"description": "application ID"
			},
			"widgetId": {
				"type": "string",
				"default": "",
				"description": "some amazing description"
			},
			"referenceId": {
				"type": "string",
				"default": ""
			},
			"tpaData": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"TPAData": {
		"type": "object",
		"properties": {
			"content": {
				"type": "string",
				"default": "",
				"description": "storage for app data"
			}
		}
	},
	"TPAGlobalData": {
		"type": "object",
		"properties": {
			"content": {
				"type": "string",
				"default": "",
				"description": "storage for app data"
			}
		}
	},
	"TPA": {
		"type": "object",
		"properties": {
			"applicationId": {
				"type": "string",
				"default": "",
				"description": "application ID"
			},
			"referenceId": {
				"type": "string",
				"default": ""
			},
			"tpaData": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"TPASection": {
		"type": "object",
		"properties": {
			"applicationId": {
				"type": "string",
				"default": "",
				"description": "application ID"
			},
			"referenceId": {
				"type": "string",
				"default": ""
			},
			"tpaData": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"TPAMultiSection": {
		"type": "object",
		"properties": {
			"applicationId": {
				"type": "string",
				"default": "",
				"description": "application ID"
			},
			"widgetId": {
				"type": "string",
				"default": "",
				"description": "hidden tpaSection part of multi section app"
			},
			"referenceId": {
				"type": "string",
				"default": ""
			},
			"tpaData": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"RssButton": {
		"type": "object",
		"properties": {
			"image": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"link": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"type": {
				"type": "string"
			}
		}
	},
	"AppPart": {
		"type": "object",
		"properties": {
			"appInnerID": {
				"type": ["string", "number"]
			},
			"appLogicParams": {
				"type": "object",
				"default": {}
			},
			"appLogicCustomizations": {
				"type": "array",
				"items": {
					"$ref": "AppPartCustomization"
				},
				"default": []
			},
			"appPartName": {
				"type": "string"
			},
			"viewName": {
				"type": "string"
			}
		}
	},
	"AppPartCustomization": {
		"type": "object",
		"properties": {
			"fieldId": {
				"type": "string"
			},
			"forType": {
				"type": "string"
			},
			"format": {
				"type": "string"
			},
			"key": {
				"type": "string"
			},
			"type": {
				"type": "string"
			},
			"view": {
				"type": "string"
			}
		}
	},
	"AppPage": {
		"type": "object",
		"allOf": [{
			"properties": {
				"appPageId": {
					"type": "string",
					"default": ""
				},
				"appInnerID": {
					"type": ["string", "number"],
					"default": ""
				},
				"appPageType": {
					"type": "string"
				},
				"repeaterPage": {
					"type": "boolean",
					"default": false
				}
			}
		}, {
			"$ref": "Page"
		}]
	},
	"AppBuilderComponent": {
		"type": "object",
		"properties": {
			"appInnerID": {
				"type": ["string", "number"]
			},
			"appPartName": {
				"type": "string"
			}
		}
	},
	"BoxSlideShowSlide": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string"
			}
		}
	},
	"StripContainerSlideShowSlide": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string"
			},
			"background": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"VerticalAnchorsMenu": {
		"type": "object",
		"properties": {
			"pageTopLabel": {
				"type": ["null", "string"],
				"default": "Page Top"
			},
			"pageBottomLabel": {
				"type": ["null", "string"],
				"default": "Page Bottom"
			},
			"hiddenAnchorIds": {
				"type": ["null", "object"],
				"default": {}
			}
		}
	},
	"WFacebookComment": {
		"type": "object",
		"properties": {
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
	"WFacebookLike": {
		"type": "object",
		"properties": {
			"isHttpsEnabled": {
				"type": "boolean",
				"default": false
			},
			"urlFormat": {
				"type": "string",
				"default": "slash"
			}
		}
	},
	"AppController": {
		"type": "object",
		"properties": {
			"applicationId": {
				"type": "string",
				"maxLength": 100
			},
			"name": {
				"type": "string",
				"maxLength": 100,
				"default": ""
			},
			"controllerType": {
				"type": "string",
				"maxLength": 100
			},
			"settings": {
				"type": "string",
				"maxLength": 2000,
				"pseudoType": ["stringifyObject"]
			}
		},
		"required": ["applicationId", "controllerType"]
	},
	"Repeater": {
		"type": "object",
		"properties": {
			"items": {
				"type": "array",
				"default": [],
				"items": {
					"type": "string"
				},
				"description": "Unique identifiers for items of the repeater"
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
	"ImageButtonWithText": {
		"type": "object",
		"properties": {
			"label": {
				"type": "string",
				"maxLength": 100
			},
			"icon": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"predefinedClass": {
				"type": "string",
				"maxLength": 20
			}
		}
	},
	"Icon": {
		"type": "object",
		"properties": {
			"url": {
				"type": "string"
			},
			"width": {
				"type": "number"
			},
			"height": {
				"type": "number"
			},
			"title": {
				"type": "string"
			}
		}
	},
	"RichTextBox": {
		"type": "object",
		"allOf": [{
			"properties": {
				"maxLength": {
					"type": ["number", "null"],
					"description": "maximum number of characters allowed"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"VideoPlayer": {
		"type": "object",
		"properties": {
			"videoRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			},
			"videoTitle": {
				"type": "string",
				"default": "",
				"maxLength": 255
			},
			"description": {
				"type": "string",
				"default": "",
				"maxLength": 1000,
				"description": "Video Description"
			},
			"logoRef": {
				"type": ["string", "null"],
				"pseudoType": ["ref"]
			}
		}
	},
	"ToggleSwitch": {
		"type": "object",
		"allOf": [{
			"properties": {
				"checked": {
					"type": "boolean",
					"description": "The checked status of the input"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"Pagination": {
		"type": "object",
		"properties": {
			"totalPages": {
				"type": "number",
				"description": "The total number of pages displayed by the component"
			},
			"currentPage": {
				"type": "number",
				"default": 1,
				"description": "The the page number marked as current"
			},
			"nextText": {
				"type": "string",
				"default": "Next",
				"maxLength": 400,
				"description": "Text to appear in NEXT button"
			},
			"previousText": {
				"type": "string",
				"default": "Previous",
				"maxLength": 400,
				"description": "Text to appear in PREVIOUS button"
			},
			"firstText": {
				"type": "string",
				"default": "First",
				"maxLength": 400,
				"description": "Text to appear in FIRST button"
			},
			"lastText": {
				"type": "string",
				"default": "Last",
				"maxLength": 400,
				"description": "Text to appear in LAST button"
			}
		}
	},
	"Tags": {
		"type": "object",
		"properties": {
			"tags": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"label": {
							"type": "string",
							"maxLength": 400
						},
						"link": {
							"type": ["string", "null"],
							"pseudoType": ["ref"]
						}
					}
				}
			}
		}
	},
	"RatingsDisplay": {
		"type": "object",
		"properties": {
			"rating": {
				"type": "number",
				"description": "The rating displayed by the component",
				"minimum": 1,
				"maximum": 5
			},
			"svgId": {
				"type": "string",
				"maxLength": 100
			},
			"numRatings": {
				"type": "number",
				"description": "The amount of ratings the rating is based on",
				"minimum": 0
			},
			"reviewsCountLabel": {
				"type": "string",
				"default": "Reviews",
				"maxLength": 400,
				"description": "Text that describes the numRatings value"
			},
			"noReviewsPlaceholder": {
				"type": "string",
				"default": "Be the first to rate this item",
				"maxLength": 1000,
				"description": "Placeholder text when there aren't any reviews"
			}
		}
	},
	"Slider": {
		"type": "object",
		"properties": {
			"min": {
				"type": "number",
				"default": 0,
				"description": "Minimum value"
			},
			"max": {
				"type": "number",
				"default": 100,
				"description": "Maximum value"
			},
			"value": {
				"type": "number",
				"default": 50,
				"description": "Current value"
			},
			"step": {
				"type": "number",
				"default": 0,
				"description": "Step value"
			},
			"stepType": {
				"type": "string",
				"default": "value",
				"enum": ["value", "count"],
				"description": "When set to 'value', step represents the value of each step. When set to 'count', step represents the total steps count"
			},
			"disabled": {
				"type": "boolean",
				"default": false,
				"description": "Determines whether the slider is disabled or not"
			},
			"readOnly": {
				"type": "boolean",
				"default": false,
				"description": "Determines whether the slider is read-only or not"
			}
		}
	},
	"TimePickerData": {
		"type": "object",
		"allOf": [{
			"properties": {
				"placeholder": {
					"type": "string",
					"description": "The value of the placeholder if chosen",
					"maxLength": 1000
				},
				"step": {
					"type": "number",
					"minimum": 1,
					"maximum": 60,
					"default": 1,
					"description": "Increment step in minutes"
				}
			}
		}, {
			"$ref": "BaseTextInput"
		}]
	},
	"AddressInput": {
		"type": "object",
		"properties": {
			"locale": {
				"type": "string",
				"maxLength": 100
			},
			"googleMapsApiKey": {
				"type": "string",
				"maxLength": 400
			},
			"filter": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "object",
					"properties": {
						"country": {
							"type": "string",
							"maxLength": 10
						}
					}
				}],
				"default": null
			},
			"sorting": {
				"oneOf": [{
					"type": "null"
				}, {
					"type": "object",
					"properties": {
						"location": {
							"type": "object",
							"properties": {
								"lat": {
									"type": "number"
								},
								"lng": {
									"type": "number"
								}
							}
						},
						"radius": {
							"type": "number",
							"default": 100
						},
						"formatted": {
							"type": "string",
							"maxLength": 10
						}
					}
				}],
				"default": null
			}
		}
	},
	"RatingsInput": {
		"type": "object",
		"properties": {
			"value": {
				"type": ["number", "null"],
				"description": "The rating value currently selected",
				"minimum": 0,
				"maximum": 5
			},
			"titleText": {
				"type": "string",
				"description": "the title before a value is selected",
				"maxLength": 300
			},
			"labels": {
				"type": "object",
				"description": "contains the labels for the different values. maps 1-5 as keys to strings",
				"default": {
					"1": "Bad",
					"2": "Fine",
					"3": "OK",
					"4": "Good",
					"5": "Great"
				}
			}
		}
	}
}
