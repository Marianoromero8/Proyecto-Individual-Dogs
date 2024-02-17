const { Dog } = require("../db")

const getDogs = async (req, res) => {
    try{
        const dogs = await Dog.findAll()

        res.status(200).json(dogs)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = getDogs;