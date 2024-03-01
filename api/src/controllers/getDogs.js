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

// {
//     "weight": {
//         "imperial": "6 - 13",
//         "metric": "3 - 6"
//     },
//     "height": {
//         "imperial": "9 - 11.5",
//         "metric": "23 - 29"
//     },
//     "id": 1,
//     "name": "Affenpinscher",
//     "bred_for": "Small rodent hunting, lapdog",
//     "breed_group": "Toy",
//     "life_span": "10 - 12 years",
//     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
//     "origin": "Germany, France",
//     "reference_image_id": "BJa4kxc4X",
//     "image": {
//         "id": "BJa4kxc4X",
//         "width": 1600,
//         "height": 1199,
//         "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
//     }
// },