const mysql = require('mysql2');
const dbConfig = require('./dbConfig')
const connection = module.exports = function(){};

createDBConnection = function(){
    const mysqlConnection = mysql.createConnection({
        host:dbConfig.mySQLConfig.host,
        user:dbConfig.mySQLConfig.user,
        password:dbConfig.mySQLConfig.password,
        database:dbConfig.mySQLConfig.database,
        connectTimeout:dbConfig.mySQLConfig.timeout
    });

    return mysqlConnection
}

connection.invokeQuery = function(sqlQuery,data){
    dbConfig.localhost,
    dbConfig.mySQLConfig.timeout,
    dbConfig.localhost,
    dbConfig.mySQLConfig.port,      
        dbConfig.mySQLConfig.stream = stream
        const db = mysql.createConnection(dbConfig.mySQLConfig)        
        db.query(sqlQuery, function(err,rows){
            if(rows){                   
            data(rows)
            } 
            if(err){                  
                console.log(err)
                handleMySQLError(err)
            } 
        })
           
        
   
}