const dbConnection = require("../Database/ExportConnection")
const SendEmail = require('../Mailer/EmailSender')

module.exports = {
    async config(req,res,next){

    },
    async EmailTeste(req,res,next){
        SendEmail()
        res.status(200).send({ok:"ok"})
    }



}
