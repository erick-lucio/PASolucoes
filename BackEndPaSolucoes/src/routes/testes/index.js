const express = require("express");
const testeRoutes = express.Router();
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../controlers/formatResponse')
const testeController = require("../../controlers/testes")


testeRoutes.get("/teste",
    testeController.testaAe
)

module.exports = testeRoutes ;
