const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (conn) => {
    conn.define('temperament', {
                id:{
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                },
                name:{
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                }
            },
            { 
                timestamps: false,
                tableName: 'temperaments' 
            }
        )
    }
