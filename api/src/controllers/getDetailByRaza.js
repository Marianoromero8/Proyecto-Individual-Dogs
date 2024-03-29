const service = require("../service/getRazaById")

const getDetailByRaza = async (req, res) => {
    const { id } = req.params;
    try{
        
    const breed = await service.getRazaById(id)

    return res.status(200).json(breed)

    }
    catch(error){
        if(error.message) {
            return res.status(404).send("Character Not Found")
        }
        res.status(error.statusCode || 500).json(`error interno - ${error.message}`)
    }
}

module.exports = {getDetailByRaza};