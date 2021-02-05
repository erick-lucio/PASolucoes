const express = require("express");
const Routes = express.Router()
const AtendimentoRoutes = express.Router();
const AtendimentoControler = require("../../controlers/atendimentos")
const AuthSecurity = require("../../Security/auth")
const defaultResponse = require('../../controlers/formatResponse')

AtendimentoRoutes.get("/atendimento/atendimentoAll",  
    AuthSecurity.verifyJWT,
    AtendimentoControler.getAllAtendimentos,
    defaultResponse.defaultResponse  
),
AtendimentoRoutes.post("/atendimento/atendimento",
    AuthSecurity.verifyJWT,
    AtendimentoControler.getAtendimentoById,
    defaultResponse.defaultResponse
)
AtendimentoRoutes.post("/atendimento/updateatendimento",
    AuthSecurity.verifyJWT,
    AtendimentoControler.updateAtendimento,
    defaultResponse.defaultResponse
)
AtendimentoRoutes.post("/atendimento/createatendimento",
    AuthSecurity.verifyJWT,
    AtendimentoControler.createAtendimento,
    defaultResponse.defaultResponse
)
AtendimentoRoutes.post("/atendimento/deleteatendimento",
    AuthSecurity.verifyJWT,
    AtendimentoControler.deleteAtendimento,
    defaultResponse.defaultResponse
)

module.exports = AtendimentoRoutes ;
