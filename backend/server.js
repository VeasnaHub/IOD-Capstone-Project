// Load environment variables from .env files
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const dotenv = require('dotenv');
const environment = process.env.NODE_ENV || 'local';

// Load environment-specific variables from .env files
dotenv.config({ path: `./.env.${environment}` });

// Connect to the database
let dbConnect = require('./dbConnect');

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Routes for user-related operations
let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Routes for trip-related operations
let tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);

// Routes for booking-related operations
let bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
