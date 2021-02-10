const express = require("express");
const Routes = express.Router()
const userRoutes = require("./Users/Index")
const todosRoutes = require("./Todos/Index")
const clientesRoutes = require("./Clientes/Index")
const atendimentosRoutes = require("./Atendimentos/Index")
const emailRoutes = require("./Email/Index")

// Routes.use((req, res, next) => {​​
//     Authenticate.verify(req, res, next)
// }​​)

Routes.use(userRoutes)
Routes.use(todosRoutes)
Routes.use(clientesRoutes)
Routes.use(atendimentosRoutes)
Routes.use(emailRoutes)

module.exports = Routes
