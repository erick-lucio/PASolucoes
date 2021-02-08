const express = require("express");
const Routes = express.Router()
const emailRoutes = express.Router();
const AuthSecurity = require("../../Security/auth")
const defaultResponse = require('../../controlers/formatResponse')
const emailController = require('../../controlers/email')

emailRoutes.post("/email/sendteste", 
    ()=>{
        console.log("passou nas rotar")
    },
    emailController.sendEmail
)

module.exports = emailRoutes ;
