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
    foreignKey: 'driverId'
});
Trip.belongsTo(User);

module.exports = {
    User,
    Trip,
    Booking
};
