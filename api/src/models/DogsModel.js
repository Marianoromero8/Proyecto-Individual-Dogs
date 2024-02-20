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
                        len:[4]
                    }
                },
                peso: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        len:[4]
                    }
                },
                años: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate:{
                        len:[2]
                    }
                }
            },
            { 
                timestamps: false,
                tableName: 'dogs', 
            }
    )
}
