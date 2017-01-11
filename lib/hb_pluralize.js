const util = require('util');
const inspect = (obj => {
	return util.inspect(obj, {
		depth: null
	})
});
module.exports = {
	registerWith: function (hb, options) {
		if (!options.hasOwnProperty('plurals')) {
			throw (new Error('no plurals in options'));
		}

		hb.registerHelper('pluralize', function (plural, value) {

			if (!options.plurals.hasOwnProperty(plural)) {
				throw (new Error('No plural definition for ' + plural));
			}
			console.log ()
			let intValue = parseInt(value).toString();
			let pluralDef = options.plurals[plural];
			let outputString;
			if (pluralDef.hasOwnProperty(intValue)) {
				outputString = pluralDef[intValue];

			} else {
				outputString = pluralDef['other'];
			}
			result = outputString.replace(/\#/, intValue);
			return result;

		});
	}
};