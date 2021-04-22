const dbConnection = require("../database/exportConnection")

module.exports = {
    async getAllAtendimentos(req,res){

    },
    async getAtendimentoById(req,res){

    },
    async updateAtendimento(req,res){

    },
    async createAtendimento(req,res){
        var sqlQuery = "INSERT INTO ATENDIMENTO() VALUES() "      
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
    async deleteAtendimento(req,res){

    }



}
