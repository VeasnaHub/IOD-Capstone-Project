const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.bookingController.getBookings(res);
});

// router.get('/bookingsbydriverid/:id', (req, res) => {
    // Controllers.bookingController.fetctBookingsByDriverId(req, res);
// });

router.get('/bookingsbypassengerid/:id', (req, res) => {
    Controllers.bookingController.fetctBookingsByPassengerId(req, res);
});

router.get('/bookingsbytripid/:id', (req, res) => {
    Controllers.bookingController.fetctBookingsByTripId(req, res);
});

router.post('/request', (req, res) => {
    Controllers.bookingController.requestBooking(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.bookingController.updateBooking(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.bookingController.cancelBooking(req, res);
});

module.exports = router;
