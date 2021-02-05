const nodemailer = require('nodemailer'); 
const { join } = require('path');

function sendEmail(obj){
  var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: 'ericklucio.suv@gmail.com',
          pass: 'kqqxuhsfgdqwzgrm'
      }
  });
  
  const mailOptions = { // Define informações pertinentes ao E-mail que será enviado
    from: 'ericklucio.suv@gmail.com',
    to: 'ericklucio-suv@hotmail.com',
    subject: 'TesteApp',
    text: new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})// temporario para teste
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
            console.log(
                {
                    successList: success,
                    rejectedList: rejected,
                    from: from,
                    toList:to
                }
            )

          }          
      }
  });
  
}


module.exports = sendEmail

