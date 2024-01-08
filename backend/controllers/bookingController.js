"use strict";

const Models = require("../models");

// Get all bookings
const getBookings = (res) => {
    Models.Booking.findAll({}).then(function (data) {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

// Fetch bookings for a given driver id
const fetchBookingsByDriverId = (req, res) => {
    Models.Booking.findAll({ include: { model: Models.Trip, where: req.query } })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// Fetch bookings for a given passenger id
const fetchBookingsByPassengerId = (req, res) => {
    Models.Booking.findAll({
        include: [
            {
                model: Models.Trip,
            },
        ],
        where: {
            passengerId: req.query.passengerId,
        },
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// Fetch bookings for a given trip id
const fetchBookingsByTripId = (req, res) => {
    Models.Booking.findAll({
        where: { tripId: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

// Request a booking
const requestBooking = async (req, res) => {
    try {
        const { requestedSeat, tripId, passengerId } = req.body;

        if (!(requestedSeat)) {
            res.status(400).json({ result: "Please enter the number of seats" });
            return;
        }

        const bookingMetaData = await Models.Booking.create({
            requestedSeat,
            tripId,
            passengerId,
        });

        const booking = bookingMetaData.get({ plain: true });
        res.status(201).json({ result: "Booking successfully added", data: booking });
    } catch (err) {
        console.log(err);
        res.send({ result: 500, error: err.message });
    }
};

// Update a booking
const updateBooking = (req, res) => {
    Models.Booking.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data });
    })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// Cancel a booking
const cancelBooking = (req, res) => {
    Models.Booking.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data });
    })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getBookings,
    fetchBookingsByDriverId,
    fetchBookingsByPassengerId,
    fetchBookingsByTripId,
    updateBooking,
    requestBooking,
    cancelBooking
};
