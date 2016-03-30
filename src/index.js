'use strict'

let compile = require('./compile')
let serve   = require('./serve')

/**
 * Returns an object of functions.
 * Those functions are public and accessible when importing the module.
 * @public
 * @param {Array} routes - Array of route configurations.
 * @returns {object}
 */
module.exports = function(routes) {

	return {
		compile : compile.bind(null, routes),
		serve   : serve.bind(null, routes)
	}

}