require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const  DogsModel  = require('./models/DogsModel');
const TemperamentsModel = require('./models/TemperamentsModel')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, native: false, });

//  
DogsModel(sequelize);
TemperamentsModel(sequelize);

//Guardamos los modelos en constantes (contienen los datos)
const Dog = sequelize.models.dog;
const Temperament = sequelize.models.temperament;

//Relacionamos ambas tablas y creamos la intermedia ("dos_temperament") donde se relacionan las dos. varios : varios
Dog.belongsToMany(Temperament, {through:"dog_temperament"});
Temperament.belongsToMany(Dog, {through:"dog_temperament"});


module.exports = {
  Dog,
  Temperament, 
  conn: sequelize,     
};
