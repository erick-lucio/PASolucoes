const express = require("express");
const Routes = express.Router()
const emailRoutes = express.Router();
const AuthSecurity = require("../../Security/auth")
const defaultResponse = require('../../Controlers/formatResponse')
const emailController = require('../../Controlers/email')

emailRoutes.post("/email/sendteste",
    emailController.sendEmail
)

module.exports = emailRoutes ;
