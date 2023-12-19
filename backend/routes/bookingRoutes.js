const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.bookingController.getBookings(res);
});

router.post('/request', (req, res) => {
    Controllers.bookingController.requestBooking(req.body, res)
});

router.delete('/:id', (req, res) => {
    Controllers.bookingController.cancelBooking(req, res)
});

module.exports = router;
