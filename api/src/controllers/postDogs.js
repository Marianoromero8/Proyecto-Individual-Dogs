const { Dog, Temperament } = require("../db")

const postDog = async (req, res) => {
    const {name, height, weight, life_span, temperament} = req.body;

    if(!name || !height || !weight || !life_span || !temperament){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{

        const [temperamentNewDog] = await Temperament.findOrCreate({
            where:{name: temperament}
        })

        const [dog, created] = await Dog.findOrCreate({
            where:{nombre: name},
            defaults: {
                nombre: name,
                altura: height.metric,
                peso: weight.metric,
                años: life_span,
                temperamentId: temperamentNewDog.id
            },
            
        })

        if(created){
            res.status(201).json(dog)
        } else{
            res.status(400).json({error: "Perro ya existe"})
        }

    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {postDog};