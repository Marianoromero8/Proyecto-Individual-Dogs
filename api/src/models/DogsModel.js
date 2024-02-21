const { DataTypes } = require("sequelize");

module.exports = (conn) => {
    conn.define('dog', {
                id:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                imagen:{
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                nombre: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                altura: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min:10,
                        max: 200
                    }
                },
                peso: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min: 1,
                        max: 200
                    }
                },
                años: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate:{
                        min: 1,
                        max: 25
                    }
                }
            },
            { 
                timestamps: false,
                tableName: 'dogs', 
            }
    )
}
