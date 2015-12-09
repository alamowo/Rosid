'use strict'

let path  = require('path'),
    async = require('async')

/**
 * Parse and validate a route.
 * @public

 * @param {object} route - A single route configuration.
 * @returns {object} route - A single validated route configuration.
 */
const _route = function(route /*= {}*/, index /*= ''*/) {

	// Copy object to prevent changes by reverence
	route = Object.assign({}, route)

	// Check if each route has a path and a handler
	if (route.path==null)    new Error(`Missing path property in route ${ index }`)
	if (route.handler==null) new Error(`Missing handler property in route ${ index }`)

	// Check the property values
	if (route.path.substr(0, 1)!=='/')       new Error(`Path in route ${ index } must be absolute`)
	if (typeof route.handler === 'function') new Error(`Handler in route ${ index } is not a function`)

	// Provide a fallback for the opts property
	if (route.opts==null) route.opts = {}

	return route

}

/**
 * Parse and validate a path.
 * @public
 * @param {string} path - Path to a folder or file.
 * @returns {array} path - Validated and absolute path to a folder or file.
 */
const _path = function(filePath /*= ''*/) {

	// Make filePath absolute
	filePath = path.resolve(process.cwd(), filePath)

	return filePath

}

/**
 * Parse and validate options.
 * @public
 * @param {object} opts - Additional optional options.
 * @returns {object} opts - Validated additional optional options.
 */
const _opts = function(opts /*= {}*/) {

	// Copy object to prevent changes by reverence
	opts = Object.assign({}, opts)

	return opts

}

/**
 * Parse and validate callbacks.
 * @public
 * @param {function} Next - A callback that handles a response.
 * @returns {function} Next - A validated callback that handles a response.
 */
const _next = function(next) {

	// Ensure that next is a function
	if (typeof next !== 'function') next = () => {}

	return next

}

/**
 * @public
 */
module.exports = {
	route : _route,
	path  : _path,
	opts  : _opts,
	next  : _next
}