const express = require("express");
const Routes = express.Router()
const emailRoutes = express.Router();
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../controlers/formatResponse')
const emailController = require('../../controlers/email')

emailRoutes.post("/email/sendteste",
    emailController.sendEmail
)

module.exports = emailRoutes ;
