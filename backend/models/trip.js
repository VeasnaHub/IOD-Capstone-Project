const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Trip extends Model { }

Trip.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    departure: { type: DataTypes.STRING, allowNull: false, required: true },
    destination: { type: DataTypes.STRING, allowNull: false, required: true },
    serviceDay: { type: DataTypes.STRING, allowNull: false, required: true },
    departureTime: { type: DataTypes.TIME, allowNull: false, required: true },
    unitPrice: { type: DataTypes.DECIMAL, allowNull: false, required: true },
    availableSeats: { type: DataTypes.INTEGER, allowNull: false, required: true },
},
{
    sequelize: sequelizeInstance,
    modelName: 'trips',
    timestamps: true, 
    freezeTableName: true
}
)

module.exports = Trip;