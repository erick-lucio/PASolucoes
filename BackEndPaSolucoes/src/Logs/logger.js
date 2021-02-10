// Firstly we'll need to import the fs library
const fs = require('fs')
const format = require('date-format')
const getDirName = require('path').dirname;
const mkdirp = require('mkdirp')

// next we'll want make our Logger object available
// to whatever file references it.
var Logger = exports.Logger = {}


function prepareMessage (msg, param = {}, prependStr = '') {
	let dateStr = format('yyyy-MM-dd hh:mm:ss', new Date())
	let message = `${dateStr}: ${msg}`

	if (prependStr !== '') {
		message = prependStr + message
	}

	if (Object.keys(param).length >= 1) {
		message += ` ${JSON.stringify(param)}`
	}

	message += '\n'

	return message
}

function writeFile(path, contents, cb) {
	mkdirp(getDirName(path), function (err) {
		if (err)
			return cb(err)

		fs.appendFile(path, contents, 'utf8', cb)
	})
}


Logger.log = function(msg, param = {}, prependStr = '') {
	const date = format('yyyy-MM-dd')
	const path = `./logs/${date}/log.txt`
	const message = prepareMessage(msg, param, prependStr)


	writeFile(path, message, () => {
		console.log('<log gravado>', message)
	})
}

Logger.info = function(msg, param = {}, prependStr = '') {
	const date = format('yyyy-MM-dd')
	const path = `./logs/${date}/info.txt`
	const message = prepareMessage(msg, param, prependStr)


	writeFile(path, message, () => {
		console.info('<log gravado>', message)
	})
}

Logger.debug = function(msg, param = {}, prependStr = '') {
	const date = format('yyyy-MM-dd')
	const path = `./logs/${date}/debug.txt`
	const message = prepareMessage(msg, param, prependStr)


	writeFile(path, message, () => {
		console.debug('<log gravado>', message)
	})
}

Logger.error = function(msg, param = {}, prependStr = '') {
	const date = format('yyyy-MM-dd')
	const path = `./logs/${date}/error.txt`
	const message = prepareMessage(msg, param, prependStr)


	writeFile(path, message, () => {
		console.error('<log gravado>', message)
	})
}

Logger.specificLog = function(fileName, msg, param = {}, prependStr = '') {
	const date = format('yyyy-MM-dd')
	const path = `./logs/${date}/${fileName}.txt`
	const message = prepareMessage(msg, param, prependStr)


	writeFile(path, message, () => {
		console.log('<log gravado>', message)
	})
}
