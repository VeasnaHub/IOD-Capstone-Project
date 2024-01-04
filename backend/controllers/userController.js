"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs');
const { createToken } = require('../middleware/auth');

const getUsers = (res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).json({ result: "All input in required" });
            return;
        }

        const user = await Models.User.findOne({ raw: true, where: { email: email }});
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = createToken(user.id, email);
            user.token = token;

            console.log(user)

            res.status(200).json({ result: "User successfully logged in", data: user });
        }
        else res.status(400).json({ result: "Invalid user credentials" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ result: err.message })
    }
}

const registerUser = async (req, res) => {

    try {
        const { dateOfBirth, email, password } = req.body;

        if (!(email && password && dateOfBirth)) {
            res.status(400).json({ result: "All input is required"});
            return;
        }

        const oldUser = await Models.User.findOne({ where: { email }});

        if (oldUser) {
            res.status(409).json({ result: "User already exists. Please login" });
            return;
        }

        let encryptedPassword = await bcrypt.hash(password, 10);

        const userMetadata = await Models.User.create({
            email: email.toLowerCase(),
            password: encryptedPassword,
            dateOfBirth
        });

        const user = userMetadata.get({plain: true})
        const token = createToken(user.id, email);

        user.token = token;

        res.status(201).json({ result: "User successfully registered", data: user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ result: err.message })
    }
}

const createUser = (data, res) => {
    Models.User.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
    Models.User.update(req.body, {
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
}

const deleteUser = (req, res) => {
    Models.User.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
}

module.exports = {
    getUsers,
    loginUser,
    registerUser,
    createUser,
    updateUser,
    deleteUser
}
