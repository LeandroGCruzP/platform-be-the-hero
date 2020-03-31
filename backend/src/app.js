//aqui esta importando o modulo chamado express para a variavel express
const express = require('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
//importando a rota routes
const routes = require('./routes'); 
//variavel que almazena a aplicacao
const app = express();

app.use(cors());
// para recibir el json de insomnia
app.use(express.json());
//para usar o routes importado mais acima
app.use(routes);
//para usar o validador de error e nao cair no erro 500
app.use(errors());

module.exports = app;