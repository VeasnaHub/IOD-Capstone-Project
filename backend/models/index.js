'use strict'

const User = require('./user');
const Trip = require('./trip');
const Booking = require('./booking');

async function init() {
    await User.sync();
    await Trip.sync();
    await Booking.sync();
};

init();

User.hasMany(Trip, {
    foreignKey: 'driverId',
    allowNull: false
});
Trip.belongsTo(User, {
    foreignKey: 'driverId',
    allowNull: false
});

Trip.hasMany(Booking, {
    allowNull: false
});
Booking.belongsTo(Trip, {
    allowNull: false
});

User.hasMany(Booking, {
    foreignKey: 'passengerId',
    allowNull: false
});
Booking.belongsTo(User, {
    foreignKey: 'passengerId',
    allowNull: false
});

module.exports = {
    User,
    Trip,
    Booking
};
