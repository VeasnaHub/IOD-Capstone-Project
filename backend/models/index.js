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
    foreignKey: {name: 'driverId', allowNull: false},
    onDelete: 'CASCADE'}
);

Trip.belongsTo(User, {
    foreignKey: { name: 'driverId', allowNull: false},
    onDelete: 'CASCADE'}
);

Trip.hasMany(Booking, {
    foreignKey: { name: 'tripId', allowNull: false},
    onDelete: 'CASCADE'}
);

Booking.belongsTo(Trip, {
    foreignKey: { name: 'tripId', allowNull: false},
    onDelete: 'CASCADE'}
);

User.hasMany(Booking, {
    foreignKey: { name: 'passengerId', allowNull: false},
    onDelete: 'CASCADE'}
);

Booking.belongsTo(User, {
    foreignKey: { name: 'passengerId', allowNull: false},
    onDelete: 'CASCADE'}
);

module.exports = {
    User,
    Trip,
    Booking
};
