const { DataTypes } = require("sequelize");

module.exports = (conn) => {
    conn.define('dog', {
                id:{
                    type: DataTypes.UUID,
                    primaryKey: true,
                    defaultValue: DataTypes.UUIDV4
                },
                image:{
                    type: DataTypes.STRING,
                    defaultValue: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmalaquitas.uy%2Fproducto%2Fperro-de-incognito%2F&psig=AOvVaw0fmDItqTU9diCxhDjQgYPT&ust=1710190544631000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjTv7XK6oQDFQAAAAAdAAAAABAE",
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
