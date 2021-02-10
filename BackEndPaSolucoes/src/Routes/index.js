const express = require("express");
const Routes = express.Router()
const userRoutes = require("./users")
const todosRoutes = require("./todos")
const clientesRoutes = require("./clientes")
const atendimentosRoutes = require("./atendimentos")
const emailRoutes = require("./email")

// Routes.use((req, res, next) => {​​
//     Authenticate.verify(req, res, next)
// }​​)

Routes.use(userRoutes)
Routes.use(todosRoutes)
Routes.use(clientesRoutes)
Routes.use(atendimentosRoutes)
Routes.use(emailRoutes)

module.exports = Routes
