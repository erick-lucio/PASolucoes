const express = require("express");
const Routes = express.Router()
const emailRoutes = express.Router();
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../Controlers/FormatResponse')
const emailController = require('../../Controlers/Email')

emailRoutes.post("/email/sendteste",
    emailController.sendEmail
)

module.exports = emailRoutes ;
