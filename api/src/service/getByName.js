const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getByName = async (name) => {
    
const promise = await axios (`https://api.thedogapi.com/v1/breeds/${name}?api_key=${API_KEY}`);

const {data, data:{id, temperament, weight, height, life_span, reference_image_id}} = promise

    if(!data.name){
        throw Error("Nombre no encontrado")
    }

    const byName = {
        id,
        reference_image_id,
        name,
        height,
        weight,
        temperament,
        life_span
    }

    return byName

}

module.exports = {getByName};

