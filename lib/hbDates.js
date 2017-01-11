const moment = require('moment');
moment.locale('de-DE');

module.exports = {
	registerWith: function (hb, options) {
		if (!options.hasOwnProperty('dates')) {
			throw (new Error('no dates definition in options'));
		}


		hb.registerHelper('date', function (type, value) {
			let formatString = type;
			if (options.dates.hasOwnProperty(type)) {
				formatString = options.dates[type];
			}

			return moment(value).format(formatString);

		});
	}
};