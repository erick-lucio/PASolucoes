module.exports = {
    
    localhost:'127.0.0.1',

    mySQLConfig: {
        host : '127.0.0.1',
        port: 3306,
        user : 'app',
        password : 'aPpPassWd43U76H7yH76H20',
        database : 'PaSolucoes',
        timeout : 10000
    },
    mySQLConfigDev: {
        host : '127.0.0.1',
        port: 3306,
        user : 'app',
        password : 'aPpPassWd43U76H7yH76H20',
        database : 'PaSolucoesDev',
        timeout : 10000
    },
    sshConfig : {
        host: '134.122.22.83',
        port: 22,
        username: 'app',
        password: 'aPpPassWd43U76H7yH76H20'
        //process.env.variavel
    }


}