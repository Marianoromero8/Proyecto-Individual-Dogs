const axios = require("axios");
const { Temperament } = require("../db");
require ('dotenv').config();
const {API_KEY} = process.env;


const getTemperament = async (req, res) => {
    try{
        
    const response = await axios (`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    
    const {data} = response;
    
    //                                                 si hay temperamento   lo separo por las comas y luego mapeo uno por uno sin espacios.
    const dogTemperament = data.flatMap(temp => temp.temperament ? temp.temperament.split(',').map(t => t.trim() ): []) // Use el trim porque me aparecian un par de temperamentos con espacio entre la comilla y la primer letra y se repetian
    
    //...new Set(), hace que tenga las propiedades de arriba sin repetir entonces llamo a todos los temperamentos sin repetirlos 
    // new porque es un constructor y (...) para crear una copia de dogTemperament eliminando los repetidos.
    const filterTemperament = [...new Set(dogTemperament)]
    
    const temperamentsOrders = filterTemperament.sort() // Llamos los temperamentos ordenados en orden alfabetico
    
    //mapeo los temperamentos para que busque los temps, que obviamente no los va a encontrar en la primera entonces crea todos los temperamentos en el modelo Temperament
    const tempApiToDB = temperamentsOrders.map((temp) => {
        Temperament.findOrCreate({
            where: {name: temp}
        }) 
        return temp
    })

    return (tempApiToDB)
    }
    catch(error){
    return ({error: error.message})
    }
}

const getTemperamentFromDB = async (req, res) => {
    await getTemperament()
    try{
        const temperaments = await Temperament.findAll()
        res.status(200).json(temperaments)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}



module.exports = {getTemperamentFromDB};