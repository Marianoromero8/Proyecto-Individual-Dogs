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
                heightmin: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min:10,
                        max: 200
                    }
                },
                heightmax: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min:10,
                        max: 200
                    }
                },
                weightmin: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min: 1,
                        max: 200
                    }
                },
                weightmax: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        min: 1,
                        max: 200
                    }
                },
                agemin: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate:{
                        min: 1,
                        max: 25
                    }
                },
                agemax: {
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
