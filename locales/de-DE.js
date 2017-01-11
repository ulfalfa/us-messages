module.exports = {
	locale: 'de-DE',
	numeral: {
		delimiters: {
			thousands: '.',
			decimal: ','
		},
		abbreviations: {
			thousand: 'k',
			million: 'm',
			billion: 'b',
			trillion: 't'
		},
		ordinal: function (number) {
			return '.';
		},
		currency: {
			symbol: '€'
		}
	},
	messages: {},
	dates: {
		"default": "DD.MM. HH:mm",
		"short": "DD.MM. HH:mm",
		"long": "DD.MM.YYYY HH:mm:ss",
		"time": "HH:mm",
		"date": "DD.MM.YY",
		"dateShort": "DD.MM.",
		"timestamp": "HH:mm:ss",
		"weekday": "dddd",
	},
	numbers: {
		"default": "0.00"
	},
	maps: {
		"boolean": "true=>wahr|false=>falsch"
	}
};