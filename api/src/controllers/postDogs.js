const { Dog, Temperament } = require("../db")

const postDog = async (req, res) => {
    const {name, image, temperament, heightmin, heightmax, weightmin, weightmax, agemin, agemax} = req.body;

    if(!name || !temperament || !heightmin || !heightmax || !weightmin || !weightmax || !agemin || !agemax){
        return res.status(401).json({message: "Faltan datos"})
    }

    try{

        const [dog, created] = await Dog.findOrCreate({
            where:{name: name},
            defaults: {
                name,
                image,
                heightmin,
                heightmax,
                weightmin,
                weightmax,
                agemin,
                agemax
            }
        })
        console.log(temperament)

        for(const t of temperament){
            const temp = await Temperament.findOne({
                where: {
                    name: t
                }
            })
            if(temp){
                await dog.addTemperament(temp)
            }
        }
        // temperament.forEach(async t => {    
        //     const temp = await Temperament.findOne({where: {name: t}});
        //     if(temp){
        //         await dog.addTemperament(temp)
        //     }
        // })

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