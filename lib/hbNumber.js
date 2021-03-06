'use strict';
let numeral = require('numeral');


module.exports = {
  registerWith: function (hb, options) {
    try {
      numeral.register('locale', options.locale, options.numeral);
    }
    catch (e) {
    //ignore
    }
    numeral.locale(options.locale);
    if (!options.hasOwnProperty('numbers')) {
      throw (new Error('no numbers definition in options'));
    }

    hb.registerHelper('number', function (type, value) {
      let formatString = type;
      if (options.numbers.hasOwnProperty(type)) {
        formatString = options.numbers[type];
      }
      return numeral(value).format(formatString);

    });
  }
};
