const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.tripController.getTrips(res);
});

router.get('/tripsbydriverid/:id', (req, res) => {
    Controllers.tripController.fetchTripsByDriverId(req, res);
});

router.get('/tripsbytripid/:id', (req, res) => {
    Controllers.tripController.fetchdDataByTripId(req, res);
});

router.post('/add', (req, res) => {
    Controllers.tripController.addTrip(req, res)
});

router.put('/:id', (req, res) => {
    Controllers.tripController.editTrip(req, res)
});

router.delete('/:id', (req, res) => {
    Controllers.tripController.deleteTrip(req, res)
});

module.exports = router;
