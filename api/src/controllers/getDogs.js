const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;
const {Dog, Temperament} = require ('../db')

const getDogsFromApi = async (req, res) => {
    //Llamo a toda la api y luego en el front mapeo para que aparezcan solo unas pocas cartas.
    try{
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

        const { data } = response;
        //mapeo para llamar los siguientes datos
            return data.map((dog) => {
            const temperament = dog.temperament?.split(' ,').map(t => t.trim());
            const heightmin = Number(dog.height.metric?.split(" - ")[0]);
            const heightmax = Number(dog.height.metric?.split(" - ")[1]);
            const weightmin = Number(dog.weight.metric?.split(" - ")[0]);
            const weightmax = Number(dog.weight.metric?.split(" - ")[1]);
            const agemin = Number(dog.life_span?.split(" ")[0]);
            const agemax = Number(dog.life_span?.split(" ")[2]);
            const imageId = dog.reference_image_id
            
            return ({
                id: dog.id,
                name: dog.name, 
                image: dog.image.url,
                temperament,
                heightmin,
                heightmax,
                weightmin,
                weightmax,
                agemin,
                agemax,
                imageId
            })
        })
    }
    catch(error){
        throw new Error (error.message)
    }
}

const getDogFromDB = async (req, res) => {
    try {
        const dogs = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })
        return (dogs)
    } 
    catch (error) {
        return ({error: error.message})
    }
}

const getAllsDogs = async (req, res) => {
    try {
    const apiDogs = await getDogsFromApi()
    const dbDogs = await getDogFromDB()
        const callAllDogs = [...apiDogs, ...dbDogs];

        res.status(200).json(callAllDogs)
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {getAllsDogs};