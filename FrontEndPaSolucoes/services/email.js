const baseUrl = require("./index")
const emailApi = baseUrl+"/email/"
const axios = require('axios');

module.exports = {
    async sendEmailTeste (sendTo){   
        return await axios({
            method: 'post',
            url: emailApi+"sendteste",
            data: {
                frontRequest:{
                    sendTo: sendTo
                }
            }
        }) 
    }
    
}


