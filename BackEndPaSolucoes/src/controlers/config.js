const dbConnection = require("../Database/exportConnection")
const SendEmail = require('../Mailer/emailSender')

module.exports = {
    async config(req,res,next){

    },
    async EmailTeste(req,res,next){
        SendEmail()
        res.status(200).send({ok:"ok"})
    }



}
