const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

// Access Sequelize instance from the database connection module
const sequelizeInstance = dbConnect.Sequelize;

// Define the User model
class User extends Model {}

// Initialize the User model with its attributes and options
User.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATE, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true, unique: true },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
    baseLocation: { type: DataTypes.STRING },
    profileSummary: { type: DataTypes.STRING },
    profilePicture: { type: DataTypes.STRING },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'users',        // Name of the model in the database
    timestamps: true,          // Include timestamps (createdAt, updatedAt) in the table
    freezeTableName: true       // Prevent Sequelize from pluralizing the table name
  }
);

// Export the User model
module.exports = User;
