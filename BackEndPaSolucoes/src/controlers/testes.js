const dbConnection = require("../database/exportConnection")

module.exports = {
    async testaAe(req,res,next){
        dbConnection.invokeQuery("SELECT * FROM teste WHERE nome = ? AND login = ?",[
            req.body.dob || "erick",
            req.body.account_number || "erick"
        ],(rows)=>{
            rows.length > 0?"":res.token = "" 
            var response = {                
                message:rows.length > 0?"Sucess" : "Nenhum usuario Encontrado",    
                objData:rows.length > 0?rows : 0          
            }        
            res.status(200).json(response)
            
                     
        });
    },


}
