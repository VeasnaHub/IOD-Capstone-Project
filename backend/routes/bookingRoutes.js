const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.bookingController.getBookings(res);
});

router.get('/bookingsbydriverid', (req, res) => {
    Controllers.bookingController.fetchBookingsByDriverId(req, res);
});

router.get('/bookingsbypassengerid', (req, res) => {
    Controllers.bookingController.fetchBookingsByPassengerId(req, res);
});

router.get('/bookingsbytripid/:id', (req, res) => {
    Controllers.bookingController.fetchBookingsByTripId(req, res);
});

router.post('/request', (req, res) => {
    Controllers.bookingController.requestBooking(req, res);
});

router.put('/:id', (req, res) => {
    Controllers.bookingController.updateBooking(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.bookingController.cancelBooking(req, res);
});

module.exports = router;
