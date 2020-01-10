/* jshint esversion: 6 */
// Copyright (c) 2019 Seán D. Murray
// SEE MIT LICENSE FILE

const util = require('util');

const DEFAULT_TEMPLATE = '';

function _default(value) {
	if ((undefined === value) || (null === value)) {
		return DEFAULT_TEMPLATE;
	} else {
		return value;
	}
}

module.exports = class {

	constructor(template) {
			this.debug = template;
			this.info = template;
			this.warn = template;
			this.error = template;
	}

	set debug(template) {
		this._debug = _default(template);
	}

	set info(template) {
		this._info = _default(template);
	}

	set warn(template) {
		this._warn = _default(template);
	}

	set error(template) {
		this._error = _default(template);
	}

	outDebug(...msgs) {
		if (!process.env.NODEBUG) console.debug(util.format(this._debug, ...msgs));
	}

	outInfo(...msgs) {
		if (!process.env.NOINFO) console.info(util.format(this._info, ...msgs));
	}

	outWarn(...msgs) {
		if (!process.env.NOWARN) console.warn(util.format(this._warn, ...msgs));
	}

	outError(...msgs) {
		if (!process.env.NOERROR) console.error(util.format(this._error, ...msgs));
	}
}

