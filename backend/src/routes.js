const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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

routes.post('/ongs', celebrate ({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index); 

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', celebrate ({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//para que o index possa accesar esta rota
module.exports = routes;