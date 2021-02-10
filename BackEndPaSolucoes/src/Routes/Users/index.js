const express = require("express");
const Routes = express.Router()
const userRoutes = express.Router();
const UserControler = require("../../Controlers/Users")
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../Controlers/FormatResponse')
const configController = require('../../Controlers/Config')

userRoutes.get("/users/usersAll",  
    AuthSecurity.verifyJWT,
    UserControler.getAllUsers,
    defaultResponse.defaultResponse
),
userRoutes.get("/users/user",
    UserControler.getUserByLoginAndPass,
    AuthSecurity.createJWT,
    defaultResponse.defaultResponse
)
userRoutes.post("/users/updateuser",
    AuthSecurity.verifyJWT,
    UserControler.updateUserById,
    defaultResponse.defaultResponse
)
userRoutes.post("/users/createuser",
    AuthSecurity.verifyJWT,
    UserControler.createUser,
    defaultResponse.defaultResponse
)
userRoutes.post("/users/deleteuser",
    AuthSecurity.verifyJWT,
    UserControler.deleteUser,
    defaultResponse.defaultResponse
)

module.exports = userRoutes ;
