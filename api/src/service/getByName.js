const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;

const getByName = async (name) => {
    try{
       
    if(!name){
        throw new Error("Escribir un nombre")
    }

    const promise = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`);

    const dogsArray = promise.data;

    if(dogsArray.length > 0){    
    const {name, temperament, weight, height, life_span, image, id} = dogsArray[0]
    

    return [{
        id: id,
        name: name, 
        temperament: temperament, 
        weight: weight.metric, 
        height: height.metric, 
        ages: life_span, 
        image: image.url 
    }]
    }
    }
    catch(error){
        throw error;
    }
}

module.exports = {getByName};

