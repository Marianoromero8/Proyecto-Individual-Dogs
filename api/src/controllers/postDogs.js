const { Dog, Temperament } = require("../db")

const postDog = async (req, res) => {
    const {name, height, weight, life_span, temperament} = req.body;

    if(!name || !height || !weight || !life_span || !temperament){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{

        const [dog, created] = await Dog.findOrCreate({
            where:{nombre: name},
            defaults: {
                nombre: name,
                altura: height.metric,
                peso: weight.metric,
                años: life_span,
            }
        })

        for (const temperamentId of temperament){
            const temp = await Temperament.findByPk(temperamentId);
            if(temp){
                await dog.addTemperament(temp)
            }
        }

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