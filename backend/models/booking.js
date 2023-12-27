const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Booking extends Model { }

Booking.init({
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    requestedSeat: { type: DataTypes.INTEGER, allowNull: false, required: true },
    status: { type: DataTypes.STRING, defaultValue: "Pending", allowNull: false, required: true }
},
{
    sequelize: sequelizeInstance,
    modelName: 'bookings',
    timestamps: true, 
    freezeTableName: true
}
)

module.exports = Booking;