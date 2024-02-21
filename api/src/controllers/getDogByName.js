const { Dog } = require("../db")
const service = require("../service/getByName")


const getDogByName = async (req, res) => {
    const { name } = req.params;

    try{
    // const breedName = name.chartAt(0).toUpperCase();

    if(!name){
        return new Error("Falta un nombre para buscar")
    }
    
    const dogByName = await service.getByName(name)
    
    res.status(200).json(dogByName)
    
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {getDogByName};