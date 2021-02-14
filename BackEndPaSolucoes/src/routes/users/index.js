const express = require("express");
const userRoutes = express.Router();
const UserControler = require("../../controlers/users")
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../controlers/formatResponse')
const configController = require('../../controlers/config')

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
