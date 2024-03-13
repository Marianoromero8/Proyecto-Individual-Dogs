const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getRazaById = async (id) => {
    const breedForApi = await axios (`https://api.thedogapi.com/v1/images/${id}?api_key=${API_KEY}`);
    
    if(!breedForApi.data){
        throw Error ("Raza no encontrada")
    }

    const {data: {url, breeds}} = breedForApi;

    const {name, temperament, weight, height, life_span} = breeds[0]

    const byId = {
        id: breeds[0].id,
        image: url,
        name: name,
        heightmin: Number(height.metric?.split(" - ")[0]),
        heightmax: Number(height.metric?.split(" - ")[1]),
        weightmax: Number(weight.metric?.split(" - ")[0]),
        weightmax: Number(weight.metric?.split(" - ")[1]),
        temperament: temperament?.split(" ,").map(t => t.trim()),
        agemin: Number(life_span?.split(" ")[0]),
        agemax: Number(life_span?.split(" ")[2]),
    }

    return byId;
}

module.exports = {getRazaById}