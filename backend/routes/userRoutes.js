const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const { verifyToken } = require('../middleware/auth');

// Route to get all users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
});

// Route to login a user
router.post('/login', (req, res) => {
    Controllers.userController.loginUser(req, res);
});

// Route to register a new user
router.post('/register', (req, res) => {
    Controllers.userController.registerUser(req, res);
});

// Route to create a new user
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

// Route to update an existing user
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
});

// Route to delete a user
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

// Export the router
module.exports = router;
