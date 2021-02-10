const Auth = require('../Security/Auth')

module.exports = {
    async defaultResponse(req,res,next){
        if(next.tokenMessage || next.status ){
            res.status(next.status).send({
                message:next.tokenMessage
            })
        }else{
            if(next.genToken = true){
                res.status(200).send({
                    message:next.response.message,
                    objData:next.response.objData,
                    token:next.token
                })
            }else{
                res.status(200).send({
                    message:next.response.message,
                    objData:next.response.objData                
                })
            }
        }


    } 
}