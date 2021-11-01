module.exports = app => {
    const floors = require('../controllers/floor.controller.js');

    var router = require("express").Router();
    router.post("/", floors.create);

    app.use('/api/floors', router);
};