//const mysql  = require('mysql');
const mysql = require('mysql2');
const sshClient = require('ssh2');
const dbConfig = require('./dbConfig')
const connection = module.exports = function(){};

createDBConnection = function(){
    const mysqlConnection = mysql.createConnection({
        host:dbConfig.mySQLConfigDev.host,
        user:dbConfig.mySQLConfigDev.user,
        password:dbConfig.mySQLConfigDev.password,
        database:dbConfig.mySQLConfigDev.database,
        connectTimeout:dbConfig.mySQLConfigDev.timeout
    });

    return mysqlConnection
}

try {
    connection.invokeQuery = function(sqlQuery,params,data){
        const ssh = new sshClient()
    
        ssh.connect(dbConfig.sshConfig)
      
        ssh.on('ready',function() {
            ssh.forwardOut(
               dbConfig.localhost,
               dbConfig.mySQLConfigDev.timeout,
               dbConfig.localhost,
               dbConfig.mySQLConfigDev.port,
               function(err,stream){           
                   if (err){      
                        console.log(err)                   
                   }
                   dbConfig.mySQLConfigDev.stream = stream    
                   const db = mysql.createConnection(dbConfig.mySQLConfigDev)        
                   db.query(sqlQuery,params, function(err,rows){
                       if(rows){                   
                       data(rows)
                       } 
                       if(err){                  
                           console.log(err)
                       } 
                   })
               } 
            )
        })
    } 
} catch (error) {
    console.log(error)
}
