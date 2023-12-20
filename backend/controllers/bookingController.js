"use strict";

const Models = require("../models");

const getBookings = (res) => {
    Models.Booking.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const fetctBookingsByDriverId = (req, res) => {
    Models.Booking.findAll({
        where: { driverId: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const fetctBookingsByPassengerId = (req, res) => {
    Models.Booking.findAll({
        where: { passengerId: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const fetctBookingsByTripId = (req, res) => {
    Models.Booking.findAll({
        where: { tripId: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const requestBooking = (data, res) => {
    Models.Booking.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const updateBooking = (req, res) => {
    Models.Booking.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const cancelBooking = (req, res) => {
    Models.Booking.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getBookings,
    fetctBookingsByDriverId,
    fetctBookingsByPassengerId,
    fetctBookingsByTripId,
    updateBooking,
    requestBooking,
    cancelBooking
}
