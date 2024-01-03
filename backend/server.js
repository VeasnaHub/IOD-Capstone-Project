require('dotenv').config();

const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

const dotenv = require('dotenv');
const environment = process.env.NODE_ENV || "local";

dotenv.config({ path: `./.env.${environment}` });

let dbConnect = require("./dbConnect");

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to Waka application."});
// });

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);

let bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});