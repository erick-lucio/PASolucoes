const express = require("express");
const Routes = express.Router()
const clientesRoutes = express.Router();
const ClientesControler = require("../../controlers/clientes")
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../controlers/formatResponse')

clientesRoutes.get("/clientes/clientesAll",  
    AuthSecurity.verifyJWT,
    ClientesControler.getAllClientes ,
    defaultResponse.defaultResponse
),
clientesRoutes.post("/clientes/cliente",
    AuthSecurity.verifyJWT,
    ClientesControler.getClienteById,
    defaultResponse.defaultResponse
)
clientesRoutes.post("/clientes/updatecliente",
    AuthSecurity.verifyJWT,
    ClientesControler.updateCliente,
    defaultResponse.defaultResponse
)
clientesRoutes.post("/clientes/createcliente",
    AuthSecurity.verifyJWT,
    ClientesControler.createCliente,
    defaultResponse.defaultResponse
)
clientesRoutes.post("/clientes/deletecliente",
    AuthSecurity.verifyJWT,
    ClientesControler.deleteCliente,
    defaultResponse.defaultResponse
)

module.exports = clientesRoutes ;
