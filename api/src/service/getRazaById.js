const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getRazaById = async (id) => {

    const promise = await axios (`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`);
    
    const {data, data: {name, temperament, weight, height, life_span, reference_image_id}} = promise;

    if(!data.id){
        throw Error ("Raza no encontrada")
    }

    const byId = {
        id: id,
        image: reference_image_id,
        name: name,
        height: height.metric,
        weight: weight.metric,
        temperament: temperament,
        life_span: life_span,
    }

    return byId;
}

module.exports = {getRazaById}