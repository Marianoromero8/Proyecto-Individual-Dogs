const { Dog, Temperament } = require("../db")

const postDog = async (req, res) => {
    const {name, height, weight, life_span, image, temperament} = req.body;

    if(!name || !height || !weight || !life_span || !temperament || !image){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{

        const [dog, created] = await Dog.findOrCreate({
            where:{name: name},
            defaults: {
                name: name,
                height: height.metric,
                weight: weight.metric,
                image: image.url,
                age: life_span,
                temperament: temperament
            }
        })

        
        
        const temperamentDB = await Temperament.findAll({
            where: {name: temperament}
        })

        dog.addTemperament(temperamentDB)

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