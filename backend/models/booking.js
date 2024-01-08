const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

// Access Sequelize instance from the database connection module
const sequelizeInstance = dbConnect.Sequelize;

// Define the Booking model
class Booking extends Model {}

// Initialize the Booking model with its attributes and options
Booking.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    requestedSeat: { type: DataTypes.INTEGER, allowNull: false, required: true },
    status: { type: DataTypes.STRING, defaultValue: "Pending", allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'bookings', // Name of the model in the database
    timestamps: true,      // Include timestamps (createdAt, updatedAt) in the table
    freezeTableName: true   // Prevent Sequelize from pluralizing the table name
  }
);

// Export the Booking model
module.exports = Booking;
