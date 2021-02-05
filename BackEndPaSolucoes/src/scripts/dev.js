const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
const helmet = require("helmet");
const Routes = require('../Routes/index')

//var hoje = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
//console.log(hoje)

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const PORT =  3102;

server.use(Routes);

server.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
});