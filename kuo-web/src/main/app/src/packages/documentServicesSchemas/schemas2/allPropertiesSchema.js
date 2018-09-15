export default {
	"FontsEnum": {
		"langsKey": "System.font",
		"type": "string",
		"default": "arial",
		"enum": ["lucidaSansConsole", "palatinoLinotype", "americantypwrteritcw01--731025", "anton", "arial", "arialBlack", "avenida-w01", "basic", "caudex", "clarendon-w01-medium-692107", "comicSansMS", "cookie", "coquette-w00-light", "courierNew", "din-next-w01-light", "droid-serif-w01-regular", "eb garamond", "enriqueta", "forum", "georgia", "helvetica-w01-roman", "helvetica-w01-bold", "helvetica-w01-light", "impact", "jockey one", "jura", "kelly slab", "lobster", "lucidaConsole", "marck script", "monoton", "noticia text", "open sans", "open sans condensed", "palatino linotype", "patrick hand", "play", "reklamescriptw00-medium", "sacramento", "sarina", "signika", "soho-w01-thin-condensed", "tahoma", "timesNewRoman", "verdana", "bodoni-w01-poster", "ｍｓ ゴシック", "ｍｓ 明朝", "ｍｓ ｐゴシック", "ｍｓ ｐ明朝", "meiryo", "メイリオ", "bm-hanna", "돋움", "fbbluegothicl", "fbchamblue", "fbgreen", "fbneogothic", "fbplum", "굴림", "맑은 고딕", "nanumgothic-regular", "ahmedltw20-outlineregul", "amiri", "arabictypesettingw23-re", "arian-lt-w20-regular", "arian-lt-w20-light", "coheadlinew23-arabicbol", "dinnextltw23-ultralight", "droid-naskh", "janna-lt-w20-regular", "kufi-lt-w20-regular", "midan-w20", "helveticaneueltw20-ligh", "tanseekmodernw20-light", "adler-w26-regular", "alef-regular", "almoni-dl-aaa-700", "almoni-dl-aaa-300", "almoni-dl-aaa-400", "asimon-aaa-400", "atlas-aaa-500", "chips-w26-normal", "frank-ruhl-w26-regular", "gulash-w26-regular", "haim-arukeem-w26-medium", "miriam-w26-medium", "mixtape-aaa-400", "museum-aaa-400", "nekudot-w26-bold", "omes-aaa-400", "opensanshebrewcondensed-regular", "shabazi-w26-bold", "amatic sc", "braggadocio-w01", "chelsea market", "corben", "fredericka the great", "geotica-w01-four-open", "helvetica neue", "helvetica neue italic", "helvetica neue medium", "helvetica neue thin", "itc-arecibo-w01-regular", "josefin slab", "lucida sans unicode", "marzo-w00-regular", "mr de haviland", "museo-w01-700", "museo-slab-w01-100", "niconne", "nimbus-sans-tw01con", "overlock", "pacifica-w00-condensed", "raleway", "rosewood-w01-regular", "snellroundhandw01-scrip", "spinnaker", "stencil-w01-bold"]
	},
	"DefaultProperties": {
		"type": "object",
		"properties": {
			"isHidden": {
				"type": "boolean",
				"description": "sets visibility:hidden to the component style node"
			},
			"isCollapsed": {
				"type": "boolean",
				"description": "sets isCollapsed for component"
			}
		}
	},
	"VideoBackgroundProperties": {
		"type": "object",
		"properties": {
			"enableBackgroundVideo": {
				"type": "boolean",
				"description": "sets the component ability to play its background video on mobile"
			}
		}
	},
	"CardsLayoutProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "center", "right", "justify"],
					"default": "left"
				},
				"gap": {
					"type": "object",
					"properties": {
						"vertical": {
							"type": "number",
							"minimum": 0,
							"maximum": 100,
							"default": 0,
							"description": "sets the vertical gap (in px) between items of a repeater"
						},
						"horizontal": {
							"type": "number",
							"minimum": 0,
							"maximum": 100,
							"default": 0,
							"description": "sets the horizontal gap (in px) between items of a repeater"
						}
					},
					"default": {}
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"VerticalLayoutProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"gap": {
					"type": "number",
					"default": 10,
					"description": "sets the gap (in px) between items of a vertical repeater"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"DisableableProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"isDisabled": {
					"type": "boolean",
					"description": "disables the component"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"StripColumnsContainerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"columnsMargin": {
					"type": "number",
					"default": 15
				},
				"frameMargin": {
					"type": "number",
					"default": 15
				},
				"fullWidth": {
					"type": "boolean",
					"default": true
				},
				"rowMargin": {
					"type": "number",
					"default": 15
				},
				"siteMargin": {
					"type": "number",
					"default": 30
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"ColumnProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"background": {
					"type": ["string", "null"],
					"pseudoType": ["ref"]
				},
				"alignment": {
					"type": "number",
					"default": 50,
					"minimum": 0,
					"maximum": 100,
					"description": "The alignment of the content relative to the whole column, represented as percentage (e.g. 0 for left, 50 for center and 100 for right)"
				},
				"mediaBackgroundPadding": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "object",
						"maxProperties": 1,
						"properties:": {
							"top": {
								"oneOf": [{
									"type": "null"
								}, {
									"type": "number",
									"default": 18,
									"minimum": 0,
									"maximum": 1000,
									"description": "value of the mediaBackgroundPadding"
								}]
							},
							"bottom": {
								"oneOf": [{
									"type": "null"
								}, {
									"type": "number",
									"default": 18,
									"minimum": 0,
									"maximum": 1000,
									"description": "value of the mediaBackgroundPadding"
								}]
							}
						}
					}]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"InputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"label": {
					"type": "string",
					"description": "input label"
				},
				"required": {
					"type": "boolean",
					"description": "is the input field required to have a value"
				},
				"autoFocus": {
					"type": "boolean",
					"description": "should the field be focused when loading the page"
				},
				"readOnly": {
					"type": "boolean",
					"description": "is the field readonly"
				},
				"tabIndex": {
					"type": "number",
					"description": "the tab index in the form"
				}
			}
		}, {
			"$ref": "DisableableProperties"
		}]
	},
	"QuickActionBarProperties": {
		"type": "object",
		"properties": {
			"colorScheme": {
				"type": "string",
				"enum": ["black", "grey", "brand"],
				"default": "brand"
			},
			"invertColors": {
				"type": "boolean",
				"default": true
			},
			"hideText": {
				"type": "boolean",
				"default": true
			},
			"alignment": {
				"type": "string",
				"enum": ["right", "left"],
				"default": "right"
			}
		}
	},
	"PhotoProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageSize": {
					"type": "string",
					"enum": ["small", "medium", "large"],
					"default": "medium",
					"description": "size of the image in runtime"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"FacebookLikeBoxProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transparentBg": {
					"type": "boolean",
					"default": false,
					"description": "Sets a transparent background for the like box"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ImageButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transition": {
					"type": "string",
					"enum": ["none", "fade"],
					"default": "fade"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"MultiSelectionProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"placeholder": {
					"type": "string",
					"default": "Enter text here...",
					"description": "The placeholder for the input skinpart"
				},
				"newItemText": {
					"type": "string",
					"default": "(New)",
					"description": "The text that will appear on a new item in the dropdown"
				},
				"selectionOnly": {
					"type": "boolean",
					"default": false,
					"description": "Restricts component to selection only"
				},
				"maxTextLength": {
					"type": "number",
					"default": 30,
					"description": "The max text length for the input skinpart"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"MultiSelectionItemProperties": {
		"$ref": "DefaultProperties"
	},
	"NumericStepperProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"minValue": {
					"type": "number",
					"default": 0,
					"description": "Min value for input"
				},
				"maxValue": {
					"type": "number",
					"default": 999,
					"description": "Max value for input"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"PinterestPinItProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"size": {
					"type": "string",
					"enum": ["small", "large"],
					"default": "small"
				},
				"color": {
					"type": "string",
					"enum": ["gray", "red", "white"],
					"default": "gray"
				},
				"counterPosition": {
					"type": "string",
					"enum": ["none", "above", "beside"],
					"default": "none"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SingleAudioPlayerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"volume": {
					"type": "number",
					"default": 50,
					"description": "Volume"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": "Autoplay MP3"
				},
				"loop": {
					"type": "boolean",
					"default": false,
					"description": "Loop MP3"
				},
				"showArtist": {
					"type": "boolean",
					"default": true,
					"description": "Display Artist"
				},
				"showTrack": {
					"type": "boolean",
					"default": true,
					"description": "Display Track"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SkypeCallButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageSize": {
					"type": "string",
					"enum": ["small", "medium", "large"],
					"default": "medium"
				},
				"imageColor": {
					"type": "string",
					"enum": ["blue", "white"],
					"default": "blue"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SpotifyFollowProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"size": {
					"type": "string",
					"enum": ["small", "large"],
					"default": "large"
				},
				"theme": {
					"type": "string",
					"enum": ["light", "dark"],
					"default": "light"
				},
				"showFollowersCount": {
					"type": "boolean",
					"default": true
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SpotifyPlayerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"size": {
					"type": "string",
					"enum": ["compact", "large"],
					"default": "compact",
					"description": "Size of the player"
				},
				"color": {
					"type": "string",
					"enum": ["black", "white"],
					"default": "black",
					"description": "Theme of the player"
				},
				"style": {
					"type": "string",
					"enum": ["list", "coverart"],
					"default": "list",
					"description": "Style of the player"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SubscribeFormProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"hiddenFirstNameField": {
					"type": "boolean",
					"default": false
				},
				"hiddenLastNameField": {
					"type": "boolean",
					"default": false
				},
				"hiddenEmailField": {
					"type": "boolean",
					"default": true
				},
				"hiddenPhoneField": {
					"type": "boolean",
					"default": false
				},
				"requiredFirstNameField": {
					"type": "boolean",
					"default": false
				},
				"requiredLastNameField": {
					"type": "boolean",
					"default": false
				},
				"requiredEmailField": {
					"type": "boolean",
					"default": true
				},
				"requiredPhoneField": {
					"type": "boolean",
					"default": false
				},
				"useCookie": {
					"type": "boolean",
					"default": true
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"VerticalMenuProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"itemsAlignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left",
					"description": "alignment of the menu items"
				},
				"subMenuOpenSide": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "right",
					"description": "Opening direction of sub-menus"
				},
				"originalHeight": {
					"type": "number",
					"description": "Used to determine if comp was saved with correct height (if value not empty), or height needs to be fixed in DataFixer (if value is empty)"
				},
				"menuItemHeight": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "number"
					}],
					"default": null
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"YouTubeSubscribeButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"layout": {
					"type": "string",
					"enum": ["default", "full"],
					"default": "full",
					"description": "the layout of the youtube subscribe button"
				},
				"theme": {
					"type": "string",
					"enum": ["light", "dark"],
					"default": "light",
					"description": "the theme of the youtube subscribe button"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"BgImageStripProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"bgUrl": {
					"type": ["string", "null"],
					"default": "",
					"description": "Set image background"
				},
				"bgSize": {
					"type": "string",
					"enum": ["auto", "cover", "contain"],
					"default": "auto",
					"description": "Set background mode"
				},
				"bgRepeat": {
					"type": "string",
					"enum": ["no-repeat", "repeat-x", "repeat-y", "repeat"],
					"default": "repeat",
					"description": "Set background tile direction"
				},
				"bgPosition": {
					"type": "string",
					"enum": ["top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", "bottom right"],
					"default": "center",
					"description": "Set background position"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"BgImageStripUnifiedProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"fittingType": {
					"type": "string",
					"enum": ["fill", "fit", "actual_size", "tile", "fit_and_tile", "tile_horizontal", "tile_vertical", "legacy_strip_tile", "legacy_strip_tile_horizontal", "legacy_strip_tile_vertical", "legacy_strip_original_size", "legacy_strip_fill", "legacy_strip_fit", "legacy_strip_fit_and_tile"],
					"default": "fill",
					"description": "Set image fitting type"
				},
				"alignType": {
					"type": "string",
					"enum": ["top_left", "top", "top_right", "left", "center", "right", "bottom_left", "bottom", "bottom_right"],
					"default": "center",
					"description": "Set image alignment"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"FileUploaderProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"buttonAlignment": {
					"type": "string",
					"enum": ["rtl", "ltr"],
					"default": "ltr",
					"description": "alignment of the label to the button"
				},
				"filesAlignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left",
					"description": "alignment of the file name to the component"
				},
				"showPlaceholder": {
					"type": "boolean",
					"default": true,
					"description": "should show placeholder"
				},
				"filesType": {
					"type": "string",
					"enum": ["Image", "Document", "Video", "Audio"],
					"default": "Image",
					"description": "the file type allowed for upload by the component"
				},
				"filesSizeLimit": {
					"type": "number",
					"default": 15,
					"minimum": 1,
					"maximum": 15,
					"description": "the maximum file size allowed to upload by the component"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"UploadNameProperties": {
		"type": "object",
		"properties": {
			"$ref": "DefaultProperties"
		}
	},
	"ButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"align": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "center",
					"description": "alignment of the menu"
				},
				"margin": {
					"type": "number",
					"default": 0,
					"description": "text left and right margins"
				}
			}
		}, {
			"$ref": "DisableableProperties"
		}]
	},
	"LoginSocialBarProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"buttonsDirection": {
					"type": "string",
					"default": "ltr",
					"enum": ["ltr", "rtl"],
					"description": "alignment of the buttons"
				},
				"iconSize": {
					"type": "number",
					"default": 26,
					"description": "size of the buttons' icons"
				},
				"dropDownTextAlignment": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"],
					"description": "alignment of the text in the dropdown menu"
				},
				"buttonsAlignment": {
					"type": "string",
					"default": "right",
					"enum": ["left", "center", "right"],
					"description": "alignment of the bar of the component itself"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ComboBoxInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textAlignment": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"default": "center",
						"enum": ["left", "right", "center"],
						"description": "the direction of the text",
						"maxLength": 100
					}]
				},
				"textPadding": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "number",
						"default": 18,
						"minimum": 0,
						"maximum": 100,
						"description": "the value of the textPadding"
					}]
				},
				"placeholder": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "object",
						"properties:": {
							"value": {
								"type": "string",
								"default": "-1",
								"description": "the value of the placeholder option",
								"maxLength": 400
							},
							"text": {
								"type": "string",
								"default": "",
								"description": "the text of the placeholder option",
								"maxLength": 400
							}
						}
					}],
					"description": "the placeholder option in case nothing is selected",
					"default": null
				},
				"size": {
					"type": ["null", "number"],
					"default": null,
					"description": "Amount of options to display"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"RadioButtonProperties": {
		"type": "object",
		"allOf": [{
			"$ref": "InputProperties"
		}]
	},
	"RadioGroupProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "left",
					"description": "alignment of the text"
				},
				"layout": {
					"type": "string",
					"enum": ["vertical", "horizontal"],
					"default": "vertical",
					"description": "the layout of the radio buttons child components"
				},
				"buttonsMargin": {
					"type": "number",
					"default": 24,
					"description": "Margin between each button item",
					"minimum": 0,
					"maximum": 100
				},
				"spacing": {
					"type": "number",
					"default": 12,
					"description": "Spacing between radio icon and text",
					"minimum": 0,
					"maximum": 100
				},
				"buttonSize": {
					"type": "number",
					"default": 18,
					"description": "radio button size size",
					"minimum": 6,
					"maximum": 100
				},
				"labelMargin": {
					"type": "number",
					"default": 24,
					"description": "Margin between label to buttons",
					"minimum": 0,
					"maximum": 100
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"CheckboxGroupProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "left",
					"description": "alignment of the text"
				},
				"layout": {
					"type": "string",
					"enum": ["vertical", "horizontal"],
					"default": "vertical",
					"description": "the layout of the checkboxes components"
				},
				"buttonsMargin": {
					"type": "number",
					"default": 24,
					"description": "Margin between each button item",
					"minimum": 0,
					"maximum": 100
				},
				"spacing": {
					"type": "number",
					"default": 12,
					"description": "Spacing between checkbox and text",
					"minimum": 0,
					"maximum": 100
				},
				"buttonSize": {
					"type": "number",
					"default": 18,
					"description": "checkbox size",
					"minimum": 6,
					"maximum": 100
				},
				"labelMargin": {
					"type": "number",
					"default": 24,
					"description": "Margin between label to checkbox",
					"minimum": 0,
					"maximum": 100
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"ContactFormProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"hidden_emailFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"hidden_nameFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"hidden_phoneFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"hidden_addressFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"hidden_subjectFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"hidden_messageFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"required_emailFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"required_nameFieldLabel": {
					"type": "boolean",
					"default": true
				},
				"required_phoneFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"required_addressFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"required_subjectFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"required_messageFieldLabel": {
					"type": "boolean",
					"default": false
				},
				"useCookie": {
					"type": "boolean",
					"default": true
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"DocumentMediaProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showTitle": {
					"type": "boolean",
					"default": true,
					"description": "Toggle Document Title Display"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"EbayItemsBySellerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"headerImage": {
					"type": "string",
					"enum": ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
					"default": 0,
					"description": "The widget's header"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"FiveGridLineProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"fullScreenModeOn": {
					"type": "boolean",
					"default": false,
					"description": "Toggle full screen mode"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"FlashComponentProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"displayMode": {
					"type": "string",
					"enum": ["original", "fit", "stretch"],
					"default": "original",
					"description": "displayMode of the movie"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"GalleryExpandProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"expandEnabled": {
					"type": "boolean",
					"default": true
				},
				"goToLinkText": {
					"type": ["null", "string"],
					"default": "Go to link"
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"enum": ["disabled", "zoomMode", "goToLink"],
					"default": "zoomMode"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"GoogleMapProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showZoom": {
					"type": "boolean",
					"default": true,
					"description": "show zoom control"
				},
				"showPosition": {
					"type": "boolean",
					"default": true,
					"description": "show position control"
				},
				"showStreetView": {
					"type": "boolean",
					"default": true,
					"description": "show Street View control"
				},
				"showMapType": {
					"type": "boolean",
					"default": true,
					"description": "show map type control"
				},
				"mapDragging": {
					"type": "boolean",
					"default": true,
					"description": "show map type control"
				},
				"mapType": {
					"type": "string",
					"enum": ["ROADMAP", "TERRAIN", "SATELLITE", "HYBRID"],
					"default": "ROADMAP",
					"description": "show zoom control"
				},
				"language": {
					"type": "string",
					"enum": ["userLang", "cs", "da", "de", "en", "es", "fr", "hi", "it", "ja", "ko", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en",
					"description": "Possible languages taken from https://developers.google.com/maps/faq?hl=en#languagesupport"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"HorizontalMenuProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignButtons": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "center",
					"description": "alignment of the menu buttons"
				},
				"alignText": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "center",
					"description": "alignment of the menu buttons' text"
				},
				"sameWidthButtons": {
					"type": "boolean",
					"default": false,
					"description": "Keep buttons the same size"
				},
				"moreButtonLabel": {
					"type": ["null", "string"],
					"default": "More",
					"description": "Label to use for 'more button'"
				},
				"moreItemHeight": {
					"type": "number",
					"default": 15,
					"description": "height of items in the more menu"
				},
				"stretchButtonsToMenuWidth": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"rtl": {
					"type": "boolean",
					"default": false,
					"description": "should display menu in RTL mode"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ImpressProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"textMode": {
					"langsPrefix": "System",
					"type": "string",
					"default": "titleAndDescription",
					"enum": ["titleAndDescription", "titleOnly", "descriptionOnly", "noText"]
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"autoplayInterval": {
					"type": "number",
					"default": 5,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"showPagination": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"cropAndFitStage": {
					"langsPrefix": "System",
					"type": "string",
					"default": "crop",
					"enum": ["crop", "fit"]
				},
				"transition": {
					"type": "string",
					"default": "random",
					"enum": ["none", "1", "2", "3", "4", "5", "random"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"MasonryProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"numCols": {
					"type": "number",
					"default": 3,
					"description": "Number of columns",
					"minimum": 1,
					"maximum": 10
				},
				"margin": {
					"type": "number",
					"default": 25,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 100
				},
				"textMode": {
					"langsPrefix": "System",
					"type": "string",
					"default": "titleAndDescription",
					"enum": ["titleAndDescription", "titleOnly", "descriptionOnly", "noText"]
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"boxShadowIsOn": {
					"type": "boolean",
					"default": true
				},
				"boxShadow": {
					"type": "string",
					"default": "0 1px 3px 0 rgba(0,0,0,0.33)"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"StripShowcaseProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"galleryImageOnClickAction": {
					"langsKey": "System.centerImageClick",
					"type": "string",
					"default": "disabled",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"cropAndFitStage": {
					"langsPrefix": "System",
					"type": "string",
					"default": "fit",
					"enum": ["crop", "fit"]
				},
				"imageScale": {
					"type": "string",
					"default": "4:3",
					"enum": ["16:9", "4:3", "1:1", "3:4", "9:16"]
				},
				"imageMargin": {
					"type": "number",
					"default": 5,
					"description": "Margin between thumbnails",
					"minimum": 0,
					"maximum": 100
				},
				"showThumbnails": {
					"type": "boolean",
					"default": true
				},
				"thumbsScale": {
					"type": "string",
					"default": "4:3",
					"enum": ["16:9", "4:3", "1:1", "3:4", "9:16"]
				},
				"thumbsMargin": {
					"type": "number",
					"default": 5,
					"description": "Margin between thumbnails",
					"minimum": 0,
					"maximum": 100
				},
				"autoplay": {
					"type": "boolean",
					"default": false
				},
				"autoplayInterval": {
					"type": "number",
					"default": 5,
					"minimum": 0,
					"maximum": 30
				},
				"arrowMode": {
					"type": "boolean",
					"default": false
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"StripSlideshowProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"textMode": {
					"langsPrefix": "System",
					"type": "string",
					"default": "titleAndDescription",
					"enum": ["titleAndDescription", "titleOnly", "descriptionOnly", "noText"]
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"autoplayInterval": {
					"type": "number",
					"default": 5,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"transition": {
					"langsPrefix": "System",
					"type": "string",
					"default": "scroll",
					"enum": ["none", "crossFade", "slide", "scroll", "zoom", "random"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ThumbnailsProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"cropAndFitStage": {
					"langsPrefix": "System",
					"type": "string",
					"default": "crop",
					"enum": ["crop", "fit"]
				},
				"componentScale": {
					"type": "string",
					"default": "4:3",
					"enum": ["16:9", "4:3", "1:1"]
				},
				"margin": {
					"type": "number",
					"default": 5,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 100
				},
				"textMode": {
					"langsPrefix": "System",
					"type": "string",
					"default": "titleAndDescription",
					"enum": ["titleAndDescription", "titleOnly", "descriptionOnly", "noText"]
				},
				"arrowMode": {
					"type": "boolean",
					"default": true
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"autoplayInterval": {
					"type": "number",
					"default": 5,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"transition": {
					"langsPrefix": "System",
					"type": "string",
					"default": "crossFade",
					"enum": ["none", "crossFade", "slide", "scroll", "zoom", "random"]
				},
				"thumbnailsGravity": {
					"langsKey": "System.gravity",
					"type": "string",
					"default": "bottom",
					"enum": ["top", "bottom", "left", "right"]
				},
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "disabled",
					"enum": ["disabled", "zoomMode", "goToLink"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"AccordionProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"descFont": {
					"$ref": "FontsEnum"
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"textMode": {
					"langsKey": "System.textMode",
					"type": "string",
					"default": "titleOnly",
					"enum": ["titleOnly", "noText"]
				},
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"borderWidth": {
					"type": "number",
					"default": 0,
					"description": "Borer width between images",
					"minimum": 0,
					"maximum": 30
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"CollageProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"alignText": {
					"type": "string",
					"default": "center",
					"enum": ["left", "center", "right"]
				},
				"textMode": {
					"langsKey": "System.textMode",
					"type": "string",
					"default": "titleOnly",
					"enum": ["titleAndDescription", "titleOnly", "noText"]
				},
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"minImageSize": {
					"type": "number",
					"default": 1,
					"description": "minimum image size",
					"minimum": 1,
					"maximum": 10
				},
				"maxImageSize": {
					"type": "number",
					"default": 3,
					"description": "maximum image size",
					"minimum": 1,
					"maximum": 10
				},
				"avergeImageSize": {
					"type": "number",
					"default": 1,
					"description": "averge image size",
					"minimum": 1,
					"maximum": 10
				},
				"margin": {
					"type": "number",
					"default": 5,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 30
				},
				"fitToScreenWidth": {
					"type": "boolean",
					"default": false,
					"description": "fit component width to screen"
				},
				"showNavButtons": {
					"type": "boolean",
					"default": true,
					"description": "show navigation buttons"
				},
				"numOfCells": {
					"type": "number",
					"default": 5,
					"description": "number of grid cells",
					"minimum": 2,
					"maximum": 10
				},
				"orientation": {
					"langsKey": "System.orientation",
					"type": "string",
					"default": "vertical",
					"enum": ["vertical", "horizontal"]
				},
				"layoutSeed": {
					"type": "number",
					"default": 50,
					"description": "seed for layout calculation",
					"minimum": 1,
					"maximum": 100
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"FreestyleProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"galleryImageOnClickAction": {
					"langsPrefix": "System",
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"layoutSeed": {
					"type": "number",
					"default": 50,
					"description": "seed for layout calculation",
					"minimum": 1,
					"maximum": 100
				},
				"cropAndFitStage": {
					"langsPrefix": "System",
					"type": "string",
					"default": "fit",
					"enum": ["crop", "fit"]
				},
				"imageDecoration": {
					"langsPrefix": "System",
					"type": "string",
					"default": "none",
					"enum": ["none", "polaroid", "scotchTape", "vintageFrame", "random"]
				},
				"borderWidth": {
					"type": "number",
					"default": 3,
					"description": "image border width",
					"minimum": 0,
					"maximum": 15
				},
				"orientation": {
					"type": "string",
					"default": "horizontal",
					"enum": ["vertical", "horizontal"]
				},
				"applyRotationInLayout": {
					"type": "boolean",
					"default": true
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ItunesButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"language": {
					"type": "string",
					"enum": ["userLang", "da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en",
					"description": "Language of the button"
				},
				"openIn": {
					"type": "string",
					"enum": ["_self", "_blank"],
					"default": "_blank",
					"description": "Where the link will be opened"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"LayoutProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"x": {
					"type": "number",
					"default": 0,
					"description": "x position"
				},
				"y": {
					"type": "number",
					"default": 0,
					"description": "y position"
				},
				"w": {
					"type": "number",
					"default": 100,
					"description": "width"
				},
				"h": {
					"type": "number",
					"default": 100,
					"description": "height"
				},
				"anchors": {
					"type": ["null", "array"],
					"description": "list of anchors"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"LinkBarProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"gallery": {
					"type": ["null", "string"],
					"default": "clipart",
					"description": "gallery type (photos, icons, backgrounds, etc..)"
				},
				"iconSize": {
					"type": "number",
					"default": 30,
					"description": "Icon Size",
					"minimum": 16,
					"maximum": 128
				},
				"spacing": {
					"type": "number",
					"default": 5,
					"description": "Spacing",
					"minimum": 1,
					"maximum": 50
				},
				"bgScale": {
					"type": "number",
					"default": 1,
					"description": "Background scale",
					"minimum": 0,
					"maximum": 2
				},
				"orientation": {
					"type": "string",
					"enum": ["HORIZ", "VERT"],
					"default": "HORIZ",
					"description": "Orientation"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"MatrixGalleryProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageMode": {
					"type": "string",
					"enum": ["clipImage", "flexibleWidthFixed"],
					"default": "clipImage"
				},
				"numCols": {
					"type": "number",
					"default": 3,
					"description": "Number of columns",
					"minimum": 1,
					"maximum": 10
				},
				"maxRows": {
					"type": "number",
					"default": 3,
					"description": "Maximum number of rows",
					"minimum": 1,
					"maximum": 10
				},
				"incRows": {
					"type": "number",
					"default": 2,
					"description": "Row number increase",
					"minimum": 1,
					"maximum": 10
				},
				"margin": {
					"type": "number",
					"default": 15,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 250
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"showMoreLabel": {
					"type": ["null", "string"],
					"default": "Show More",
					"description": "Show More"
				},
				"expandEnabled": {
					"type": "boolean",
					"default": true
				},
				"goToLinkText": {
					"type": ["null", "string"],
					"default": "Go to link"
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"enum": ["disabled", "zoomMode", "goToLink"],
					"default": "zoomMode"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"NumberInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"minValue": {
					"type": "number",
					"default": 0,
					"description": "minimum allowed value"
				},
				"maxValue": {
					"type": "number",
					"default": 999,
					"description": "maximum allowed value"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"PageGroupProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transition": {
					"type": "string",
					"enum": ["none", "swipeHorizontalFullScreen", "swipeVerticalFullScreen", "crossfade", "outIn"],
					"default": "swipeHorizontalFullScreen",
					"description": "page transition"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"PaginatedGridGalleryProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageMode": {
					"type": "string",
					"enum": ["clipImage"],
					"default": "clipImage"
				},
				"numCols": {
					"type": "number",
					"default": 3,
					"description": "Number of columns",
					"minimum": 1,
					"maximum": 10
				},
				"maxRows": {
					"type": "number",
					"default": 3,
					"description": "Maximum number of rows",
					"minimum": 1,
					"maximum": 10
				},
				"margin": {
					"type": "number",
					"default": 0,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 250
				},
				"transition": {
					"type": "string",
					"default": "seq_crossFade_All",
					"enum": ["none", "seq_crossFade_All", "seq_shrink_All", "swipe_horiz_All", "swipe_vert_All", "seq_random"]
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"autoplayInterval": {
					"type": "number",
					"default": 3,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"showAutoplay": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"showNavigation": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"showCounter": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"expandEnabled": {
					"type": "boolean",
					"default": true
				},
				"goToLinkText": {
					"type": ["null", "string"],
					"default": "Go to link"
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"PayPalButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"buttonType": {
					"type": "string",
					"enum": ["buy", "donate"],
					"default": "buy",
					"description": "buy or donate button"
				},
				"itemName": {
					"type": ["null", "string"],
					"default": "",
					"description": "some amazing description"
				},
				"itemID": {
					"type": ["null", "string"],
					"default": "",
					"description": "some amazing description"
				},
				"organizationName": {
					"type": ["null", "string"],
					"default": "",
					"description": "some amazing description"
				},
				"organizationID": {
					"type": ["null", "string"],
					"default": "",
					"description": "some amazing description"
				},
				"amount": {
					"type": ["null", "string"],
					"default": "",
					"description": "some amazing description"
				},
				"currencyCode": {
					"type": "string",
					"default": "USD",
					"description": "Currency Code"
				},
				"target": {
					"type": "string",
					"enum": ["_self", "_blank"],
					"default": "_blank",
					"description": "Currency Code"
				},
				"showCreditCards": {
					"type": "boolean",
					"default": true,
					"description": "Show credit card symbols"
				},
				"smallButton": {
					"type": "boolean",
					"default": false,
					"description": "use small button"
				},
				"language": {
					"type": "string",
					"enum": ["userLang", "da", "de", "en", "es", "fr", "it", "ja", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en",
					"description": "https://developer.paypal.com/docs/classic/api/locale_codes/"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SiteSegmentContainerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"fixedPosition": {
					"type": "boolean",
					"default": false,
					"description": "fixed positioning for components that inherit from SiteSegmentContainers"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SliderGalleryProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageMode": {
					"type": "string",
					"default": "clipImage",
					"enum": ["clipImage", "flexibleWidth"]
				},
				"margin": {
					"type": "number",
					"default": 15,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 250
				},
				"maxSpeed": {
					"type": "number",
					"default": 5,
					"minimum": 1,
					"maximum": 30,
					"description": "Speed"
				},
				"aspectRatio": {
					"type": "number",
					"minimum": 0.1,
					"maximum": 3,
					"default": 1,
					"description": ""
				},
				"aspectRatioPreset": {
					"type": "string",
					"enum": ["16:9", "4:3", "1:1", "3:4", "9:16"],
					"default": "4:3"
				},
				"loop": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"showCounter": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"expandEnabled": {
					"type": "boolean",
					"default": true
				},
				"goToLinkText": {
					"type": ["null", "string"],
					"default": "Go to link"
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"enum": ["disabled", "zoomMode", "goToLink"],
					"default": "zoomMode"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SlideShowGalleryProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"imageMode": {
					"type": "string",
					"enum": ["clipImage", "flexibleHeight", "flexibleWidthFixed"],
					"default": "clipImage"
				},
				"transition": {
					"type": "string",
					"enum": ["none", "swipeVertical", "swipeHorizontal", "crossfade", "outIn"],
					"default": "swipeHorizontal",
					"description": "Transition between items of the gallery"
				},
				"autoplayInterval": {
					"type": "number",
					"default": 5,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"bidirectional": {
					"type": "boolean",
					"default": true,
					"description": "Decides whether the transition direction reflects Prev/Next"
				},
				"reverse": {
					"type": "boolean",
					"default": false,
					"description": "If bidirectional, inverts the direction of transitions"
				},
				"showAutoplay": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"showNavigation": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"showCounter": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"expandEnabled": {
					"type": "boolean",
					"default": true
				},
				"goToLinkText": {
					"type": ["null", "string"],
					"default": "Go to link"
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "right"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"SvgShapeProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"maintainAspectRatio": {
					"type": "boolean",
					"default": true,
					"description": "should the shape maintain it's aspect ratio or stretch"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"VectorImageProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"displayMode": {
					"type": "string",
					"enum": ["legacyFit", "fit", "stretch"],
					"description": "should the shape maintain it's aspect ratio or stretch, 'legacy-fit' is for converted SvgShape"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"TableComponentProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"minHeight": {
					"type": "number",
					"default": -1,
					"description": "minimum allowed value"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"TinyMenuProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"direction": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"TwitterFeedProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"numOfTweets": {
					"type": "number",
					"default": 5,
					"description": "Number of tweets in feed"
				},
				"subject": {
					"type": ["null", "string"],
					"default": "What's being said about...",
					"description": "subject line"
				},
				"title": {
					"type": ["null", "string"],
					"default": "Me...",
					"description": "title line"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"VideoProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": "video autoplay on load"
				},
				"loop": {
					"type": "boolean",
					"default": false,
					"description": "play video in a loop"
				},
				"showinfo": {
					"type": "boolean",
					"default": false,
					"description": "show video title and author"
				},
				"lightTheme": {
					"type": "boolean",
					"default": false,
					"description": "show video with light theme"
				},
				"showControls": {
					"type": "string",
					"enum": ["always_show", "always_hide", "temp_show"],
					"default": "always_show",
					"description": "show / hide controls"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"VKShareProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"rightAngles": {
					"type": "boolean",
					"default": false,
					"description": "Button Right angles"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WFacebookCommentProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"numPosts": {
					"type": "number",
					"default": 2,
					"minimum": 0,
					"maximum": 10,
					"description": "the number of posts display by default"
				},
				"width": {
					"type": "number",
					"default": 555,
					"description": "the width of the plugin, in pixels"
				},
				"colorScheme": {
					"type": "string",
					"enum": ["light", "dark"],
					"default": "light",
					"description": "the color scheme of the plugin"
				},
				"canBeShownOnAllPagesBug": {
					"type": "boolean",
					"default": false,
					"description": "The component was added after the bug who-145 fix, and will be shown on all pages"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"DisqusCommentsProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"disqusId": {
					"type": "string",
					"description": "User id in disqus"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WFacebookLikeProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"layout": {
					"type": "string",
					"enum": ["standard", "button_count", "box_count"],
					"default": "standard",
					"description": "the layout of the button"
				},
				"send": {
					"type": "boolean",
					"default": false,
					"description": "enable/disable the send button"
				},
				"show_faces": {
					"type": "boolean",
					"default": false,
					"description": "show the faces of your friends that liked this item"
				},
				"width": {
					"type": ["null", "string", "number"],
					"default": "225",
					"description": "the width of the Like button"
				},
				"action": {
					"type": "string",
					"enum": ["like", "recommend"],
					"default": "like",
					"description": " the verb to display on the button. Options: *like*, *recommend*"
				},
				"font": {
					"type": "string",
					"enum": ["helvetica", "arial", "lucida grande", "segoe ui", "tahoma", "trebuchet ms", "verdana"],
					"default": "helvetica",
					"description": "the font to display in the button"
				},
				"colorScheme": {
					"type": "string",
					"enum": ["light", "dark"],
					"default": "dark",
					"description": "the color scheme for the like button"
				},
				"language": {
					"type": "string",
					"enum": ["userLang", "da", "de", "en", "es", "fr", "it", "ja", "kr", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WGooglePlusOneProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"size": {
					"type": "string",
					"enum": ["small", "medium", "standard", "tall"],
					"default": "standard",
					"description": "The button size to render"
				},
				"annotation": {
					"type": "string",
					"enum": ["none", "bubble", "inline"],
					"default": "inline",
					"description": "The annotation to display next to the button."
				},
				"width": {
					"type": ["null", "number"],
					"default": null,
					"description": "If annotation is set to *inline*, the width in pixels to use for the button and its inline annotation. If omitted, a button and its inline annotation use 450px."
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WPhotoProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"displayMode": {
					"type": "string",
					"enum": ["fit", "fill", "full", "stretch", "fitWidth", "fitWidthStrict", "fitHeightStrict"],
					"default": "fill",
					"description": "displayMode of the photo"
				},
				"autoFill": {
					"type": "boolean",
					"default": false,
					"description": "Should the photo should enable auto crop in the editor"
				},
				"onClickBehavior": {
					"type": "string",
					"enum": ["disabled", "goToLink", "zoomMode", "zoomAndPanMode"],
					"default": "goToLink",
					"description": "goToLink"
				},
				"effectName": {
					"type": ["string", "null"],
					"description": "An effect to apply on the image",
					"default": "none"
				},
				"filterEffect": {
					"type": ["object", "null"],
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
					},
					"description": "An effect to apply on the image",
					"default": null
				},
				"overrideCrop": {
					"description": "Overriding the image crop for Mobile view",
					"default": null,
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
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WRichTextProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"packed": {
					"type": "boolean",
					"default": false,
					"description": "Is the text component packed"
				},
				"brightness": {
					"type": "number",
					"default": 1
				},
				"overrideAlignment": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"enum": ["left", "right", "center", "justify"]
					}]
				},
				"overrideColor": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string"
					}]
				},
				"minHeight": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "number"
					}]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WTwitterFollowProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showCount": {
					"type": "boolean",
					"default": true,
					"description": "Followers count display"
				},
				"showScreenName": {
					"type": "boolean",
					"default": true,
					"description": "Show screen name"
				},
				"textColor": {
					"type": ["null", "string"],
					"format": "hexColor",
					"default": null,
					"description": "HEX color code for the text color"
				},
				"linkColor": {
					"type": ["null", "string"],
					"format": "hexColor",
					"default": null,
					"description": "HEX color code for the Username link color"
				},
				"width": {
					"type": "number",
					"default": 100,
					"description": "width of the Follow Button"
				},
				"dataLang": {
					"type": "string",
					"enum": ["userLang", "da", "de", "en", "es", "fr", "hi", "it", "ja", "ko", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en",
					"description": "The language for the Tweet Button (from https://dev.twitter.com/overview/general/adding-international-support-to-your-apps)"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"WTwitterTweetProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"dataCount": {
					"type": "string",
					"enum": ["none", "horizontal", "vertical"],
					"default": "horizontal",
					"description": "Count box position"
				},
				"dataLang": {
					"type": "string",
					"enum": ["userLang", "da", "de", "en", "es", "fr", "hi", "it", "ja", "ko", "nl", "no", "pl", "pt", "ru", "sv", "tr"],
					"default": "en",
					"description": "The language for the Tweet Button (from https://dev.twitter.com/overview/general/adding-international-support-to-your-apps)"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"HoverBoxProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"mobileDisplayedModeId": {
					"type": ["string", "null"],
					"default": null,
					"description": "The mode to activate when in mobile view"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"TPAGluedProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"placement": {
					"type": ["null", "string"],
					"default:": "BOTTOM_RIGHT",
					"description": "widget placement"
				},
				"verticalMargin": {
					"type": ["null", "string", "number"],
					"default:": "",
					"description": "widget vertical margin"
				},
				"horizontalMargin": {
					"type": ["null", "string", "number"],
					"default:": "",
					"description": "widget horizontal margin"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"HoneycombProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"font": {
					"$ref": "FontsEnum"
				},
				"alignText": {
					"type": "string",
					"default": "left",
					"enum": ["left", "center", "right"]
				},
				"textMode": {
					"langsKey": "System.textMode",
					"type": "string",
					"default": "titleAndDescription",
					"enum": ["titleAndDescription", "titleOnly", "descriptionOnly", "noText"]
				},
				"galleryImageOnClickAction": {
					"type": "string",
					"default": "zoomMode",
					"enum": ["disabled", "zoomMode", "goToLink"]
				},
				"margin": {
					"type": "number",
					"default": 1,
					"description": "Margin around each item",
					"minimum": 0,
					"maximum": 30
				},
				"numOfColumns": {
					"type": "number",
					"default": 4,
					"description": "number of columns",
					"minimum": 2,
					"maximum": 10
				},
				"numOfHoles": {
					"type": "number",
					"default": 2,
					"description": "number of holes in the honeycomb",
					"minimum": 2,
					"maximum": 8
				},
				"layoutSeed": {
					"type": "number",
					"default": 50,
					"description": "seed for layout calculation",
					"minimum": 1,
					"maximum": 100
				},
				"rolloverAnimation": {
					"type": "string",
					"default": "colorOnly",
					"enum": ["colorOnly", "glow", "bounce"]
				},
				"imageShape": {
					"type": "string",
					"default": "hexagon",
					"enum": ["hexagon", "square", "triangle"]
				},
				"imageScale": {
					"type": "string",
					"default": "x1",
					"enum": ["x1", "x2", "x3"]
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"AppPartProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"direction": {
					"type": "string",
					"default": "ltr",
					"enum": ["ltr", "rtl"]
				},
				"metaData": {
					"type": "object"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"RssButtonProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transition": {
					"type": "string",
					"enum": ["none", "fade", "float", "expand", "spin", "fly", "turn", "reveal", "slide", "puff", "flip", "fold", "arc"],
					"default": "fade"
				},
				"type": {
					"type": "string"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"BoxSlideShowProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transition": {
					"type": "string",
					"enum": ["NoTransition", "SlideVertical", "SlideHorizontal", "CrossFade", "OutIn"],
					"default": "SlideHorizontal",
					"description": "Transition between items of the gallery"
				},
				"autoPlay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"autoPlayInterval": {
					"type": "number",
					"default": 2,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"direction": {
					"type": "string",
					"default": "RTL",
					"enum": ["LTR", "RTL"]
				},
				"pauseAutoPlayOnMouseOver": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"shouldHideOverflowContent": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"flexibleBoxHeight": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"showNavigationButton": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"navigationButtonSize": {
					"type": "number",
					"minimum": 8,
					"maximum": 72,
					"default": 21,
					"description": "Size of the navigation arrow buttons"
				},
				"navigationButtonMargin": {
					"type": "number",
					"minimum": -72,
					"maximum": 72,
					"default": 0,
					"description": "Margin from the sides of the navigation arrow buttons"
				},
				"showNavigationDots": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"navigationDotsAlignment": {
					"type": "string",
					"default": "center",
					"enum": ["left", "center", "right"],
					"description": "Alignment of the navigation dots"
				},
				"navigationDotsSize": {
					"type": "number",
					"minimum": 6,
					"maximum": 24,
					"default": 6,
					"description": "Size of the navigation dots"
				},
				"navigationDotsMargin": {
					"type": "number",
					"minimum": -50,
					"maximum": 50,
					"default": 0,
					"description": "Margin from the sides of the navigation dots"
				},
				"navigationDotsGap": {
					"type": "number",
					"minimum": 0,
					"maximum": 24,
					"default": 0,
					"description": "Gap size (spacing) of the navigation dots"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"BoxSlideShowSlideProperties": {
		"type": "object",
		"allOf": [{
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"StripContainerSlideShowProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"transition": {
					"type": "string",
					"enum": ["NoTransition", "SlideVertical", "SlideHorizontal", "CrossFade", "OutIn"],
					"default": "SlideHorizontal",
					"description": "Transition between items of the gallery"
				},
				"autoPlay": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"autoPlayInterval": {
					"type": "number",
					"default": 2,
					"minimum": 0,
					"maximum": 30,
					"description": "Autplay interval"
				},
				"direction": {
					"type": "string",
					"default": "RTL",
					"enum": ["LTR", "RTL"]
				},
				"pauseAutoPlayOnMouseOver": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"transDuration": {
					"type": "number",
					"minimum": 0,
					"maximum": 5,
					"default": 1,
					"description": "Duration of the transition in sec"
				},
				"shouldHideOverflowContent": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"flexibleBoxHeight": {
					"type": "boolean",
					"default": false,
					"description": ""
				},
				"showNavigationButton": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"navigationButtonSize": {
					"type": "number",
					"minimum": 8,
					"maximum": 72,
					"default": 21,
					"description": "Size of the navigation arrow buttons"
				},
				"navigationButtonMargin": {
					"type": "number",
					"minimum": 0,
					"maximum": 100,
					"default": 0,
					"description": "Margin from the sides of the navigation arrow buttons"
				},
				"showNavigationDots": {
					"type": "boolean",
					"default": true,
					"description": ""
				},
				"navigationDotsAlignment": {
					"type": "string",
					"default": "center",
					"enum": ["left", "center", "right"],
					"description": "Alignment of the navigation dots"
				},
				"navigationDotsSize": {
					"type": "number",
					"minimum": 6,
					"maximum": 24,
					"default": 6,
					"description": "Size of the navigation dots"
				},
				"navigationDotsMargin": {
					"type": "number",
					"minimum": -50,
					"maximum": 50,
					"default": 0,
					"description": "Margin from the sides of the navigation dots"
				},
				"navigationDotsGap": {
					"type": "number",
					"minimum": 0,
					"maximum": 24,
					"default": 0,
					"description": "Gap size (spacing) of the navigation dots"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"StripContainerSlideShowSlideProperties": {
		"type": "object",
		"allOf": [{
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"VerticalAnchorsMenuProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"itemsAlignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left",
					"description": "alignment of the menu items"
				},
				"orientation": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "right",
					"description": "menu orientation"
				},
				"autoColor": {
					"type": "boolean",
					"default": false,
					"description": "does the menu color change automatically according to the background brightness"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"TextInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textAlignment": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"default": "center",
						"enum": ["left", "right", "center"],
						"description": "the direction of the text",
						"maxLength": 100
					}]
				},
				"textPadding": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "number",
						"default": 18,
						"minimum": 0,
						"maximum": 100,
						"description": "the value of the textPadding"
					}]
				},
				"placeholder": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string"
					}],
					"description": "the placeholder option in case nothing is selected",
					"default": null
				},
				"defaultTextType": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"default": "none",
						"enum": ["none", "initialText", "placeholderText", "placeholderAndInitialText"],
						"description": "the type of the default text for the input",
						"maxLength": 100
					}]
				},
				"autoComplete": {
					"type": "boolean",
					"description": "can the field be auto completed by the browser"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"TextAreaInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textAlignment": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"default": "center",
						"enum": ["left", "right", "center"],
						"description": "the direction of the text",
						"maxLength": 100
					}]
				},
				"textPadding": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "number",
						"default": 18,
						"minimum": 0,
						"maximum": 100,
						"description": "the value of the textPadding"
					}]
				},
				"placeholder": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string"
					}],
					"description": "the placeholder option in case nothing is selected",
					"default": null
				},
				"defaultTextType": {
					"oneOf": [{
						"type": "null"
					}, {
						"type": "string",
						"default": "none",
						"enum": ["none", "initialText", "placeholderText", "placeholderAndInitialText"],
						"description": "the type of the default text for the input",
						"maxLength": 100
					}]
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"CheckboxProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "left",
					"description": "alignment of the text"
				},
				"buttonSize": {
					"type": "number",
					"default": 18,
					"description": "checkbox size",
					"minimum": 12,
					"maximum": 100
				},
				"spacing": {
					"type": "number",
					"default": 12,
					"description": "Spacing between checkbox and label",
					"minimum": 0,
					"maximum": 100
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"DatePickerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textAlignment": {
					"type": "string",
					"default": "left",
					"enum": ["left", "right", "center"],
					"description": "the direction of the text"
				},
				"textPadding": {
					"type": "number",
					"default": 18,
					"description": "the value of the text padding"
				},
				"placeholder": {
					"type": "string",
					"default": "",
					"maxLength": 200,
					"description": "placeholder text for date in input field"
				},
				"dateFormat": {
					"type": "string",
					"default": "MM/DD/YYYY",
					"enum": ["MM/DD/YYYY", "DD/MM/YYYY"],
					"description": "date format for selected date presentation inside the date input field"
				},
				"defaultTextType": {
					"type": "string",
					"default": "none",
					"enum": ["none", "today", "placeholder"],
					"description": "the type of the default text for the date input"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"GridProperties": {
		"type": "object",
		"properties": {
			"metaData": {
				"type": "object"
			},
			"type": {
				"type": "string"
			},
			"columns": {
				"type": "array",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"id": {
							"type": "string"
						},
						"dataPath": {
							"type": "string"
						},
						"linkPath": {
							"type": "string"
						},
						"label": {
							"type": "string"
						},
						"width": {
							"type": "number",
							"default": 100
						},
						"visible": {
							"type": "boolean",
							"default": true
						},
						"type": {
							"type": "string",
							"enum": ["number", "string", "date", "image", "bool", "richText"]
						}
					}
				}
			},
			"showHeader": {
				"type": "boolean"
			},
			"headerHeight": {
				"type": "number"
			},
			"rowHeight": {
				"type": "number"
			},
			"allowUserSorting": {
				"type": "boolean"
			},
			"allowUserFiltering": {
				"type": "boolean"
			},
			"allowUserEditing": {
				"type": "boolean"
			},
			"heightLayout": {
				"type": "string",
				"enum": ["manual", "auto"]
			},
			"pagination": {
				"type": "object",
				"additionalProperties": false,
				"properties": {
					"type": {
						"type": "string",
						"enum": ["normal", "pagination", "virtual"]
					},
					"rowsPerPage": {
						"type": "integer"
					},
					"manualHeightProps": {
						"type": "object",
						"properties": {
							"rowsPerPage": {
								"type": "integer"
							},
							"gridHeight": {
								"type": "integer"
							},
							"type": {
								"type": "string",
								"enum": ["normal", "pagination", "virtual"]
							}
						}
					}
				}
			},
			"userSelectionType": {
				"type": "string",
				"enum": ["none", "cell", "row"]
			},
			"dateFormat": {
				"type": "string"
			},
			"sorting": {
				"type": "array",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"colId": {
							"type": "string"
						},
						"sort": {
							"type": "string",
							"enum": ["asc", "desc", "none"]
						}
					}
				}
			},
			"linkTarget": {
				"type": "string",
				"enum": ["_self", "_blank"]
			},
			"columnLayout": {
				"type": "string",
				"enum": ["equal", "fitContent", "manual"]
			},
			"horizontalAlignment": {
				"type": "string",
				"enum": ["left", "center", "right"]
			}
		}
	},
	"PageProperties": {
		"definitions": {
			"minHeight": {
				"type": "number",
				"description": "minimum page size"
			},
			"popup": {
				"type": "object",
				"properties": {
					"closeOnOverlayClick": {
						"type": "boolean",
						"default": true
					}
				}
			}
		},
		"type": "object",
		"allOf": [{
			"type": "object",
			"properties": {
				"desktop": {
					"type": ["object", "null"],
					"minHeight": {
						"$ref": "#/definitions/minHeight"
					},
					"popup": {
						"$ref": "#/definitions/popup"
					}
				},
				"mobile": {
					"type": ["object", "null"],
					"minHeight": {
						"$ref": "#/definitions/minHeight"
					},
					"popup": {
						"$ref": "#/definitions/popup"
					}
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"PopupContainerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"horizontalAlignment": {
					"type": "string",
					"enum": ["left", "right", "center"],
					"default": "center",
					"description": ""
				},
				"verticalAlignment": {
					"type": "string",
					"enum": ["top", "bottom", "center"],
					"default": "top",
					"description": ""
				},
				"alignmentType": {
					"type": "string",
					"enum": ["nineGrid", "fullHeight", "fullWidth"],
					"default": "nineGrid",
					"description": ""
				},
				"horizontalOffset": {
					"type": "number",
					"default": 0,
					"description": ""
				},
				"verticalOffset": {
					"type": "number",
					"default": 0,
					"description": ""
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"MediaPlayerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"autoplay": {
					"type": "boolean",
					"default": false
				},
				"playerInteraction": {
					"type": "object",
					"description": "The way the player itself interacts with user input",
					"default": {},
					"properties": {
						"click": {
							"type": ["string", "null"],
							"enum": ["none", "play", "toggle"],
							"default": "toggle"
						},
						"rollIn": {
							"type": ["string", "null"],
							"enum": ["none", "play", "pause"],
							"default": "none"
						},
						"rollOut": {
							"type": ["string", "null"],
							"enum": ["none", "play", "pause"],
							"default": "none"
						},
						"allowReplay": {
							"type": "boolean",
							"default": true
						}
					}
				},
				"playerAudioInteraction": {
					"type": "object",
					"description": "The way the player itself interacts with user input",
					"default": {},
					"properties": {
						"rollIn": {
							"type": ["string", "null"],
							"enum": ["none", "mute", "unmute"],
							"default": "none"
						},
						"rollOut": {
							"type": ["string", "null"],
							"enum": ["none", "mute", "unmute"],
							"default": "none"
						}
					}
				},
				"animatePoster": {
					"type": ["string", "null"],
					"enum": ["none", "fade"],
					"default": "none"
				},
				"mute": {
					"type": "boolean",
					"description": "mute on load",
					"default": false
				},
				"disableAudio": {
					"type": "boolean",
					"description": "don't allow audio in player",
					"default": false
				},
				"loop": {
					"type": "boolean",
					"default": false
				}
			}
		}, {
			"$ref": "VideoBackgroundProperties"
		}]
	},
	"MediaControlsProperties": {
		"type": "object",
		"properties": {
			"showStoryboard": {
				"type": "string",
				"enum": ["videoAndTime", "time", "none"],
				"default": "videoAndTime",
				"description": "The options of displaying video preview when hovering on the progress bar"
			},
			"playerId": {
				"type": "string",
				"default": ""
			}
		}
	},
	"MediaOverlayControlsProperties": {
		"type": "object",
		"properties": {
			"playerId": {
				"type": "string",
				"default": ""
			}
		}
	},
	"LanguageSelectorProperties": {
		"type": "object",
		"properties": {
			"displayMode": {
				"type": "string",
				"default": "dropdown",
				"enum": ["horizontal", "dropdown"],
				"description": "the direction of the language labels"
			},
			"iconType": {
				"type": "string",
				"default": "circle",
				"enum": ["none", "circle", "square", "rounded"],
				"description": "language selector flag shape"
			},
			"itemFormat": {
				"type": "string",
				"default": "shortName",
				"enum": ["shortName", "fullName", "iconOnly"],
				"description": "language selector labels type"
			},
			"alignTabs": {
				"type": "string",
				"default": "center",
				"enum": ["left", "center", "right"],
				"description": "language selector tabs alignment"
			}
		}
	},
	"RichTextBoxProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"textAlignment": {
					"type": "string",
					"default": "left",
					"enum": ["left", "right", "center"],
					"description": "the text alignment",
					"maxLength": 100
				},
				"textPadding": {
					"type": "number",
					"default": 18,
					"minimum": 0,
					"maximum": 100,
					"description": "the value of the textPadding"
				},
				"toolbarPosition": {
					"type": "string",
					"default": "top",
					"enum": ["top", "bottom", "inline"],
					"description": "the location of the toolbar",
					"maxLength": 20
				},
				"placeholder": {
					"type": "string",
					"description": "the placeholder",
					"default": "",
					"maxLength": 4000
				},
				"defaultTextType": {
					"type": "string",
					"default": "placeholderText",
					"enum": ["none", "initialText", "placeholderText", "placeholderAndInitialText"],
					"description": "the type of the default text for the input",
					"maxLength": 100
				},
				"allowLinks": {
					"type": "boolean",
					"description": "Are links allowed"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"VideoPlayerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showVideoTitle": {
					"type": "boolean",
					"default": true
				},
				"autoplay": {
					"type": "boolean",
					"default": false,
					"description": "Autoplay video"
				},
				"loop": {
					"type": "boolean",
					"default": false,
					"description": "Play video on loop"
				},
				"share": {
					"type": "boolean",
					"default": true,
					"description": "Allow to share video"
				},
				"controlsVisibility": {
					"type": "string",
					"enum": ["hover", "never"],
					"default": "hover"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"ToggleSwitchProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"displayKnobIcons": {
					"type": "boolean"
				},
				"trackHeight": {
					"type": "number",
					"default": 100
				},
				"knobSize": {
					"type": "number",
					"default": 90
				},
				"alignment": {
					"type": "string",
					"enum": ["left", "right"],
					"default": "left"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"PaginationProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showFirstLastNavButtons": {
					"type": "boolean",
					"default": false
				},
				"showFirstPage": {
					"type": "boolean",
					"default": false
				},
				"showLastPage": {
					"type": "boolean",
					"default": false
				},
				"showInputModeTotalPages": {
					"type": "boolean",
					"default": true
				},
				"paginationMode": {
					"type": "string",
					"enum": ["pages", "input"],
					"default": "pages"
				},
				"navigationType": {
					"type": "string",
					"enum": ["arrows", "text"],
					"default": "arrows"
				},
				"paginationDirection": {
					"type": "string",
					"enum": ["ltr", "rtl"],
					"default": "ltr"
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"TagsProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "center"
				},
				"verticalSpacing": {
					"type": "number",
					"default": 20,
					"minimum": 0,
					"maximum": 50
				},
				"horizontalSpacing": {
					"type": "number",
					"default": 20,
					"minimum": 0,
					"maximum": 50
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"RatingsDisplayProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showReviewsCount": {
					"type": "boolean",
					"default": true
				},
				"showRating": {
					"type": "boolean",
					"default": true
				},
				"noReviewsMode": {
					"type": "string",
					"enum": ["nothing", "emptyIcons", "placeholderText"],
					"default": "emptyIcons"
				},
				"ratingPosition": {
					"type": "string",
					"enum": ["before", "after"],
					"default": "before"
				},
				"shapeSize": {
					"type": "number",
					"minimum": 15,
					"maximum": 100,
					"default": 24
				},
				"shapeSpacing": {
					"type": "number",
					"minimum": 1,
					"maximum": 50,
					"default": 5
				},
				"alignment": {
					"type": "string",
					"enum": ["left", "right", "center"],
					"default": "left"
				},
				"direction": {
					"type": "string",
					"enum": ["ltr", "rtl"],
					"default": "ltr"
				},
				"renderSeo": {
					"type": "boolean",
					"default": true
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	},
	"PopoverProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"position": {
					"type": "string",
					"enum": ["top", "bottom", "left", "right"],
					"default": "top"
				},
				"alignment": {
					"type": "string",
					"enum": ["start", "center", "end"],
					"default": "center"
				},
				"horizontalOffset": {
					"type": "number",
					"default": 0
				},
				"verticalOffset": {
					"type": "number",
					"default": 0
				}
			}
		}]
	},
	"SliderProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"trackSize": {
					"type": "number",
					"default": 25
				},
				"orientation": {
					"type": "string",
					"enum": ["horizontal", "vertical"],
					"default": "horizontal"
				},
				"thumbShape": {
					"type": "string",
					"enum": ["circle", "square", "rectangle", "bar"],
					"default": "circle"
				},
				"tickMarksShape": {
					"type": "string",
					"enum": ["none", "line", "dot"],
					"default": "line"
				},
				"tooltipVisibility": {
					"type": "string",
					"enum": ["none", "hover", "always"],
					"default": "hover"
				},
				"tooltipPosition": {
					"type": "string",
					"enum": ["normal", "across"],
					"default": "normal"
				},
				"tooltipPrefix": {
					"type": "string",
					"maxLength": 30
				},
				"tooltipSuffix": {
					"type": "string",
					"maxLength": 30
				},
				"tickMarksPosition": {
					"type": "string",
					"enum": ["normal", "middle", "across"],
					"default": "normal"
				},
				"dir": {
					"type": "string",
					"enum": ["ltr", "rtl"],
					"default": "ltr"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"TimePickerProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left"
				},
				"useAmPmFormat": {
					"type": "boolean",
					"default": false,
					"description": "Should the display format be 12 hours (or 24)"
				},
				"controller": {
					"type": "string",
					"enum": ["text", "stepper", "dropdown"],
					"default": "text",
					"description": "The display of the time picker"
				},
				"initialTime": {
					"type": "string",
					"enum": ["none", "current", "value", "placeholder"],
					"default": "current",
					"description": "What the time picker should display on load"
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"AddressInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"alignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "left"
				},
				"isIconVisible": {
					"type": "boolean",
					"default": false
				},
				"isDividerVisible": {
					"type": "boolean",
					"default": false
				}
			}
		}, {
			"$ref": "InputProperties"
		}]
	},
	"RatingsInputProperties": {
		"type": "object",
		"allOf": [{
			"properties": {
				"showTitle": {
					"type": "boolean",
					"default": true
				},
				"showLabels": {
					"type": "boolean",
					"default": true
				},
				"labelPosition": {
					"type": "string",
					"enum": ["top", "bottom", "side"],
					"default": "top"
				},
				"labelAlignment": {
					"type": "string",
					"enum": ["left", "center", "right"],
					"default": "center"
				},
				"shapeSize": {
					"type": "number",
					"minimum": 15,
					"maximum": 100,
					"default": 24
				},
				"shapeSpacing": {
					"type": "number",
					"minimum": 1,
					"maximum": 50,
					"default": 5
				},
				"direction": {
					"type": "string",
					"enum": ["ltr", "rtl"],
					"default": "ltr"
				},
				"required": {
					"type": "boolean",
					"default": false
				}
			}
		}, {
			"$ref": "DefaultProperties"
		}]
	}
}
