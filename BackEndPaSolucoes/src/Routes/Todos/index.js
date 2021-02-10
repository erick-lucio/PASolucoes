const express = require("express");
const Routes = express.Router()
const todosRoutes = express.Router();
const TodosControler = require("../../Controlers/Todos")
const AuthSecurity = require("../../Security/Auth")
const defaultResponse = require('../../Controlers/FormatResponse')

todosRoutes.get("/todos/todosAll",  
    AuthSecurity.verifyJWT,
    TodosControler.getAllTodos,
    defaultResponse.defaultResponse 
),
todosRoutes.post("/todos/todo",
    AuthSecurity.verifyJWT,
    TodosControler.getTodoById,
    defaultResponse.defaultResponse
)
todosRoutes.post("/todos/updatetodo",
    AuthSecurity.verifyJWT,
    TodosControler.updateTodoById,
    defaultResponse.defaultResponse
)
todosRoutes.post("/todos/createtodo",
    AuthSecurity.verifyJWT,
    TodosControler.createTodo,
    defaultResponse.defaultResponse
)
todosRoutes.post("/todos/deletetodo",
    AuthSecurity.verifyJWT,
    TodosControler.deleteTodoById,
    defaultResponse.defaultResponse
)

module.exports = todosRoutes ;
