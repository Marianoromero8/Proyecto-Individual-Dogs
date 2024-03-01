const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getRazaById = async (id) => {

    const promise = await axios (`https://api.thedogapi.com/v1/images/${id}?api_key=${API_KEY}`);
    
    if(!promise.data){
        throw Error ("Raza no encontrada")
    }

    const {data: {url, breeds}} = promise;

    const {name, temperament, weight, height, life_span} = breeds[0]

    const byId = {
        id: breeds[0].id,
        image: url,
        name: name,
        height: height.metric,
        weight: weight.metric,
        temperament: temperament,
        life_span: life_span,
    }

    return byId;
}

module.exports = {getRazaById}