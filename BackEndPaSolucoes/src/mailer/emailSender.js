const nodemailer = require('nodemailer'); 
const { join } = require('path');

function sendEmail(sentTo){
  var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: 'ericklucio.suv@gmail.com',
          pass: 'kqqxuhsfgdqwzgrm'
      }
  });
  console.log("Enviando Email para "+sentTo)
  const mailOptions = { // Define informações pertinentes ao E-mail que será enviado
    from: 'ericklucio.suv@gmail.com',
    to: sentTo,
    subject: 'Testando modulo de email',
    text: "Hoje e :" +new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})// temporario para teste
    /*attachments: [
        {
          filename: 'mailtrap.png',
          path: __dirname + '/mailtrap.png',
          cid: 'uniq-mailtrap.png' 
        }
      ]*/
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          if(response){
            var success = ""
            var rejected = ""
            var from = ""
            var to = ""

            success = response.accepted.join()
            rejected = response.rejected.join()
            from = response.envelope.from
            to = response.envelope.to.join()            
            var objTo =
                {
                    successList: success,
                    rejectedList: rejected,
                    from: from,
                    toList:to
                }
            
            console.log("Email enviado para "+toList)

          }          
      }
  });
  
}


module.exports = sendEmail

