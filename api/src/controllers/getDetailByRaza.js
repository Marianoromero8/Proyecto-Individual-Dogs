const { Dog } = require("../db");

const getDetailByRaza = async (req, res) => {
    const { id } = req.params;

    if(isNaN(Number(id))){
        return res.status(400).json({message: "Id no es un numero"})
    }

    try{
        
        const idRaza = await Dog.findByPk(id)
        
        if(!idRaza){
            return res.status(400).json({message: "No se encuentra la raza"})
        }

        res.status(200).json(idRaza);

    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {getDetailByRaza};