const { Dog } = require("../db")
const service = require("../service/getByName")


const getDogByName = async (req, res) => {
    
    const {name} = req.query;
    
    try{
    const dogName = name.toLowerCase()

    const dogByName = await service.getByName(dogName)

    return res.status(200).json(dogByName)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {getDogByName};