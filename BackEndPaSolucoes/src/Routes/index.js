const express = require("express");
const Routes = express.Router()
const userRoutes = require("./Users")
const todosRoutes = require("./Todos")
const clientesRoutes = require("./Clientes")
const atendimentosRoutes = require("./Atendimentos")
const emailRoutes = require("./Email")

Routes.use(userRoutes)
Routes.use(todosRoutes)
Routes.use(clientesRoutes)
Routes.use(atendimentosRoutes)
Routes.use(emailRoutes)

module.exports = Routes
