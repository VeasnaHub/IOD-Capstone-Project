"use strict";

const Models = require("../models");

const getTrips = (res) => {
    Models.Trip.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const fetchTripsByDriverId = (req, res) => {
    Models.Trip.findAll({
        where: { driverId: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const addTrip = (data, res) => {
    Models.Trip.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const editTrip = (req, res) => {
    Models.Trip.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
}

const deleteTrip = (req, res) => {
    Models.Trip.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
}

module.exports = {
    getTrips,
    fetchTripsByDriverId,
    addTrip,
    editTrip,
    deleteTrip
}
