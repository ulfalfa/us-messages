const debug = require('debug')('intl-messages.hbmapper');
const ValueMap = require('us-value-mapper');

module.exports = {
	registerWith: function (hb, options) {
		if (!options.hasOwnProperty('maps')) {
			throw (new Error('no maps in options'));
		}

		let maps = {};
		Object.keys(options.maps).forEach((key) => {
			debug('registering map', key);
			maps[key] = new ValueMap(options.maps[key]);
		});


		hb.registerHelper('map', function (map, value) {
			debug('Rendering', map, value);

			if (maps.hasOwnProperty(map)) {
				return maps[map].map(value);
			} else {
				let newMap = new ValueMap(map);
				return newMap.map(value);
			}

		});
	}
};