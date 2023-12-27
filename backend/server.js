const express = require("express");
const app = express();

require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Waka application."});
});

const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);

let bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});