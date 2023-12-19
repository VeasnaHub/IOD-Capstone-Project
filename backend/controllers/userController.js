"use strict";

const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

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
        where: { userId: req.params.id }
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
        where: { userId: req.params.id }
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
    createUser,
    updateUser,
    deleteUser
}
