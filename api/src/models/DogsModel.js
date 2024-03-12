const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (conn) => {
    conn.define('dog', {
                id:{
                    type: DataTypes.UUID,
                    primaryKey: true,
                    defaultValue: UUIDV4
                },
                image:{
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                name: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                height: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min:10,
                        max: 200
                    }
                },
                weight: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min: 1,
                        max: 200
                    }
                },
                age: {
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
