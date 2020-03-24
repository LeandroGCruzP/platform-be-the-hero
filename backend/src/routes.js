const express = require('express');

const OngController = require('./controllers/OngController');   
const IncidentController = require('./controllers/IncidentController');   
const ProfileController = require('./controllers/ProfileController');  
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router();

//o recurso do acceso é '/' e seu complemento por ex: '/users' 

/**
 * Metodos http
 * 
 * GET: Buscar/listar uma info do back-end
 * POST: Criar uma info no back-end
 * PUT: Alterar uma info no back-end
 * DELETE: Deletar uma info no back-end
 */ 

/**
 * Tipos de parametros
 * 
 * Query Params: Paramentros nomeados enviados na rota após "?" (Filtros, paginacao) 
 * Route Params: Parametrosutilizados para identificar recursos 
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index); 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//para que o index possa accesar esta rota
module.exports = routes;