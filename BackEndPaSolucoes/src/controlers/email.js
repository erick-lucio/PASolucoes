const dbConnection = require("../Database/exportConnection")
const SendEmail = require('../Mailer/emailSender')

module.exports = {
    async config(req,res,next){

    },
    async sendEmail(req,res,next){
        SendEmail(req.body.frontRequest.sendTo)
        res.status(200).send({ok:"ok"})
    }



}
