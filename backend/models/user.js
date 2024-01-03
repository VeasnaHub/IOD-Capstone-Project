const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

User.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATE, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true, unique: true },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
    baseLocation: { type: DataTypes.STRING },
    profileSummary: { type: DataTypes.STRING },
    profilePicture: { type: DataTypes.STRING }
},
{
    sequelize: sequelizeInstance,
    modelName: 'users',
    timestamps: true, 
    freezeTableName: true
}
)

module.exports = User;