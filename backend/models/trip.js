const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

// Access Sequelize instance from the database connection module
const sequelizeInstance = dbConnect.Sequelize;

// Define the Trip model
class Trip extends Model {}

// Initialize the Trip model with its attributes and options
Trip.init(
  {
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
    modelName: 'trips',       // Name of the model in the database
    timestamps: true,         // Include timestamps (createdAt, updatedAt) in the table
    freezeTableName: true     // Prevent Sequelize from pluralizing the table name
  }
);

// Export the Trip model
module.exports = Trip;
