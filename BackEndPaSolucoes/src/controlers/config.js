const dbConnection = require("../database/exportConnection")
const SendEmail = require('../mailer/emailSender')

module.exports = {
    async config(req,res,next){

    },
    async EmailTeste(req,res,next){
        SendEmail()
        res.status(200).send({ok:"ok"})
    }



}
