const axios = require("axios");
require ('dotenv').config();
const {API_KEY} = process.env;


const getDogs = async (req, res) => {
    //Llamo a toda la api y luego en el front mapeo para que aparezcan solo unas pocas cartas.
    try{
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

        const { data } = response;
        //mapeo para que solo aparezca el nombre, imagen y origin. Luego en el front voy a poner un icono de ¡ para los detalles donde aparecera el resto
        const dogs = data.map(dog => ({
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            temperament: dog.temperament,
            weight: dog.weight.metric,
            imageId: dog.reference_image_id
        }))

        res.status(200).json(dogs)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {getDogs};

