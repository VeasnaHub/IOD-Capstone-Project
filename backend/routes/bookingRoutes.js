const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to get all bookings
router.get('/', (req, res) => {
    Controllers.bookingController.getBookings(res);
});

// Route to fetch bookings by driver ID
router.get('/bookingsbydriverid', (req, res) => {
    Controllers.bookingController.fetchBookingsByDriverId(req, res);
});

// Route to fetch bookings by passenger ID
router.get('/bookingsbypassengerid', (req, res) => {
    Controllers.bookingController.fetchBookingsByPassengerId(req, res);
});

// Route to fetch bookings by trip ID
router.get('/bookingsbytripid/:id', (req, res) => {
    Controllers.bookingController.fetchBookingsByTripId(req, res);
});

// Route to request a new booking
router.post('/request', (req, res) => {
    Controllers.bookingController.requestBooking(req, res);
});

// Route to update a booking
router.put('/:id', (req, res) => {
    Controllers.bookingController.updateBooking(req, res);
});

// Route to cancel a booking
router.delete('/:id', (req, res) => {
    Controllers.bookingController.cancelBooking(req, res);
});

// Export the router
module.exports = router;

