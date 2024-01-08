"use strict";

const Models = require("../models");

// Get all trips
const getTrips = (res) => {
  Models.Trip.findAll({}).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

// Fetch trips for a given driver id
const fetchTripsByDriverId = (req, res) => {
  Models.Trip.findAll({
    where: { driverId: req.params.id }
  }).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

// Fetch data for a given trip id
const fetchdDataByTripId = (req, res) => {
  Models.Trip.findAll({
    where: { id: req.params.id }
  }).then(function (data) {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

// Add a new trip
const addTrip = async (req, res) => {
  try {
    const { departure, destination, serviceDay, departureTime, unitPrice, availableSeats, driverId } = req.body;

    if (!(departure && destination && serviceDay && departureTime && unitPrice && availableSeats && driverId)) {
      res.status(400).json({ result: "All input is required" });
      return;
    }

    const tripMetaData = await Models.Trip.create({
      departure,
      destination,
      serviceDay,
      departureTime,
      unitPrice,
      availableSeats,
      driverId,
    });

    const trip = tripMetaData.get({ plain: true });
    res.status(201).json({ result: "Trip successfully added", data: trip });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// Edit an existing trip
const editTrip = (req, res) => {
  Models.Trip.update(req.body, {
    where: { id: req.params.id }
  }).then(function (data) {
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a trip
const deleteTrip = (req, res) => {
  Models.Trip.destroy({
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
  getTrips,
  fetchTripsByDriverId,
  fetchdDataByTripId,
  addTrip,
  editTrip,
  deleteTrip
};
