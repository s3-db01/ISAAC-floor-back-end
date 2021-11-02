module.exports = app => {
    const floors = require('../controllers/floor.controller.js');

    var router = require("express").Router();
    
    // Create a new floor
    router.post("/", floors.create);

    // Retrieve all floors
    router.get("/", floors.findAll);

    // Retrieve a single floor by id
    router.get("/:id", floors.findOne);

    // Update a floor by id
    router.put("/:id", floors.update);

    // Delete a floor by id
    router.delete("/:id", floors.delete);

    // Delete all floors
    router.delete("/", floors.deleteAll);

    app.use('/api/floors', router);
};