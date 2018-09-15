export default {
	"ConnectionList": {
		"type": "object",
		"properties": {
			"items": {
				"type": "array",
				"items": {
					"type": "object",
					"anyOf": [{
						"$ref": "ConnectionItem"
					}, {
						"$ref": "WixCodeConnectionItem"
					}]
				}
			}
		}
	},
	"ConnectionItem": {
		"type": "object",
		"allOf": [{
			"type": "object",
			"properties": {
				"controllerId": {
					"type": "string"
				},
				"isPrimary": {
					"type": "boolean"
				},
				"config": {
					"type": "string",
					"maxLength": 2000,
					"pseudoType": ["stringifyObject"]
				},
				"required": ["controllerId"]
			}
		}, {
			"$ref": "WixCodeConnectionItem"
		}]
	},
	"WixCodeConnectionItem": {
		"type": "object",
		"properties": {
			"role": {
				"type": "string"
			},
			"required": ["role"]
		}
	}
}
