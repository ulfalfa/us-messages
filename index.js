const debug = require('DEBUG')('intl-messages');
const Handlebars = require('handlebars');
const util = require('util'),
	extend = require('extend');

const inspect = (obj => {
	return util.inspect(obj, {
		depth: null
	})
});






class Messenger {
	constructor(definition = {}, options = {}) {
		this._definition = definition;

		this._locales = require('./locales');
		this._options = options;
		this.locale(options.locale || 'de-DE');
		this.registerHelper(['hb_pluralize', 'hbDates', 'hbNumber', 'hbMapper']);

		//replace placeholder $x in templates and compile
		this._templates = {};
		let repl = /\$(\d*)/g;
		if (definition.hasOwnProperty('messages')) {
			Object.keys(definition.messages).forEach((key) => {
				debug('compiling message', key);
				let templateString = definition.messages[key];
				templateString = templateString.replace(repl, 'value.[$1]');
				this._templates[key] = Handlebars.compile(templateString, {
					locale: this._options.locale
				});
			});
		}
	}

	locale(locale = null) {
		if (locale) {
			if (this._locales.hasOwnProperty(locale)) {
				this._options.locale = locale;
				this.settings = extend(true, {}, this._definition, this._locales[locale]);
			} else {
				throw (new Error('Locale ' + locale + ' not supported'));
			}
		}
		return this._locale;
	}



	registerHelper(helperLibs) {
		helperLibs.forEach(lib => {
			let Helper = require('./lib/' + lib);
			Helper.registerWith(Handlebars, this.settings);
		});
	}

	render(txtId, ...data) {
		let template = this._templates[txtId];

		if (typeof template === 'undefined') {
			throw (new Error('template ' + txtId + ' not defined'));
		}
		return template({
			value: data
		});

	}

	compile(templateString) {
		return Handlebars.compile(templateString);
	}


}

module.exports = Messenger;