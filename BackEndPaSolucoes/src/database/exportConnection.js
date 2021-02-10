var path = require('path');
const DevDB = require("./ConnectionDev")
const ProdDB = require("./ConnectionProd")

if(process.env.NODE_ENV == "dev"){
    module.exports = DevDB
}else{
    module.exports = ProdDB
}

