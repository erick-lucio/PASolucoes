const dbConnection = require("../database/exportConnection")
const SendEmail = require('../mailer/emailSender')

module.exports = {
    async getUserByLoginAndPass(req,res,next){
        next.genToken = false
        const login = req.body.frontRequest?req.body.frontRequest.login :""
        const senha = req.body.frontRequest?req.body.frontRequest.senha :""
        let sqlQuery = "SELECT nome,login FROM Funcionarios WHERE login = ? AND senha = MD5(?) LIMIT 1"
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
        var sqlQuery = "SELECT nome,login FROM Funcionarios"      
        debugger
        dbConnection.invokeQuery(sqlQuery,[
        ],(rows)=>{
            var response = {                
                message:rows.length > 0 ? 'Sucess':"Nenhum usuario Encontrado",
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
