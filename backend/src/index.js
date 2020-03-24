//aqui esta importando o modulo chamado express para a variavel express
const express = require('express');
const cors = require('cors'); 
//importando a rota routes
const routes = require('./routes'); 
//variavel que almazena a aplicacao
const app = express();

app.use(cors());
// para recibir el json de insomnia
app.use(express.json());
//para usar o routes importado mais acima
app.use(routes);

//rota para ouvir(procura) de aplicaco no navegador ex: localhost:3333
app.listen(3333);
