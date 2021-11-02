const db = require('../models');
const Floor = db.floors;
const Op = db.Sequelize.Op;

//  Create and save Floor
exports.create = (req, res) => {
    //validate requests
    console.log(req.body);
    if(Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    //create Floor
    const floor = {
        floor_number: req.body.floor_number,
        max_x_coordinate: req.body.max_x_coordinate,
        max_y_coordinate: req.body.max_y_coordinate
    };

    //Save floor in the database
    Floor.create(floor)
        .then(data =>{
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while creating the floor",
            });
        });
};

//  Retrieve all Floors from the database
exports.findAll = (req, res) => {

    Floor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving all floors."
            });
        });
};

// Retrieve a single Floor with an id from the database
exports.findOne = (req, res) => {
    const id = req.params.id;

    Floor.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `Could not find floor with id=${id}.`
                });
            }
        })
        .catch(err  =>{
            res.status(500).send({
                message: `Error retrieving floor with id=${id}.`
            });
        });
};

// Update a Floor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Floor.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if(num == 1){
                res.send({ 
                    message: `Floor with id=${id} was updated successfully.`
                });
            }else{
                res.send({ 
                    message: `Could not update floor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updateting floor with id=${id}.`
            });
        });
}

// Delete a Floor by the id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Floor.destroy({
        where: { id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Floor was deleted successfully."
                });
            }else{
                res.send({
                    message: `Could not delete floor with id=${id}.`
                });
            }
        })
        .catch(err  => {
            res.status(500).send({
                message: `could not delete floor with id=${id}.`
            });
        });
};

// Delete all Floors from the database
exports.deleteAll = (req, res) => {
    Floor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({
                message: `${nums} Floors were deleted successfully.`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Some error occurred while removing all floors.`
            });
        });
};