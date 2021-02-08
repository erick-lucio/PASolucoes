const localhost = process.env.NODE_ENV == "prod"? "http://165.22.45.215:3102":"http://localhost:3102"

module.exports = localhost