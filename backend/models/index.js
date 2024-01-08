'use strict';

const User = require('./user');
const Trip = require('./trip');
const Booking = require('./booking');

// Synchronize models with the database
async function init() {
  await User.sync();
  await Trip.sync();
  await Booking.sync();
}

// Call the initialization function
init();

// Define associations between models
User.hasMany(Trip, {
  foreignKey: { name: 'driverId', allowNull: false },
  onDelete: 'CASCADE',
});

Trip.belongsTo(User, {
  foreignKey: { name: 'driverId', allowNull: false },
  onDelete: 'CASCADE',
});

Trip.hasMany(Booking, {
  foreignKey: { name: 'tripId', allowNull: false },
  onDelete: 'CASCADE',
});

Booking.belongsTo(Trip, {
  foreignKey: { name: 'tripId', allowNull: false },
  onDelete: 'CASCADE',
});

User.hasMany(Booking, {
  foreignKey: { name: 'passengerId', allowNull: false },
  onDelete: 'CASCADE',
});

Booking.belongsTo(User, {
  foreignKey: { name: 'passengerId', allowNull: false },
  onDelete: 'CASCADE',
});

// Export the models
module.exports = {
  User,
  Trip,
  Booking,
};
