//const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    /********************** LIST **********************/
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    }, 
    /********************** END LIST **********************/

    /********************** CREATE **********************/
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        //funcao de crypto para poder criar um id para as ongs do formato hexadecimal
        const id = generateUniqueId();
        //aqui se conecta com a base de datos
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
    /********************** END CREATE **********************/
};