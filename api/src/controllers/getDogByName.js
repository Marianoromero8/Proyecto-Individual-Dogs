const service = require("../service/getByName")

const getDogByName = async (req, res) => {
    const { name } = req.query;

    try{
            
    if(!name){
        throw new Error("Put a breed to search")
    }
    
    const dogByName = await service.getByName(name)
    
    res.status(200).json(dogByName)
    
    }
    catch(error){
        res.status(400).json({error:"Something is wrong, check the name"})
    }

}

module.exports = {getDogByName};