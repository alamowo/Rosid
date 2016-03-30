'use strict'

let url = require('url')

/**
 * Redirect to the main page when no file specified in the URL.
 * @public
 * @param {string} srcPath - Path to the source folder.
 */
module.exports = function(srcPath) {

	return (req, res, next) => {

		// Parse the URL
		let _url = url.parse(req.url)

		// Get the last char of the requested URL pathname
		let lastChar = _url.pathname.substr(-1)

		// Only continue when requested URL is a folder
		if (lastChar!=='/') {
			next()
			return false
		}

		res.statusCode = 302
		res.setHeader('Location', `${ _url.pathname }index.html`)
		res.setHeader('Content-Length', '0')
		res.end()

		return true

	}

}