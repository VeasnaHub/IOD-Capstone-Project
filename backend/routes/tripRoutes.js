const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.get('/', verifyToken, (req, res) => {
    Controllers.tripController.getTrips(res);
});

router.get('/tripsbydriverid/:id', (req, res) => {
    Controllers.tripController.fetchTripsByDriverId(req, res);
});

router.post('/add', (req, res) => {
    Controllers.tripController.addTrip(req.body, res)
});

router.put('/:id', (req, res) => {
    Controllers.tripController.editTrip(req, res)
});

router.delete('/:id', (req, res) => {
    Controllers.tripController.deleteTrip(req, res)
});

module.exports = router;
