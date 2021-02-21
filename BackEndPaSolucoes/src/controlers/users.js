const dbConnection = require("../database/exportConnection")
const SendEmail = require('../mailer/emailSender')

module.exports = {
    async getUserByLoginAndPass(req,res,next){
        next.genToken = false
        const login = req.body.frontRequest?req.body.frontRequest.login :""
        const senha = req.body.frontRequest?req.body.frontRequest.senha :""
        let sqlQuery = "SELECT * FROM funcionarios WHERE login = ? AND senha = MD5(?) LIMIT 1"
        dbConnection.invokeQuery(sqlQuery,[
            login,
            senha
        ],(rows)=>{
            rows.length > 0?"":res.token = "" 
            var response = {                
                message:rows.length > 0?"Sucess" : "Nenhum usuario Encontrado",    
                objData:rows.length > 0?rows : 0          
            }
            next.response = response
            rows.length > 0?next.genToken = true:next.genToken = false
            next()   
        });

    },
    async getAllUsers(req,res,next){
        if (next.tokenMessage || next.status ){
            
        }
        var sqlQuery = "SELECT id,login FROM funcionarios"
        connection.query("SELECT * FROM bank_accounts WHERE dob = ? AND bank_account = ?",[
            req.body.dob,
            req.body.account_number
        ],function(error, results){});
           
        dbConnection.invokeQuery(sqlQuery,(rows)=>{
            var response = {                
                message:rows.length > 0 ? 'Usuarios':"Nenhum usuario Encontrado",
                objData:rows.length > 0 ? rows:0
            }
            next.response = response
            next()
        })
    },
    async updateUserById(req,res,next){
        var response = {                
            message:"Nenhum usuario Encontrado",
            objData:0
        }
        next.response = response        
        next()
    },
    async createUser(req,res){

    },
    async deleteUser(req,res){

    }



}
