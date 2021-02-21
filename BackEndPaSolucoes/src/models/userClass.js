
module.exports = class User {
    nome
    login
    permissions = []
    


    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.dataCadastro = new Date();
    }
}