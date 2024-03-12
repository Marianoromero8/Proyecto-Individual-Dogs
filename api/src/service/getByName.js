const axios = require("axios");
const { Dog, Temperament } = require("../db");
require ('dotenv').config();
const {API_KEY} = process.env;

const getByName = async (name) => {
    try{
       
    if(!name){
        throw new Error("Put a breed")
    }

    const dogFromApi = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`);

    const dogsArray = dogFromApi.data;

    if(dogsArray && dogsArray.length > 0){    
    const {name, temperament, weight, height, life_span, image, id, reference_image_id} = dogsArray[0]
    
    return [{
        id: id,
        name: name, 
        temperament: temperament, 
        weight: weight.metric, 
        height: height.metric, 
        ages: life_span, 
        image: image.url,
        imageId: reference_image_id 
    }]
    } else {

    const dogFromDB = await Dog.findAll({
        where: {name},
        include: {
            model: Temperament,
            through: 'dog_temperament'
        }
    })

    if(dogFromDB && dogFromDB > 0){
        return dogFromDB
    } else{
        throw new Error ("Something wrong!")
    }
}
    }
    catch(error){
        {error.message = "Dog doesnt exist"}
    }
}

module.exports = {getByName};

