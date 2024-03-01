const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getByName = async (name) => {
    try{

    if(!name){
        throw new Error("Escribir un nombre")
    }

    const response = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`);

    //Con el response.data[0] esta extrayendo el primer array, osea primera raza, de los que coinciden con el nombre que paso
    const dog = response.data[0];

    const {id, temperament, weight, height, life_span, reference_image_id } = dog;

    const byName = { 
        id: id,
        image: reference_image_id,
        nombre: name,
        altura: height.metric,
        peso: weight.metric,
        temperamento: temperament,
        años: life_span
    }

    return byName;
    }
    catch(error){
        throw error;
    }
}

module.exports = {getByName};

