export default {
	"MobileHints": {
		"type": "object",
		"properties": {
			"author": {
				"enum": ["studio", "duplicate"],
				"description": "Data source"
			},
			"hidden": {
				"type": "boolean",
				"description": "Should hide component on mobile"
			},
			"offsetX": {
				"type": "number",
				"description": "Horizontal distance from the corner of the previous sibling"
			},
			"offsetY": {
				"type": "number",
				"description": "Vertical distance from the corner of the previous sibling"
			},
			"offsetOrigin": {
				"enum": ["leftTop", "rightTop", "leftBottom"],
				"description": "The corner of the previous sibling that the offsets are applied to"
			},
			"originalCompId": {
				"type": "string",
				"description": "Id of source component"
			},
			"recommendedScale": {
				"type": "number",
				"description": "Recommended component scale on mobile"
			},
			"recommendedWidth": {
				"type": "number",
				"description": "Recommended component width on mobile"
			},
			"recommendedHeight": {
				"type": "number",
				"description": "Recommended component height on mobile"
			},
			"orderIndex": {
				"type": "number",
				"description": "Recommended index of component in parent container"
			}
		}
	}
}
