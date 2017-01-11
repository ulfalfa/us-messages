module.exports = {
	messages: {
		"DOORS_OPEN": 'Es {{pluralize "IS_DOORS" $0}} in Zahlen {{number $0}} am {{shortDate $1}} offen',
		"MAPPING": 'true ist {{map "ONOFF" $0}} und 4 ist {{map "VALUES" $1}} und true ist {{map "true=>gruen|false=aus" $2}}'
	},
	plurals: {
		"IS_DOORS": {
			0: 'ist keine Tür',
			1: 'ist eine Tür',
			other: 'sind # Türen'
		},
		"ROOM": {
			0: 'keinen Raum',
			1: '# Raum',
			other: '# Räume'
		}
	},
	maps: {
		"ONOFF": [
			"true=>an",
			"false=>aus"
		],
		"VALUES": [
			"0..1=>weniger als ein",
			"1=>ein",
			"2=>ein Paar",
			"3..8=>eine Handvoll",
			"8..99=>ne Menge",
			"kenne ich nicht"
			]
	}
};