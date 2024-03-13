const { Dog, Temperament } = require("../db")

const postDog = async (req, res) => {
    const {name, height, weight, life_span, image, temperament} = req.body;

    if(!name || !height || !weight || !life_span ){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{

        const [dog, created] = await Dog.findOrCreate({
            where:{name: name},
            defaults: {
                name: name,
                image: image.url,
                temperament: temperament.split(" ,").map(t => t.trim()),
                heightmin: Number(height?.metric.split(" - ")[0]),
                heightmax: Number(height?.metric.split(" - ")[1]),
                weightmin: Number(weight?.metric.split(" - ")[0]),
                weightmax: Number(weight?.metric.split(" - ")[1]),
                agemin: Number(life_span?.split(" ")[0]),
                agemax: Number(life_span?.split(" ")[2]),
            }
        })
        
        temperament.forEach(async t => {    
            const temp = await Temperament.findOne({where: {name: t}});
            if(temp){
                await dog.addTemperament(temp)
            }
        })

        if(created){
            res.status(201).json(dog)
        } else{
            res.status(400).json({error: "Perro ya existe"})
        }

    }
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

module.exports = {postDog};