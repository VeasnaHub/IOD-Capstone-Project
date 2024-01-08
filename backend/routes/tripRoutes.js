const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to get all trips
router.get('/', (req, res) => {
    Controllers.tripController.getTrips(res);
});

// Route to fetch trips by driver ID
router.get('/tripsbydriverid/:id', (req, res) => {
    Controllers.tripController.fetchTripsByDriverId(req, res);
});

// Route to fetch trip data by trip ID
router.get('/tripsbytripid/:id', (req, res) => {
    Controllers.tripController.fetchdDataByTripId(req, res);
});

// Route to add a new trip
router.post('/add', (req, res) => {
    Controllers.tripController.addTrip(req, res);
});

// Route to edit an existing trip
router.put('/:id', (req, res) => {
    Controllers.tripController.editTrip(req, res);
});

// Route to delete a trip
router.delete('/:id', (req, res) => {
    Controllers.tripController.deleteTrip(req, res);
});

// Export the router
module.exports = router;

