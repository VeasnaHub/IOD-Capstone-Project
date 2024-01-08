require("dotenv").config();
const jwt = require("jsonwebtoken");

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
    // Extract token from request body, query parameters, or headers
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        // If no token is provided, respond with an error
        return res.status(403).send("A token is required for authentication");
    }

    try {
        // Verify the token using the secret key from the environment variables
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        // Attach decoded user information to the request object
        req.user = decoded;

        // Log the decoded information (optional)
        console.log(decoded);
    } catch (err) {
        // If the token is invalid, respond with an error
        return res.status(401).send("Invalid Token");
    }

    // Continue to the next middleware or route handler
    return next();
};

// Function to create a new JWT token
const createToken = (userId, userEmail) => {
    const token = jwt.sign(
        { user_id: userId, userEmail },
        process.env.JWT_KEY,
        { expiresIn: "2h" }
    );
    return token;
};

// Export the middleware and token creation functions
module.exports = { verifyToken, createToken };
