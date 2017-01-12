const Handlebars = require('handlebars');
//	HandlebarsIntl = require('handlebars-intl');
const util = require('util');

const inspect = (obj => {
	return util.inspect(obj, {
		depth: null
	})
});
const moment = require('moment');


//HandlebarsIntl.registerWith(Handlebars);

const Messenger = require('./index');
const msg = new Messenger(require('./testmessages'), {});

//console.log(msg.render('DOORS_OPEN', 2.34, new Date()));
console.log(msg.render('MAPPING', true, 4, true));

var tpl = msg.compile('{{map "ONOFF" value}}');
console.log(tpl({
	value: true
}));

console.log(msg.render('TESTRENDER', {
	val: {
		val: 'Hello World'
	}
}))

var just = moment().add(34, 'h');
var tpl = msg.compile('{{ago value}}');
console.log(tpl({
	value: just
}));
